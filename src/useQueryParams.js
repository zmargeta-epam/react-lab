import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

const useQueryParams = (config = []) => {
  const [params, setParams] = useSearchParams()

  const result = useMemo(
    () =>
      config.flatMap((it) => {
        const { name, fallback, converter = {}, unset } = it

        return [
          converter.inverse?.convert?.(params.get(name)) || params.get(name) || fallback,
          (value) => {
            setParams((urlParams) => {
              value && value !== fallback
                ? urlParams.set(name, converter.convert?.(value) || value)
                : urlParams.delete(name)
              unset?.forEach((item) => urlParams.delete(item))
              return urlParams
            })
          },
        ]
      }),
    [config, params, setParams]
  )

  return [...result, params, setParams]
}

export default useQueryParams
