import { IncomingMessage, ServerResponse } from "http"

// function checks if user cookies exist on req object. If it doesn't, this will redirect the user to login page. Uses 302 for "temporary redirect"
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
