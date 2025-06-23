import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  matcher: ['/questions', '/vacancies/add'],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  const url = request.nextUrl;

  const isVacancyAdd = url.pathname === '/vacancies/add';
  const isQuestionsPage = url.pathname === '/questions';
  const pageParam = Number(url.searchParams.get('page'));

  const needsAuth = (isQuestionsPage && pageParam >= 2) || isVacancyAdd;

  if (needsAuth && !token) {
    const redirectUrl = new URL('/', request.url);
    redirectUrl.searchParams.set('login', 'true');
    redirectUrl.searchParams.set('from', url.pathname + url.search);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}
