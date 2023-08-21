import { NextResponse } from 'next/server';

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/signin' || path === '/signup';
  const token = request.cookies.get('calidoUser')?.value || '';
  // const makeFunc = async () => {
  //   const response = await customFetch('/users/me', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${state.token}`,
  //     },
  //   });
  //   console.log(response);
  //   console.log('asd');
  // };
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*', '/signin', '/signup'],
};
