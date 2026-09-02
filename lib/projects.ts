import {
  Bell, CalendarDays, Cloud, Database, DollarSign, GitBranch,
  Globe, LayoutDashboard, Mail, Server, Sheet, Shield, Terminal, Users, Video, Zap,
  type LucideIcon,
} from 'lucide-react'

export interface Feature { Icon: LucideIcon; label: string; desc: string }
export interface Preview { src: string; alt: string; title: string; desc: string }
export interface PipelineStep { label: string; sub: string; Icon: LucideIcon }
export interface Testimonial { quote: string; initials: string; name: string; role: string }

export interface Project {
  slug: string
  tag: string
  nameHighlight: string
  nameRest: string
  category: string
  tags: string[]
  summary: string
  description: string
  websiteUrl: string
  statusLabel: string
  year: string
  image: string
  imageAlt: string
  features: Feature[]
  previews: Preview[]
  pipelineIntro: string
  pipeline: PipelineStep[]
  infra: Feature[]
  techStack: string[]
  overview: string
  challenge: string
  solutionSummary: string
  outcome: string
  testimonial?: Testimonial
}

export const PROJECTS: Project[] = [
  {
    slug: 'futurepro-soccer',
    tag: 'Client project — Personal training platform',
    nameHighlight: 'FuturePro',
    nameRest: ' Soccer',
    category: 'Client project — Personal training platform',
    tags: ['Web Application', 'Booking Platform', 'Operations System'],
    summary: 'A booking, scheduling, and business-analytics platform for elite soccer coaching.',
    description:
      'A full-stack personal training platform for elite soccer coaches and athletes. Handles session booking, coach scheduling, player communications, and complete business analytics in one system.',
    websiteUrl: 'https://futureprosoccer.com',
    statusLabel: 'Deployed & live',
    year: '2026',
    image: '/futurepro-dashboard.png',
    imageAlt: 'FuturePro Soccer — CEO dashboard',
    features: [
      {
        Icon: Users,
        label: 'Athlete Portal',
        desc: 'Sign up for packages, camps, and drop-ins. Choose sessions based on coach availability and location, and invite other players to join.',
      },
      {
        Icon: CalendarDays,
        label: 'Coach Dashboard',
        desc: 'Set availability and locations. Once athletes book, build session plans, log notes, and communicate directly through the platform.',
      },
      {
        Icon: LayoutDashboard,
        label: 'Admin Suite',
        desc: 'Full business visibility: revenue, net profit, expenses, all sign-ups, coach account management, and live website traffic.',
      },
      {
        Icon: Shield,
        label: 'Role-Based Auth',
        desc: 'Three distinct permission layers — Athlete, Coach, Admin. Each role sees only its own data, enforced at the database level via RLS policies.',
      },
    ],
    previews: [
      {
        src: '/futurepro-dashboard.png',
        alt: 'CEO Dashboard',
        title: 'CEO Dashboard',
        desc: 'The owner sees live revenue, net profit, coach payroll, expenses, and athlete sign-ups — all in one command center.',
      },
      {
        src: '/futurepro-athlete-portal.png',
        alt: 'Athlete Portal',
        title: 'Athlete Portal',
        desc: 'Athletes view their upcoming sessions, coach notes, session history, and communicate directly through the platform.',
      },
    ],
    pipelineIntro:
      'Every code change ships to production automatically. Push to main — Vercel picks it up, builds the Next.js app, and the live site updates in under 30 seconds. No manual deploys, no downtime.',
    pipeline: [
      { label: 'Write Code', sub: 'TS + Tailwind',   Icon: Terminal },
      { label: 'git push',   sub: 'origin/main',     Icon: GitBranch },
      { label: 'Vercel CI',  sub: 'Build fires',     Icon: Zap },
      { label: '~25s Build', sub: 'Next.js compile', Icon: Server },
      { label: 'Live',       sub: 'Global edge',     Icon: Globe },
    ],
    infra: [
      {
        Icon: Database,
        label: 'Supabase (Postgres)',
        desc: 'Stores users, sessions, bookings, coach schedules, messages, and all financial data. Row-level security enforces role isolation at the database layer.',
      },
      {
        Icon: DollarSign,
        label: 'Stripe Checkout',
        desc: 'Athletes pay for packages, camps, and drop-ins through Stripe Checkout. Webhook-driven, API-key-authenticated integration keeps payment status in sync with bookings automatically.',
      },
      {
        Icon: Zap,
        label: 'Vercel — CI/CD',
        desc: 'Every push to main triggers an automatic production build. Zero-downtime deploys with instant rollback — the client never sees an outage during an update.',
      },
      {
        Icon: Globe,
        label: 'Squarespace',
        desc: "futureprosoccer.com registered via Squarespace. DNS A and CNAME records point to Vercel's edge network for fast global delivery.",
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Prisma ORM', 'Tailwind CSS', 'NextAuth.js', 'Stripe', 'Vercel'],
    overview:
      'FuturePro Soccer trains athletes and coaches across a network of elite soccer programs. Before this build, session bookings, coach schedules, and business reporting were handled across a patchwork of spreadsheets and manual messages.',
    challenge:
      'The business needed a single system that could handle three very different audiences at once — athletes booking sessions, coaches managing their schedules and player notes, and ownership tracking revenue and growth — without any one group seeing more than they should.',
    solutionSummary:
      'A single platform brings athlete booking, coach scheduling, and business reporting together, with role-based access built into the database layer so athletes, coaches, and ownership each see only what belongs to them.',
    outcome:
      'The platform now runs the entire booking and coaching workflow end to end, with every push to the main branch deploying automatically to production in under thirty seconds.',
  },
  {
    slug: 'nexttouch',
    tag: 'Original build — Youth sports coaching platform',
    nameHighlight: 'Next',
    nameRest: 'Touch',
    category: 'Original build — Youth sports coaching platform',
    tags: ['Mobile App', 'Coaching Platform', 'Youth Safety'],
    summary: 'A mobile-first coaching platform where players submit training clips for coach feedback.',
    description:
      'A mobile-first coaching platform for youth soccer clubs. Players submit training clips for coach feedback, coaches run practices and rosters, and admins manage subscriptions and safety moderation for every club from one dashboard.',
    websiteUrl: 'https://nexttouchsports.com',
    statusLabel: 'Deployed & live',
    year: '2026',
    image: '/nexttouch-lesson.png',
    imageAlt: 'NextTouch — practice and video submission',
    features: [
      {
        Icon: Video,
        label: 'Video Feedback Loop',
        desc: 'Players record 30-second training clips and submit them for review. Coaches respond directly in the app, with each clip scoped to Coach-only or Team visibility.',
      },
      {
        Icon: Users,
        label: 'Club & Team Management',
        desc: 'Coaches create clubs and teams, invite players by code, and manage rosters, weekly training plans, and point-based leaderboards.',
      },
      {
        Icon: LayoutDashboard,
        label: 'CEO / Admin Suite',
        desc: 'Full visibility across every club on the platform: subscriptions, promo codes, moderation queues, and account activity, from a dedicated CEO dashboard.',
      },
      {
        Icon: Shield,
        label: 'Youth Safety & Compliance',
        desc: 'Age verification, parental consent flows, message content filtering, and block/report tooling — built for a platform where most users are minors.',
      },
    ],
    previews: [
      {
        src: '/nexttouch-lesson.png',
        alt: 'Practice & Video Submission',
        title: 'Practice & Video Submission',
        desc: 'Players follow a step-by-step practice, then record or upload their attempt for their coach to review.',
      },
      {
        src: '/nexttouch-leaderboard.png',
        alt: 'Team Leaderboard',
        title: 'Team Leaderboard',
        desc: 'Points earned from completed practices rank players on the team leaderboard, updated weekly.',
      },
    ],
    pipelineIntro:
      'The website — marketing pages, signup, login, and legal docs — deploys through Vercel on every push to main. The mobile app is built separately with Flutter and shipped through TestFlight and Google Play.',
    pipeline: [
      { label: 'Write Code', sub: 'TS + Dart',       Icon: Terminal },
      { label: 'git push',   sub: 'origin/main',     Icon: GitBranch },
      { label: 'Vercel CI',  sub: 'Build fires',     Icon: Zap },
      { label: 'Build',      sub: 'Next.js compile', Icon: Server },
      { label: 'Live',       sub: 'Global edge',     Icon: Globe },
    ],
    infra: [
      {
        Icon: Database,
        label: 'Supabase — Postgres + Edge Functions',
        desc: 'Stores clubs, teams, submissions, chat, and subscriptions. 20+ Edge Functions handle checkout, video uploads, moderation, and scheduled cleanup jobs.',
      },
      {
        Icon: Cloud,
        label: 'Cloudflare Stream',
        desc: 'Hosts and streams every training video behind short-lived, authorized playback tokens. Clips are auto-deleted six months after upload via a scheduled job.',
      },
      {
        Icon: DollarSign,
        label: 'Stripe',
        desc: 'Powers subscription checkout, the billing portal, and promo codes through dedicated Edge Functions, kept in sync by a webhook that updates club plans in real time.',
      },
      {
        Icon: Bell,
        label: 'OneSignal',
        desc: 'Push notifications for new coach feedback, released training plans, and club activity — wired through Flutter and a dedicated notification Edge Function.',
      },
    ],
    techStack: ['Flutter', 'Dart', 'Next.js', 'TypeScript', 'Supabase', 'Cloudflare Stream', 'Stripe', 'OneSignal', 'Vercel', 'Tailwind CSS'],
    overview:
      'NextTouch is a coaching platform built for youth soccer clubs, designed from a blank page as an original product rather than a client commission. Most users on the platform are minors, which shaped nearly every decision in the build.',
    challenge:
      'Coaches needed a way to give structured feedback on player technique at scale, clubs needed roster and subscription management, and the platform needed serious safety and moderation tooling given its young user base — all inside one mobile-first product.',
    solutionSummary:
      'A mobile-first product pairs a video feedback loop between players and coaches with club and team management tools, plus a dedicated safety and moderation layer built around a mostly-minor user base from day one.',
    outcome:
      'The web layer — marketing, signup, and auth — deploys continuously through Vercel, while the companion mobile app ships separately through TestFlight and Google Play.',
  },
  {
    slug: 'palm-beach-athletic',
    tag: 'Original build — Youth soccer club launch site',
    nameHighlight: 'Palm Beach',
    nameRest: ' Athletic',
    category: 'Original build — Youth soccer club launch site',
    tags: ['Marketing Website', 'Lead Generation', 'Youth Sports'],
    summary: 'A launch marketing site building the waitlist and clinic pipeline for a new Palm Beach County youth soccer club ahead of its 2027 opening.',
    description:
      "A pre-launch marketing website for Palm Beach Athletic, a youth soccer club opening in Palm Beach County in 2027. The site introduces the club's programs and coaching philosophy, runs free welcome clinics through a full registration flow, and captures every visitor and sign-up straight into a live Google Sheets operations hub.",
    websiteUrl: 'https://pbathletic.org',
    statusLabel: 'Deployed & live',
    year: '2026',
    image: '/pba-hero.png',
    imageAlt: 'Palm Beach Athletic — homepage hero',
    features: [
      {
        Icon: Users,
        label: 'Interest List',
        desc: "Parents join the waitlist ahead of the club's 2027 opening with player details and age group, so the club builds its founding roster before a single ball is kicked.",
      },
      {
        Icon: CalendarDays,
        label: 'Free Clinic Registration',
        desc: 'Each welcome clinic gets its own registration flow — date, time, and location up front, parent and player details captured on submit.',
      },
      {
        Icon: Sheet,
        label: 'Google Sheets Operations Hub',
        desc: 'Interest-list sign-ups, clinic registrations, and website analytics all write directly into Google Sheets, each with its own auto-built dashboard tab — no separate admin panel needed.',
      },
      {
        Icon: Mail,
        label: 'Automated Email Confirmations',
        desc: 'Every clinic registration, interest-list sign-up, and contact form submission triggers a confirmation email through Resend, plus an internal notification to the club.',
      },
    ],
    previews: [
      {
        src: '/pba-hero.png',
        alt: 'Homepage hero',
        title: 'Homepage Hero',
        desc: 'The launch message and primary calls to action — join the interest list or reserve a spot at a free clinic — set against Palm Beach County\'s courts and coastline.',
      },
      {
        src: '/pba-clinic-register.png',
        alt: 'Clinic registration modal',
        title: 'Clinic Registration',
        desc: 'A focused modal captures parent and player details for a specific clinic date, time, and location, then writes the row straight to Google Sheets.',
      },
      {
        src: '/pba-interest-list.png',
        alt: 'Interest list signup form',
        title: 'Interest List Signup',
        desc: 'Parents register interest ahead of the 2027 launch with player age group and current level, building the club\'s founding waitlist.',
      },
    ],
    pipelineIntro:
      'Every code change ships to production automatically. Push to main — Vercel picks it up, builds the Next.js app, and the live site updates in under a minute. No manual deploys, no downtime.',
    pipeline: [
      { label: 'Write Code', sub: 'TS + Tailwind',   Icon: Terminal },
      { label: 'git push',   sub: 'origin/main',     Icon: GitBranch },
      { label: 'Vercel CI',  sub: 'Build fires',     Icon: Zap },
      { label: 'Build',      sub: 'Next.js compile', Icon: Server },
      { label: 'Live',       sub: 'Global edge',     Icon: Globe },
    ],
    infra: [
      {
        Icon: Sheet,
        label: 'Google Sheets API',
        desc: 'A service-account JWT integration appends interest-list, clinic-registration, and analytics events directly into Google Sheets, auto-creating a formatted dashboard tab per clinic on first registration.',
      },
      {
        Icon: Database,
        label: 'Live Website Analytics',
        desc: 'Every visit, page view, and key conversion event (interest-list and clinic-registration submits) logs to a dedicated analytics spreadsheet in real time — no third-party analytics tool required.',
      },
      {
        Icon: Mail,
        label: 'Resend',
        desc: 'Transactional emails for clinic registrations, interest-list sign-ups, and contact form messages — a confirmation to the visitor and a notification to the club, sent from a templated HTML layout.',
      },
      {
        Icon: Zap,
        label: 'Vercel — CI/CD',
        desc: 'pbathletic.org is served from Vercel\'s edge network, with every push to main triggering an automatic production build and zero-downtime deploy.',
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Google Sheets API', 'Resend', 'Vercel'],
    overview:
      "Palm Beach Athletic is a new youth soccer club set to open in Palm Beach County in 2027. Since the club and its facilities don't exist yet, the entire job of the website is to build an audience — families who'll be ready to sign up the moment doors open.",
    challenge:
      "A launch site for a club that isn't open yet lives or dies on lead capture: every visitor who cares needs an easy way to get on the list, every free clinic needs a real registration flow, and the club's small team needed to see and act on that data without logging into a custom admin panel.",
    solutionSummary:
      'The site pairs a program- and philosophy-driven marketing experience with an interest-list flow and a full clinic registration system, all writing straight into Google Sheets — so the club\'s existing spreadsheet workflow becomes the system of record, with dashboards generated automatically as sign-ups come in.',
    outcome:
      "The site is live at pbathletic.org ahead of the club's 2027 launch, capturing interest-list sign-ups and free clinic registrations into a self-updating Google Sheets hub, with confirmation emails going out automatically on every submission.",
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}
