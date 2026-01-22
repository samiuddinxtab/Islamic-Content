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
  // Only redirect if we're not already on a valid locale path
  const redirectUrl = request.nextUrl.clone();
  if (!pathname.startsWith(`/${DEFAULT_LOCALE}/`) && pathname !== `/${DEFAULT_LOCALE}`) {
    // Prepend the default locale to the pathname
    redirectUrl.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
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