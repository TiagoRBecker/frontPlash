import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Configurações do middleware
  pages: {
    signIn: '/auth/signin', // Página de login
  },
  // Defina as rotas que precisam de autenticação
  matcher: ['/cart', '/library/:path*'],
});
