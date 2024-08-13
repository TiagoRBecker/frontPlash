export { default } from "next-auth/middleware"
import { NextResponse } from 'next/server'


import { getToken } from 'next-auth/jwt'

// Este segredo deve corresponder ao valor em seu arquivo .env
const secret = process.env.NEXTAUTH_SECRET

 /*export async function middleware(request) {
  const token = await getToken({ req: request, secret })

  if (token) {
   
    return NextResponse.next()
  }
  
  // Se o usuário não estiver autenticado, redirecione para a página de login
  return NextResponse.redirect(new URL(`/auth/signin`, request.url))
}
*/


export const config = {
  matcher: ['/cart','/library/:path*']
}