import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Run intl middleware first
  const intlResponse = intlMiddleware(request);

  // Check if accessing dashboard routes
  const isDashboard = pathname.match(/^\/(sv|en)\/dashboard/);
  if (isDashboard) {
    const hasAuth = request.cookies.has("nf_jwt");
    if (!hasAuth) {
      const locale = pathname.startsWith("/en") ? "en" : "sv";
      const loginUrl = new URL(`/${locale}/login`, request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return intlResponse;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)", "/"],
};
