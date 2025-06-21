import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/questions'],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token');
  const url = request.nextUrl;
  const page = url.searchParams.get('page');

  const pageNum = Number(page);
  const needsAuth = pageNum >= 2;

  if (needsAuth && !token) {
    const redirectUrl = url.clone();
    redirectUrl.pathname = '/';
    redirectUrl.searchParams.set('login', 'true');
    redirectUrl.searchParams.set('from', url.pathname + url.search);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}
