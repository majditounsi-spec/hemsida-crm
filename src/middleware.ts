import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle auth callback without i18n
  if (pathname.startsWith("/auth/")) {
    const { supabaseResponse } = await updateSession(request);
    return supabaseResponse;
  }

  // Run intl middleware first
  const intlResponse = intlMiddleware(request);

  // Check if accessing dashboard routes
  const isDashboard = pathname.match(/^\/(sv|en)\/dashboard/);
  if (isDashboard) {
    const { user } = await updateSession(request);
    if (!user) {
      const locale = pathname.startsWith("/en") ? "en" : "sv";
      const loginUrl = new URL(`/${locale}/login`, request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Refresh Supabase session
  await updateSession(request);

  return intlResponse;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)", "/"],
};
