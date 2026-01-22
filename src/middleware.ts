import { NextRequest, NextResponse } from 'next/server';
import { isValidLanguage } from './app/i18n';

const DEFAULT_LOCALE = 'en';

export function middleware(request: NextRequest) {
  // Extract locale from pathname
  const pathname = request.nextUrl.pathname;
  const pathnameLocale = pathname.split('/')[1];

  // Check if the locale is supported
  if (isValidLanguage(pathnameLocale)) {
    // Locale is valid, continue with the request
    return NextResponse.next();
  }

  // Redirect to default locale if the detected locale is not supported
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};