import { IncomingMessage, ServerResponse } from "http"

/**
Checks if user cookies exist on the IncomingMessage object.
If not, this function redirects user to login page with a "temporary redirect" 302 status code.
@param {Object} params - Object containing the request and response objects.
@param {http.IncomingMessage} params.req - The HTTP request object.
@param {http.ServerResponse} params.res - The HTTP response object.
@returns {Object} - An object containing the props to be passed to the page component.
*/
export async function getServerSideProps({
  req,
  res,
}: {
  req: IncomingMessage
  res: ServerResponse
}) {
  const userString =
    req.headers.cookie
      ?.split("; ")
      .find((cookie) => cookie.startsWith("user="))
      ?.split("=")[1] || ""
  const user = userString ? JSON.parse(userString) : null

  if (!user) {
    res.setHeader("location", "/")
    res.statusCode = 302
    res.end()
    return { props: {} }
  }

  return {
    props: {},
  }
}
