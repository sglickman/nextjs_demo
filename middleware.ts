export { auth as middleware } from "auth"

export const config = {
  // https://nextjs.org/docs/app/building-your-application/rounting/middleware#matcher
  matcher: ['/((?!api|https:\/\/next-auth.js.org|_next/static|favicon.ico|_next/image|.*\\.png$).*)'],
}