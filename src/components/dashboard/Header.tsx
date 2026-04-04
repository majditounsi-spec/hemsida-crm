"use client";

import { useTranslations } from "next-intl";
import { Search, Bell, Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const next = locale === "sv" ? "en" : "sv";
    router.replace(pathname, { locale: next });
  }

  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6">
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder={t("search")}
          className="w-full pl-10 pr-4 py-2 bg-muted rounded-lg text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={switchLocale}
          className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
        >
          <Globe className="w-5 h-5" />
        </button>
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
          U
        </div>
      </div>
    </header>
  );
}
