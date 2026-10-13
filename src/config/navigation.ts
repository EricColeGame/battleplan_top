import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Swords,
  Gamepad2,
  Landmark,
  CalendarClock,
  Star,
  Users,
} from "lucide-react";

export interface NavItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Swords, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "history", path: "/history", icon: Landmark, isContentType: true },
  { key: "release", path: "/release", icon: CalendarClock, isContentType: true },
  { key: "reviews", path: "/reviews", icon: Star, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
