import { FastForward } from "lucide-react";

const plans = [
  {
    id: 1,
    name: "Starter Plan",
    price: "$1125",
    cadence: "/month",
    description: "Small businesses getting online for the first time",
    features: [
      { label: "1–3 Page Custom Website", included: true },
      { label: "Fully Responsive Design", included: true },
      { label: "Basic On-Page SEO Setup", included: true },
      { label: "1 Round of Revisions", included: true },
      { label: "Delivery in 2–3 Weeks", included: true },
      { label: "Blog Integration", included: false },
      { label: "Advanced Animations", included: false },
      { label: "Monthly Maintenance", included: false },
    ],
  },
  {
    id: 2,
    name: "Growth Plan",
    price: "$2125",
    cadence: "/month",
    description: "Businesses ready to scale their online presence",
    features: [
      { label: "Up to 7 pages of custom design & development", included: true },
      { label: "SEO optimization + Google Analytics setup", included: true },
      { label: "Blog integration & responsive animations", included: true },
      { label: "Priority support for 30 days after launch", included: true },
      { label: "Up to 7 pages of custom design & development", included: true },
      { label: "SEO optimization + Google Analytics setup", included: true },
      { label: "Blog integration & responsive animations", included: false },
      { label: "Priority support for 30 days after launch", included: false },
    ],
  },
  {
    id: 3,
    name: "Subscription Plan",
    price: "$3125",
    cadence: "contact",
    description: "Clients who want ongoing updates and care",
    features: [
      { label: "Monthly maintenance, backups & security updates", included: true },
      { label: "Performance monitoring & speed optimization", included: true },
      { label: "Design tweaks or content updates (up to 5 hrs/m)", included: true },
      { label: "Priority chat & email support", included: true },
      { label: "Monthly maintenance, backups & security updates", included: true },
      { label: "New Page Development", included: false },
      { label: "Major Redesigns", included: false },
      { label: "PPC or SEO Add-ons", included: false },
    ],
  },
];

export default plans;
