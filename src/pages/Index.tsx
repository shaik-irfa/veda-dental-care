import { Link } from "react-router-dom";
import { useEffect, useState, type ReactNode, type ComponentType } from "react";
import {
  Phone, MessageCircle, Calendar, MapPin, Mail, Instagram, Menu, X,
  Sparkles, Smile, Stethoscope, Baby, Scissors, Wrench, ShieldCheck,
  Award, HeartPulse, Clock, GraduationCap, ArrowRight, Check, Star,
  BadgeCheck, Cpu, Building2,
} from "lucide-react";

import drRatnakar from "@/assets/doctor-ratnakar.jpg";
import drCharani from "@/assets/doctor-charani.jpg";
import inauguration1 from "@/assets/inauguration-1.png";
import inauguration2 from "@/assets/inauguration-2.png";
import vedaLogo from "@/assets/veda-logo.png";
// Real Veda Dental Hospital photographs served directly from Cloudinary
// so the project is fully portable outside of the Lovable preview.
const CLOUDINARY_INFRA   = "https://res.cloudinary.com/dtqwkmnp2/image/upload/v1781244016/ChatGPT_Image_Jun_12_2026_11_19_52_AM_r1q6ig.png";
const CLOUDINARY_ROOMS   = "https://res.cloudinary.com/dtqwkmnp2/image/upload/v1781244008/ChatGPT_Image_Jun_12_2026_11_27_48_AM_hnkqpn.png";
const CLOUDINARY_PEDI    = "https://res.cloudinary.com/dtqwkmnp2/image/upload/v1781244009/ChatGPT_Image_Jun_12_2026_11_23_38_AM_atf3bf.png";
const CLOUDINARY_PROCED  = "https://res.cloudinary.com/dtqwkmnp2/image/upload/v1781244008/ChatGPT_Image_Jun_12_2026_11_25_56_AM_sc4iey.png";
const heroBg = CLOUDINARY_INFRA;
const heroShowcase = CLOUDINARY_ROOMS;
const aboutImage = CLOUDINARY_INFRA;
const INSIDE_IMAGES = [
  { img: CLOUDINARY_INFRA,  caption: "Modern Treatment Room" },
  { img: CLOUDINARY_ROOMS,  caption: "Advanced Infrastructure" },
  { img: CLOUDINARY_PEDI,   caption: "Child-Friendly Dentistry" },
  { img: CLOUDINARY_PROCED, caption: "Professional Dental Care" },
];
import { appointmentsStore } from "@/lib/appointments-store";
import { useReveal } from "@/hooks/use-reveal";

export default function Index() {
  return <Home />;
}


const PHONE_1 = "9705142899";
const PHONE_2 = "9440664941";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello Veda Dental Hospital,\n\nI would like to book an appointment.\n\nName:\nPhone Number:\n\nPlease contact me.\n\nThank you."
);
const WHATSAPP_URL = `https://wa.me/919705142899?text=${WHATSAPP_MSG}`;
const WHATSAPP = "919705142899";
const INSTAGRAM = "https://www.instagram.com/veda_dental_care_/";
const ADDRESS = "22-11-138/1, First Floor, Opp. Swaraj Deluxe, Bose Road, Kothapet, Tenali - 522201";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Doctors", href: "#doctors" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const TREATMENTS = [
  { icon: Wrench, title: "Dental Implants", desc: "Permanent tooth replacements that look and feel natural." },
  { icon: HeartPulse, title: "Root Canal Treatment", desc: "Painless, single-visit RCT using advanced rotary endodontics." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional in-office whitening for a brighter, confident smile." },
  { icon: Smile, title: "Smile Designing", desc: "Custom smile makeovers with digital previews and veneers." },
  { icon: ShieldCheck, title: "Braces & Aligners", desc: "Metal, ceramic and clear aligners for every age and lifestyle." },
  { icon: Baby, title: "Kids Dentistry", desc: "Gentle, anxiety-free dental care for our youngest patients." },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe, minimally invasive extractions including wisdom teeth." },
  { icon: Stethoscope, title: "Dental Cleaning", desc: "Ultrasonic scaling and polishing for healthy gums and breath." },
];

