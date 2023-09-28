import { useCallback, useEffect, useState } from 'react'
import { getCookie, setCookie } from './cookies'

export const COOKIE_KEY = "tamdacms_context"
export const VALID_CONTEXT = [
  "tamdagroup.eu",
  "tamdafoods.eu",
  "tamdaoc.eu",
  "tamdamedia.eu",
]

export const isValidContext = (value = "") => VALID_CONTEXT.includes(value)

export const getCurrentContext = () => {
  const context = getCookie(COOKIE_KEY)
  return isValidContext(context) ? context : null
}

export const useCurrentWebsiteContext = () => {
  const [state, setState] = useState(null);

  const setContext = useCallback((context) => {
    setCookie(COOKIE_KEY, context, 365)
    setState(context)
  }, [setCookie, setState])

  useEffect(() => {
    if (!getCurrentContext()) {
      // setContext(VALID_CONTEXT[0])
    } else {
      setState(getCurrentContext())
    }
  }, [])

  return [state, setContext]
}
