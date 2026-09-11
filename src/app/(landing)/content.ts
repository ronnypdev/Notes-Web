// All landing-page copy in one place, so text edits never touch layout.

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES = [
  {
    icon: "plus" as const,
    title: "Create & Edit",
    body: "A note opens as a draft and saves when you hit Save. Cancelling leaves nothing behind.",
  },
  {
    icon: "tag" as const,
    title: "Tags",
    body: "Add as many tags as a note needs with an inline tag input. Every tag shows on the card.",
  },
  {
    icon: "search" as const,
    title: "Search",
    body: "Filter by title, body, or tag as you type. The query lives in the URL, so results survive a refresh.",
  },
  {
    icon: "archive" as const,
    title: "Archive & Restore",
    body: "Move a note out of your active list with one click, and restore it from Archived Notes just as easily.",
  },
];

export const STEPS = [
  {
    title: "Create Your Account",
    body: "Email and password with inline validation, or sign in with Google in one click.",
  },
  {
    title: "Write Your First Note",
    body: "Title, body, tags. Save when you are ready, and a toast confirms it landed.",
  },
  {
    title: "Find It Again",
    body: "Search by title, content, or tags. Archive what you are finished with to keep the list short.",
  },
];

export const BENEFITS = [
  {
    title: "Nothing saves until you say so",
    body: "Notes open as a draft first. A half-finished thought never ends up in your list, and cancelling never leaves junk behind.",
  },
  {
    title: "Your active list stays short",
    body: "Archive is one click away and reversible. Old notes leave your list without leaving your account.",
  },
  {
    title: "Deleting is safe to do",
    body: "Deleting asks first, updates the list instantly, and rolls back automatically if the request fails.",
  },
  {
    title: "The app reads the way you want",
    body: "Light, Dark, or System for color. Sans Serif, Serif, or Monospace for type. Both choices are remembered across sessions.",
  },
];

export const SECURITY_POINTS = [
  {
    icon: "lock" as const,
    title: "Protected routes",
    body: "Notes and settings require sign-in. Visitors get a gate page, not your data.",
  },
  {
    icon: "refresh" as const,
    title: "Password you control",
    body: "Change it from Settings. Every other session is signed out on success.",
  },
  {
    icon: "check" as const,
    title: "Reset by email",
    body: "Forgot your password? A branded reset link gets you into a secure new-password flow.",
  },
];

export const FAQS = [
  {
    q: "Is Notes really free?",
    a: "Yes. There are no tiers, no trial, and no card. Every feature on this page is available on a free account.",
  },
  {
    q: "Do I need an account to use it?",
    a: "Yes. Notes and settings require sign-in, so your notes stay yours. Visitors get a gate page instead.",
  },
  {
    q: "Can I sign in with Google?",
    a: "Yes. One click, with no password to remember. Email and password works too.",
  },
  {
    q: "What happens when I delete a note?",
    a: "You get a confirmation first. The list updates instantly, and if the request fails the note comes back.",
  },
  {
    q: "Does it work on a phone?",
    a: "Yes. The three-pane desktop layout collapses to one column with a slide-out menu and a bottom nav bar.",
  },
  {
    q: "Can I change how it looks?",
    a: "Light, Dark, or System for color, and Sans Serif, Serif, or Monospace for type. Both choices persist across sessions.",
  },
];
