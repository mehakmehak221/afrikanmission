export type AgeGroup = "under-12" | "13-17" | "18-25" | "26+";

export type MembershipPath =
  | "teleskope-music-artists"
  | "rise-afrikan-rise-mission-giants"
  | "both";

export type Interest =
  | "download-music"
  | "collaborate-music"
  | "lead-mission"
  | "buy-merchandise"
  | "attend-tour"
  | "request-interview"
  | "stay-updated";

export interface Submission {
  name: string;
  email: string;
  phone: string;
  ageGroup: AgeGroup | "";
  motivation: string;
  countries: string[];
  membership: MembershipPath | "";
  interests: Interest[];
}

export interface AgeGroupOption {
  value: AgeGroup;
  label: string;
}

export interface MembershipOption {
  value: MembershipPath;
  title: string;
  description: string;
}

export interface InterestOption {
  value: Interest;
  label: string;
}

export const AGE_GROUPS: AgeGroupOption[] = [
  { value: "under-12", label: "Under 12" },
  { value: "13-17", label: "13–17" },
  { value: "18-25", label: "18–25" },
  { value: "26+", label: "26+" },
];

export const MEMBERSHIP_OPTIONS: MembershipOption[] = [
  {
    value: "teleskope-music-artists",
    title: "Teleskope Music Artists",
    description: "Create & sell my own music.",
  },
  {
    value: "rise-afrikan-rise-mission-giants",
    title: "Rise [Afrikan] Rise Mission Giants",
    description: "Support Events & Promote community-sourced products",
  },
  {
    value: "both",
    title: "Both",
    description: "I want to walk both paths.",
  },
];

export const INTEREST_OPTIONS: InterestOption[] = [
  { value: "download-music", label: "Download Teleskope Music & Ringtones" },
  { value: "collaborate-music", label: "Collaborate on Music projects" },
  { value: "lead-mission", label: "Lead an Afrikan Mission in my country" },
  { value: "buy-merchandise", label: "Buy Afrikan Alkebulan Merchandise" },
  { value: "attend-tour", label: "Attend an upcoming tour" },
  { value: "request-interview", label: "Request an interview (TV, Radio or Podcast)" },
  { value: "stay-updated", label: "Stay up to date with Teleskope's latest news" },
];
