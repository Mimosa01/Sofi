import { ALL_PATHS } from '@/lib/constants/contants';
import { fetcher } from '@/lib/fetch/fetcher';
import { ResponseAuth } from '@/types/constants';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Вызов внешнего API авторизации (твой auth сервер)
    const data: ResponseAuth = await fetcher(ALL_PATHS.EXTERNAL_AUTH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'password',
        username,
        password,
      }),
    });

    // Формируем ответ с установкой cookie
    const response = NextResponse.json({ success: true });

    response.cookies.set('access_token', data.access_token, {
      httpOnly: true,
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax',
    });

    return response;
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
