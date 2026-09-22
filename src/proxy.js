import { NextResponse } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";
const COOKIE = "NEXT_LOCALE";

function getLocale(request) {
  const guardado = request.cookies.get(COOKIE)?.value;
  if (locales.includes(guardado)) return guardado;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferido = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase();
  return locales.includes(preferido) ? preferido : defaultLocale;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;
  const localeEnRuta = locales.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (localeEnRuta) {
    const response = NextResponse.next();
    response.cookies.set(COOKIE, localeEnRuta, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};