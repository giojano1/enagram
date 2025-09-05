import { AudioLines, Baseline, Files, Mic, SpellCheck } from "lucide-react";

export const NavLinks = [
  {
    id: 1,
    name: "მართლმწერი",
    href: "/spell-checker",
    icon: SpellCheck,
  },
  {
    id: 2,
    name: "ტექსტის შედარება",
    href: "/",
    icon: Baseline,
  },
  {
    id: 3,
    name: "ხმა -> ტექსტი",
    href: "/voice-to-text",
    icon: Mic,
  },
  {
    id: 4,
    name: "ტექსტი -> ხმა",
    href: "/text-to-voice",
    icon: AudioLines,
  },
  {
    id: 5,
    name: "PDF კონვერტაცია",
    href: "/pdf-conversion",
    icon: Files,
  },
];