const WHY_US = [
  { icon: GraduationCap, title: "Experienced Specialists", desc: "Led by an Assistant Professor with M.D.S qualification." },
  { icon: Wrench, title: "Modern Equipment", desc: "Latest digital imaging, rotary endo and implant systems." },
  { icon: ShieldCheck, title: "Sterilized Environment", desc: "Hospital-grade sterilization protocols followed strictly." },
  { icon: HeartPulse, title: "Affordable Care", desc: "Transparent pricing with flexible payment options." },
  { icon: Clock, title: "Emergency Support", desc: "Same-day appointments for dental emergencies." },
  { icon: Award, title: "Personalized Treatment", desc: "Custom care plans tailored to your unique needs." },
];

const STATS = [
  { value: "10,000+", label: "Happy Patients" },
  { value: "12+", label: "Years Experience" },
  { value: "25,000+", label: "Dental Procedures" },
  { value: "2", label: "Expert Doctors" },
];

const REVIEWS = [
  {
    name: "Madhurya",
    text: "I highly recommend this dental clinic. The hospital was very clean and hygienic. The doctor was incredibly patient and very lovable with kids, taking great care during my son's check-up. I haven't found a doctor with such a good nature.",
    response: "Thank you so much madam. It means a lot.",
  },
  {
    name: "Mounika Vampugalla",
    text: "Very happy for getting treatment in Veda Dental Care. Doctor's treatment is too good and the hospital's environment is nice. Must visit for good dental care.",
    response: "Thank you madam.",
  },
  {
    name: "Mariyamma Ravuri",
    text: "I had an excellent experience at Veda Dental Clinic. The doctor and staff were very professional and provided top-notch treatment. I was impressed by their experience and care. I highly recommend this hospital for anyone seeking quality dental care.",
    response: "Thank you Mariyamma garu.",
  },
  {
    name: "Yamini Ammisetty",
    text: "I did ortho treatment, they provided the best hospitality. It is the best clinic in Tenali. Thanks to Dr. Ratnakar garu and staff.",
    response: "Thank you madam.",
  },
];

const RECOGNITION = [
  {
    img: inauguration1,
    title: "Grand Inauguration Ceremony",
    desc: "A proud milestone marking the opening of Veda Dental Hospital in Tenali.",
  },
  {
    img: inauguration2,
    title: "Community Recognition & Trust",
    desc: "Celebrating our commitment to quality dental care and community service.",
  },
];

function initialsOf(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]?.toUpperCase()).join("");
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Doctors />
      <Treatments />
      <WhyUs />
      <Gallery />
      <InsideHospital />
      <Testimonials />
      <BookingSection />
      <MapSection />
      <Contact />
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* ============== Reveal wrapper ============== */
function Reveal({
  children,
  className = "",
  stagger = false,
  as: As = "div",
}: { children: ReactNode; className?: string; stagger?: boolean; as?: any }) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref}
      className={`${stagger ? "stagger" : "reveal"} ${shown ? "is-shown" : ""} ${className}`}
    >
      {children}
    </As>
  );
}

