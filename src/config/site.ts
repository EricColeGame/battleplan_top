export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Battleplan Wiki",
  shortName: "Battleplan",
  logoText: "B",
  tagline: "Master Tactics, Units & Battlefield Strategy",
  description: "Explore Battleplan Wiki for complete strategy guides, unit information, tactical tips, gameplay updates, and everything players need to master battles.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://battleplan.top",
  supportEmail: "support@battleplan.top",
  gameUrl: "https://store.steampowered.com/app/3743140/Battleplan/",
  heroVideoId: "-YoFJV9m_5Y", // Battleplan | Gameplay Trailer (SlitherineGames, official publisher)
  social: {
    discord: "https://discord.gg/eQ7yFyt8f8", // Official: Battleplan Discord
    youtube: "https://www.youtube.com/@SlitherineGames", // Official publisher channel
  },
  locales: ["en", "es", "de", "fr"],
  defaultLocale: "en",
};
