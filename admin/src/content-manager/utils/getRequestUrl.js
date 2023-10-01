// FIXME when back-end ready
import { getCurrentContext } from './websiteContext'

const getRequestUrl = (path = "") => {
  const currentContext = getCurrentContext();
  const customContext = currentContext ? `websiteContext=${currentContext}` : ''
  const url = path && path.includes('?') ? `${path}&${customContext}` : `${path}?${customContext}`

  return `/content-manager/${url}`
};

export default getRequestUrl;