/* ============== Header ============== */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-[minmax(0,1fr)_auto] sm:flex sm:items-center sm:justify-between gap-3 transition-all duration-500 rounded-2xl ${
            scrolled
              ? "glass-strong shadow-soft px-3 sm:px-5 py-2.5"
              : "bg-transparent px-1 sm:px-2 py-1"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 min-w-0" aria-label="Veda Dental Hospital — Home">
            <div className="grid h-11 w-11 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-border overflow-hidden">
              <img src={vedaLogo} alt="Veda Dental Hospital logo" className="h-9 w-9 sm:h-10 sm:w-10 object-contain" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-extrabold text-[13px] sm:text-base lg:text-lg leading-tight truncate text-primary uppercase tracking-wide">
                Veda Dental Hospital
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground truncate">
                Multi Speciality & Implant Centre
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative text-sm font-medium text-foreground/75 hover:text-primary transition-colors group"
              >
                {n.label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${PHONE_1}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
            >
              <Phone className="h-4 w-4" /> {PHONE_1}
            </a>
            <a
              href="#book"
              className="btn-shine inline-flex items-center gap-2 rounded-full gradient-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass-strong shadow-soft"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="relative h-5 w-5">
              <Menu className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${open ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`} />
              <X className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${open ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[calc(env(safe-area-inset-top)+4.25rem)] z-40 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative mx-3 mt-2 rounded-3xl glass-strong shadow-elegant p-3 origin-top transition-all duration-300 ${
            open ? "scale-100 translate-y-0" : "scale-95 -translate-y-2"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {NAV.map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors ${
                  open ? "animate-menu-in" : ""
                }`}
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 px-1">
              <a
                href={`tel:${PHONE_1}`}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href="#book"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl gradient-primary text-primary-foreground px-4 py-3 text-sm font-semibold shadow-soft"
              >
                <Calendar className="h-4 w-4" /> Book
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ============== Hero ============== */
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 lg:min-h-[80vh] lg:flex lg:items-center"
    >
      {/* Soft brand glows (no dark overlays, no bg image) */}
      <div aria-hidden className="absolute -top-32 -right-24 h-[24rem] w-[24rem] -z-10 rounded-full bg-[#1E40AF]/10 blur-3xl" />
      <div aria-hidden className="absolute -bottom-32 -left-24 h-[22rem] w-[22rem] -z-10 rounded-full bg-[#1E40AF]/5 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* LEFT — content */}
          <div className="animate-fade-up text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1E40AF]/15 bg-[#1E40AF]/5 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#1E40AF]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--whatsapp)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--whatsapp)]" />
              </span>
              Now accepting new patients
            </span>

            <div className="mt-5">
              <div className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.32em] text-[#1E40AF]">
                Veda Dental Hospital
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-medium tracking-wide text-[#4B5563]">
                Multi Speciality &amp; Implant Centre
              </div>
            </div>

            <h1 className="mt-5 font-display font-extrabold tracking-tight text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem] xl:text-[3.85rem] text-[#1E40AF]">
              Creating Healthy Smiles
              <br className="hidden sm:block" />
              <span className="block sm:inline"> With </span>
              <span className="bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">
                Advanced Dental Care
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#4B5563]">
              Trusted dental care in Tenali with modern technology, experienced
              doctors and patient-first treatment.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#1E40AF] text-white px-6 py-3.5 text-sm font-semibold shadow-elegant hover:-translate-y-0.5 hover:bg-[#1d3a99] transition-all"
              >
                <Calendar className="h-4 w-4" /> Book Appointment
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] text-white px-6 py-3.5 text-sm font-semibold hover:opacity-95 hover:-translate-y-0.5 transition-all shadow-soft"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
              <HeroBadge icon={Star} text="4.9 Google Rating" iconClass="fill-yellow-400 text-yellow-400" />
              <HeroBadge icon={Sparkles} text="Multi-Speciality Care" />
              <HeroBadge icon={Stethoscope} text="Experienced Doctors" />
              <HeroBadge icon={Building2} text="Modern Infrastructure" />
            </div>
          </div>

          {/* RIGHT — real hospital image */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2.25rem] bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] opacity-90" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-elegant aspect-[4/5] sm:aspect-[5/6] bg-white">
                <img
                  src={heroBg}
                  alt="Inside Veda Dental Hospital — modern treatment room and infrastructure, Tenali"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Only two clean badges */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 rounded-2xl bg-white border border-slate-100 px-4 py-3 shadow-elegant flex items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#1E40AF]/10 text-[#1E40AF]">
                  <Building2 className="h-4 w-4" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#1E40AF] whitespace-nowrap">
                  Modern Infrastructure
                </div>
              </div>
              <div className="absolute -top-4 -right-3 sm:-right-6 rounded-2xl bg-white border border-slate-100 px-4 py-3 shadow-elegant hidden sm:flex items-center gap-3">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[var(--whatsapp)]/15 text-[var(--whatsapp)]">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#1E40AF] whitespace-nowrap">
                  Trusted Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBadge({
  icon: Icon,
  text,
  iconClass,
}: {
  icon: ComponentType<{ className?: string }>;
  text: string;
  iconClass?: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-[#4B5563] shadow-soft">
      <Icon className={`h-3.5 w-3.5 ${iconClass ?? "text-[#1E40AF]"}`} />
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
}



function Trust({ icon: Icon, text }: { icon: ComponentType<{ className?: string }>; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary" /> {text}
    </div>
  );
}

/* ============== Stats ============== */
function Stats() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-3xl gradient-hero text-white p-6 sm:p-10 shadow-elegant overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gradient-hero">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-white/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== About ============== */
function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 rounded-[2rem] gradient-primary opacity-15 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-border">
              <img
                src={aboutImage}
                alt="Modern dental clinic interior at Veda Dental Hospital"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-4 sm:right-6 glass-strong rounded-2xl px-5 py-4 shadow-elegant">
              <div className="text-3xl font-display font-extrabold text-gradient">12+</div>
              <div className="text-xs text-muted-foreground">Years of trusted care</div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <SectionLabel>About Us</SectionLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              A modern dental hospital built around <span className="text-gradient">your comfort</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
              At Veda Dental Hospital, we blend clinical excellence with a calm,
              hospitality-first experience. From your first consultation to long-term
              follow-up, every visit is designed to feel safe, transparent and
              effortlessly premium.
            </p>

            <ul className="mt-8 space-y-3.5">
              {[
                "Single-visit treatments with advanced rotary endodontics",
                "Digital implant planning and guided surgery",
                "Painless procedures with the latest anaesthetic protocols",
                "Hospital-grade sterilization at every chair",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full gradient-primary text-white shadow-soft">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground/85">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em]">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

function SectionHeader({ label, title, subtitle, center = true }: { label: string; title: ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}

/* ============== Doctors ============== */
function Doctors() {
  const doctors = [
    {
      img: drRatnakar,
      name: "Dr. B. Ratnakar",
      degree: "B.D.S, M.D.S",
      role: "Assistant Professor",
      bio: "Specialist in implants, oral surgery and full-mouth rehabilitation with over a decade of academic and clinical experience.",
      tags: ["Implants", "Oral Surgery", "Rehab"],
    },
    {
      img: drCharani,
      name: "Dr. G. Charani",
      degree: "B.D.S",
      role: "Cosmetic Dental Surgeon",
      bio: "Expert in smile designing, veneers and aesthetic dentistry — crafting natural, confidence-boosting smiles.",
      tags: ["Smile Design", "Veneers", "Cosmetic"],
    },
  ];

  return (
    <section id="doctors" className="relative py-20 sm:py-28 lg:py-32 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Meet Our Doctors"
          title={<>Led by specialists who <span className="text-gradient">truly care</span>.</>}
        />

        <Reveal stagger className="mt-12 sm:mt-14 grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="group card-premium card-premium-hover ring-gradient overflow-hidden"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={d.img}
                  alt={d.name}
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/90 backdrop-blur-md text-primary px-2.5 py-1 text-[10px] font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-foreground">{d.name}</h3>
                  <span className="text-xs font-semibold text-primary">{d.degree}</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-destructive">{d.role}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.bio}</p>
                <a
                  href="#book"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                >
                  Book consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ============== Treatments ============== */
function Treatments() {
  return (
    <section id="treatments" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Treatments"
          title={<>Comprehensive dental care, <span className="text-gradient">all under one roof</span>.</>}
          subtitle="From routine cleanings to full smile makeovers — every service delivered with precision."
        />

        <Reveal stagger className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TREATMENTS.map((t) => (
            <div
              key={t.title}
              className="group relative card-premium card-premium-hover ring-gradient p-6 sm:p-7"
            >
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-white shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                <t.icon className="h-6 w-6" />
                <div className="absolute inset-0 rounded-2xl gradient-primary opacity-50 blur-xl group-hover:opacity-80 transition-opacity" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              <div className="mt-5 flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all">
                Learn more <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ============== Why Us ============== */
function WhyUs() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-secondary/50 overflow-hidden">
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Choose Us"
          title={<>Trusted by thousands of <span className="text-gradient">smiling patients</span>.</>}
        />
        <Reveal stagger className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {WHY_US.map((w) => (
            <div
              key={w.title}
              className="card-premium card-premium-hover p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <w.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ============== Recognition (Gallery) ============== */
function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (active === null) return;
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % RECOGNITION.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + RECOGNITION.length) % RECOGNITION.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Recognition & Community Trust"
          title={<>Serving the people of <span className="text-gradient">Tenali</span> with excellence.</>}
          subtitle="Real inauguration and community recognition moments from Veda Dental Hospital."
        />

        <Reveal stagger className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {RECOGNITION.map((g, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setActive(i)}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-soft hover:shadow-elegant transition-all duration-500 text-left"
              aria-label={`View photo: ${g.title}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={g.img}
                  alt={g.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-primary shadow-soft">
                <BadgeCheck className="h-3.5 w-3.5" /> Verified Moment
              </div>

              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-white leading-snug">
                  {g.title}
                </div>
                <div className="text-[11px] sm:text-xs text-white/80 mt-1 leading-relaxed">
                  {g.desc}
                </div>
              </figcaption>
            </button>
          ))}
        </Reveal>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setActive(null); }}
            className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((i) => ((i ?? 0) - 1 + RECOGNITION.length) % RECOGNITION.length); }}
            className="absolute left-2 sm:left-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Previous"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setActive((i) => ((i ?? 0) + 1) % RECOGNITION.length); }}
            className="absolute right-2 sm:right-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
            aria-label="Next"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
          <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={RECOGNITION[active].img}
              alt={RECOGNITION[active].title}
              className="w-full max-h-[78vh] object-contain rounded-2xl shadow-elegant"
            />
            <figcaption className="mt-4 text-center text-white">
              <div className="font-display font-bold text-lg">{RECOGNITION[active].title}</div>
              <div className="text-sm text-white/75 mt-1">{RECOGNITION[active].desc}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

/* ============== Inside Veda Dental Hospital ============== */
function InsideHospital() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Inside Veda Dental Hospital"
          title={<>A space built for <span className="text-gradient">comfort &amp; care</span>.</>}
          subtitle="Real moments from inside our hospital — modern infrastructure, advanced equipment and patient-friendly care."
        />
        <Reveal stagger className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {INSIDE_IMAGES.map((g) => (
            <figure
              key={g.caption}
              className="group relative overflow-hidden rounded-3xl border border-border shadow-soft hover:shadow-elegant transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={g.img}
                  alt={g.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <div className="text-sm sm:text-base font-semibold text-white leading-snug">
                  {g.caption}
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ============== Testimonials (Google Reviews) ============== */
function Testimonials() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28 lg:py-32 bg-secondary/40 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="What Our Patients Say"
          title={<>Loved by patients across <span className="text-gradient">Tenali</span>.</>}
          subtitle="Real experiences from our valued patients."
        />

        {/* Mobile: horizontal snap slider. Desktop: grid */}
        <Reveal className="mt-12 sm:mt-14">
          <div className="lg:hidden -mx-4 sm:-mx-6 overflow-x-auto snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 px-4 sm:px-6">
              {REVIEWS.map((r) => (
                <div key={r.name} className="snap-center shrink-0 w-[88%] sm:w-[60%]">
                  <ReviewCard r={r} />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 xl:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} r={r} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ReviewCard({ r }: { r: { name: string; text: string; response: string } }) {
  return (
    <article className="card-premium card-premium-hover h-full p-6 sm:p-7 flex flex-col bg-card">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full gradient-primary text-white font-display font-bold text-sm shadow-soft">
            {initialsOf(r.name)}
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-sm sm:text-base truncate">{r.name}</div>
            <div className="flex items-center gap-1 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-1 text-[10px] font-semibold shrink-0">
          <BadgeCheck className="h-3 w-3" /> Verified Google Review
        </span>
      </div>
      <p className="mt-4 text-sm sm:text-[15px] text-foreground/85 leading-relaxed flex-1">
        "{r.text}"
      </p>
      <div className="mt-5 rounded-2xl bg-secondary/70 border border-border p-3.5">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-primary uppercase tracking-wider">
          <img src={vedaLogo} alt="" className="h-4 w-4 object-contain" /> Owner response
        </div>
        <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">"{r.response}"</p>
      </div>
    </article>
  );
}

/* ============== Booking ============== */
const TREATMENT_OPTIONS = TREATMENTS.map((t) => t.title).concat(["Consultation", "Other"]);

function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "Consultation",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (form.name.trim().length < 2) return setError("Please enter your name.");
    if (!/^\d{10}$/.test(form.phone.replace(/\D/g, "").slice(-10)))
      return setError("Please enter a valid 10-digit phone number.");
    if (!form.date) return setError("Please choose a preferred date.");

    appointmentsStore.create({
      name: form.name.trim(),
      phone: form.phone.trim(),
      treatment: form.treatment,
      date: form.date,
      message: form.message.trim(),
    });
    setSubmitted(true);
    setForm({ name: "", phone: "", treatment: "Consultation", date: "", message: "" });
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="book" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 gradient-mesh opacity-70" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <SectionLabel>Book Appointment</SectionLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Schedule your visit in <span className="text-gradient">under a minute</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-base sm:text-lg max-w-lg">
              Share your details and our team will confirm your appointment shortly.
              For urgent care, please call us directly.
            </p>

            <div className="mt-8 space-y-3">
              <a href={`tel:${PHONE_1}`} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 hover:border-primary/40 hover:shadow-soft transition-all hover:-translate-y-0.5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Phone className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Call us</div>
                  <div className="font-semibold truncate text-sm sm:text-base">{PHONE_1} · {PHONE_2}</div>
                </div>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4 hover:border-primary/40 hover:shadow-soft transition-all hover:-translate-y-0.5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--whatsapp)]/15 text-[var(--whatsapp)]"><MessageCircle className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold text-sm sm:text-base">Chat with our team</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-card border border-border p-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-destructive/10 text-destructive"><Clock className="h-5 w-5" /></div>
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">Open hours</div>
                  <div className="font-semibold text-sm sm:text-base">Mon – Sat · 9:00 AM – 9:00 PM</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative">
              <div className="absolute -inset-2 rounded-[1.75rem] gradient-primary opacity-20 blur-2xl" />
              <form
                onSubmit={onSubmit}
                className="relative rounded-3xl bg-card border border-border p-6 sm:p-8 lg:p-10 shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white ring-1 ring-border shadow-soft overflow-hidden shrink-0">
                    <img src={vedaLogo} alt="Veda Dental Hospital" className="h-10 w-10 object-contain" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-lg leading-tight">Request an Appointment</div>
                    <div className="text-xs text-muted-foreground">Veda Dental Hospital · We'll confirm within a few hours.</div>
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name">
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="input"
                      placeholder="Your name"
                      maxLength={80}
                    />
                  </Field>
                  <Field label="Phone Number">
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="input"
                      placeholder="10-digit mobile"
                      inputMode="tel"
                      maxLength={15}
                    />
                  </Field>
                  <Field label="Treatment">
                    <select
                      value={form.treatment}
                      onChange={(e) => setForm((f) => ({ ...f, treatment: e.target.value }))}
                      className="input"
                    >
                      {TREATMENT_OPTIONS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred Date">
                    <input
                      required
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                      className="input"
                    />
                  </Field>
                </div>
                <Field label="Message" className="mt-4">
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="input min-h-[100px] resize-y"
                    placeholder="Tell us anything that will help us prepare for your visit."
                    maxLength={500}
                  />
                </Field>

                {error && (
                  <div className="mt-4 rounded-xl bg-destructive/10 text-destructive px-4 py-3 text-sm">{error}</div>
                )}
                {submitted && (
                  <div className="mt-4 rounded-xl bg-[var(--whatsapp)]/15 text-[color:var(--whatsapp)] px-4 py-3 text-sm font-medium">
                    Thank you! Your appointment request has been received.
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-shine mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full gradient-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="h-4 w-4" /> Request Appointment
                </button>

                <p className="mt-3 text-xs text-muted-foreground text-center">
                  By submitting you agree to be contacted by Veda Dental Hospital.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        .input {
          width: 100%;
          border-radius: 0.85rem;
          background: var(--background);
          border: 1px solid var(--border);
          padding: 0.8rem 1rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .2s, box-shadow .2s, transform .2s;
        }
        .input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--primary) 15%, transparent);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold text-foreground/80 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

/* ============== Map ============== */
function MapSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Find Us"
          title={<>Conveniently located in <span className="text-gradient">Kothapet, Tenali</span>.</>}
        />
        <Reveal className="mt-10 rounded-3xl overflow-hidden border border-border shadow-elegant">
          <iframe
            title="Veda Dental Hospital Location"
            src={`https://www.google.com/maps?q=${encodeURIComponent("Kothapet, Tenali, Andhra Pradesh 522201")}&output=embed`}
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ============== Contact ============== */
function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <ContactCard icon={MapPin} title="Visit Us" lines={[ADDRESS]} />
          <ContactCard
            icon={Phone}
            title="Call Us"
            lines={[PHONE_1, PHONE_2]}
            href={`tel:${PHONE_1}`}
          />
          <ContactCard
            icon={Instagram}
            title="Follow Us"
            lines={["@veda_dental_care_"]}
            href={INSTAGRAM}
            external
          />
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon, title, lines, href, external,
}: { icon: ComponentType<{ className?: string }>; title: string; lines: string[]; href?: string; external?: boolean }) {
  const inner = (
    <div className="h-full card-premium card-premium-hover p-6 sm:p-8">
      <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-white shadow-soft">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
      <div className="mt-2 space-y-1">
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground leading-relaxed break-words">{l}</p>
        ))}
      </div>
    </div>
  );
  if (!href) return inner;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <a href={href}>{inner}</a>
  );
}

/* ============== Footer ============== */
function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-soft overflow-hidden">
                <img src={vedaLogo} alt="Veda Dental Hospital logo" className="h-10 w-10 object-contain" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-lg">Veda Dental Hospital</div>
                <div className="text-xs text-white/70">Multi Speciality & Implant Centre</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/75 max-w-md leading-relaxed">
              Premium, compassionate and modern dental care serving the families of
              Tenali and beyond.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-0.5 transition-all" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-0.5 transition-all" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href={`tel:${PHONE_1}`} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 hover:-translate-y-0.5 transition-all" aria-label="Call">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-white/60">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-white/85 hover:text-white transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-xs uppercase tracking-[0.15em] text-white/60">Reach Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /><span className="break-words">{ADDRESS}</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /><span>{PHONE_1}, {PHONE_2}</span></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /><span className="truncate">care@vedadental.in</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/65">
          <div>© {new Date().getFullYear()} Veda Dental Hospital. All rights reserved.</div>
          <Link to="/admin" className="hover:text-white transition-colors">Admin Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}

/* ============== Floating actions ============== */
function FloatingActions() {
  return (
    <div className="fixed right-3 sm:right-6 bottom-4 sm:bottom-6 z-40 flex flex-col gap-2.5 sm:gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-elegant hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a
        href={`tel:${PHONE_1}`}
        className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-destructive text-destructive-foreground shadow-elegant hover:scale-110 transition-transform animate-pulse-ring"
        aria-label="Call now"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
      <a
        href="#book"
        className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full gradient-primary text-primary-foreground shadow-elegant hover:scale-110 transition-transform"
        aria-label="Book appointment"
      >
        <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  );
}
