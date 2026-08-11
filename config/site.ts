export const site = {
  previewMode: true,
  businessName: "Bean’s Lawn Care Services",
  shortName: "Bean’s Lawn Care",
  city: "League City",
  state: "TX",
  phone: "+1 (346) 815-7081",
  displayPhone: "(346) 815-7081",
  email: "Beanslawncareservices@gmail.com",
  rating: 5.0,
  ratingLabel: "5.0 local rating",
  familyOwned: true,
  freeEstimates: true,
  smsQuotes: true,
  // Hours and street address intentionally omitted from the preview because
  // they are not verified strongly enough for owner-facing publication.
  colors: {
    ink: "#16351f",
    forest: "#1e5a32",
    grass: "#4f8a49",
    sage: "#b8cda7",
    lime: "#d7e9a8",
    cream: "#f7f4e9",
    paper: "#fffdf7",
    soil: "#8e6b4b"
  }
} as const;

export const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
export const smsBase = `sms:${site.phone.replace(/[^+\d]/g, "")}`;

export const services = [
  {
    id: "mowing",
    title: "Mowing, Trimming & Edging",
    short: "Regular Care",
    body: "Keep the lawn cut, borders crisp, and the whole property looking finished instead of halfway done.",
    icon: "↗"
  },
  {
    id: "cleanup",
    title: "Yard Clean-Ups & Weed Control",
    short: "Reset the Yard",
    body: "For overgrown spaces, neglected corners, and yards that need a clean reset before they feel usable again.",
    icon: "✦"
  },
  {
    id: "beds",
    title: "Mulch & Flower Bed Refreshes",
    short: "Freshen the Beds",
    body: "Refresh tired beds with mulch and cleanup work that gives the front of the home a more polished look.",
    icon: "◒"
  },
  {
    id: "shrubs",
    title: "Shrub Trimming",
    short: "Shape It Up",
    body: "Bring overgrown shrubs back into shape so they frame the property instead of taking it over.",
    icon: "⌁"
  }
] as const;

export const needOptions = [
  { id: "mowing", label: "My lawn needs regular care" },
  { id: "cleanup", label: "My yard is overgrown" },
  { id: "beds", label: "My beds or mulch need work" },
  { id: "shrubs", label: "My shrubs need attention" },
  { id: "multiple", label: "I need help with a few things" },
  { id: "unsure", label: "I’m not sure — I can send photos" }
] as const;

export const reviewThemes = [
  "Reliable local service",
  "Detailed finishing work",
  "Clean, cared-for yards",
  "Responsive communication"
] as const;

export const ownerConfirmations = [
  "Exact current service menu",
  "Current service area",
  "Current business hours",
  "Whether the published street address is customer-facing",
  "Preferred estimate workflow",
  "Real project photo permissions",
  "Logo and brand colors, if any",
  "Recurring-service details, if offered"
] as const;
