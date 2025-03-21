import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Define public paths that don't require authentication
const publicPaths = ['/auth', '/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get('auth_token');

  // If the user is on the root path
  if (pathname === '/') {
    // If user is not authenticated, redirect to auth page
    if (!authToken) {
      return NextResponse.redirect(new URL('/auth', request.url));
    }
    // If user is authenticated, allow access
    return NextResponse.next();
  }

  // If the user is trying to access public paths (auth, login, register)
  if (publicPaths.includes(pathname)) {
    // If user is already authenticated, redirect to root
    if (authToken) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    // If user is not authenticated, allow access to auth pages
    return NextResponse.next();
  }

  // For all other paths
  // If user is not authenticated, redirect to auth page
  if (!authToken) {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // If user is authenticated, allow access
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ['/', '/auth', '/login', '/register', '/dashboard/:path*'],
};
