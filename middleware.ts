import { NextResponse, type NextRequest } from 'next/server';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/copy';

export const config = {
  matcher: ['/get'],
};

export function middleware(req: NextRequest) {
  const ua = req.headers.get('user-agent') ?? '';

  if (/iPhone|iPad|iPod/i.test(ua)) {
    return NextResponse.redirect(APP_STORE_URL, 302);
  }
  if (/Android/i.test(ua)) {
    return NextResponse.redirect(PLAY_STORE_URL, 302);
  }
  return NextResponse.next();
}
