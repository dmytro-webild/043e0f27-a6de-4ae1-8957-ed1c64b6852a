"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Clock, MessageSquare, ShieldCheck, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      button={{
        text: "Call Now",
        href: "tel:3462391620",
      }}
      brandName="Jalen & Sons Plumbing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated",
      }}
      title="Reliable Plumbing in Katy — Done Right, On Time, Every Time"
      description="Top-rated local plumbers known for fast service, honest pricing, and professional care in your home."
      buttons={[
        {
          text: "Book Service Now",
          href: "#contact",
        },
        {
          text: "Call (346) 239-1620",
          href: "tel:3462391620",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990738.jpg",
          imageAlt: "Professional plumber in Katy",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-male-builder-wearing-uniform-safety-helmet-his-thumb-up-pink_141793-74570.jpg",
          imageAlt: "Plumber with water heater",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721574.jpg",
          imageAlt: "Plumbing service in residential home",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/architectural-blueprints_1359-498.jpg",
          imageAlt: "Friendly expert technician",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/man-installs-heating-system-house-checks-pipes-with-wrench_169016-55595.jpg",
          imageAlt: "Clean plumbing work execution",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-inviting-man-house-with-tools_259150-58291.jpg",
          imageAlt: "Katy local plumbing team",
        },
      ]}
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Star,
          title: "Customer Rating",
          value: "4.8/5",
        },
        {
          id: "m2",
          icon: MessageSquare,
          title: "Verified Reviews",
          value: "80+",
        },
        {
          id: "m3",
          icon: Clock,
          title: "Response Time",
          value: "Fast",
        },
        {
          id: "m4",
          icon: ShieldCheck,
          title: "Satisfaction",
          value: "100%",
        },
      ]}
      title="Trusted by Katy"
      description="Our commitment to excellence earns us the trust of neighbors across Katy."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Water Heater Installs",
          description: "High-efficiency water heaters installed properly for lasting warmth.",
          buttonIcon: "Zap",
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-construction-worker-uniform-cap-furious-girl-holding-pipe-wrench-shouting-out-loud-with-closed-eyes-excited-guy-both-keeping-hand-near-mouth-isolated_141793-78844.jpg",
          imageAlt: "Young couple in construction worker uniform and cap furious girl holding pipe wrench shouting out loud with closed eyes excited guy  both keeping hand near mouth isolated",
        },
        {
          title: "Faucet & Shower Repairs",
          description: "No more leaks. We fix dripping faucets and showers quickly.",
          buttonIcon: "Droplets",
          imageSrc: "http://img.b2bpic.net/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990738.jpg",
          imageAlt: "Young couple in construction worker uniform and cap furious girl holding pipe wrench shouting out loud with closed eyes excited guy  both keeping hand near mouth isolated",
        },
        {
          title: "Drain Cleaning",
          description: "Keep your home flowing smoothly with our expert drain clearing service.",
          buttonIcon: "Brush",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-auto-mechanics-working-together-workshop_637285-9438.jpg",
          imageAlt: "Young couple in construction worker uniform and cap furious girl holding pipe wrench shouting out loud with closed eyes excited guy  both keeping hand near mouth isolated",
        },
        {
          title: "Sewer Line Repair",
          description: "Non-invasive sewer line repair when you need it most.",
          buttonIcon: "Wrench",
          imageSrc: "http://img.b2bpic.net/free-photo/charming-student-girl-good-mood-relaxing-home_343059-139.jpg",
          imageAlt: "Young couple in construction worker uniform and cap furious girl holding pipe wrench shouting out loud with closed eyes excited guy  both keeping hand near mouth isolated",
        },
      ]}
      title="Plumbing Services You Can Count On"
      description="We specialize in the solutions Katy homeowners need most."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="They came out the next morning and fixed everything fast. Super professional and easy to work with."
      rating={5}
      author="Sarah Jenkins"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/charming-student-girl-good-mood-relaxing-home_343059-139.jpg",
          alt: "Sarah Jenkins",
        },
        {
          src: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-362.jpg",
          alt: "Mark Davis",
        },
        {
          src: "http://img.b2bpic.net/free-photo/interior-designer-home-owner-discussing-ideas-renovation_74855-2946.jpg",
          alt: "Emily Carter",
        },
        {
          src: "http://img.b2bpic.net/free-photo/expressive-young-woman-posing_344912-1756.jpg",
          alt: "John Smith",
        },
        {
          src: "http://img.b2bpic.net/free-photo/middle-age-couple-standing-together-doing-ok-gesture-with-hand-smiling-eye-looking-through-fingers-with-happy-face_839833-32832.jpg",
          alt: "Laura Wilson",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="A Local Team That Treats You Right"
      description="At Jalen & Sons Plumbing, we believe great service goes beyond fixing pipes. Our team is known for being professional, honest, and respectful in every home we enter."
      subdescription="From small repairs to major plumbing jobs, we take the time to do things right—and make sure you understand every step."
      icon={Users}
      imageSrc="http://img.b2bpic.net/free-photo/happy-auto-mechanics-working-together-workshop_637285-9438.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="why-choose" data-section="why-choose">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Fast Scheduling",
          description: "Often next-day service.",
          buttonIcon: "Calendar",
          imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-with-client-fix-kitchen-problems_23-2150990689.jpg",
          imageAlt: "Male plumber working with client to fix kitchen problems",
        },
        {
          title: "Clear Communication",
          description: "Honest explanations about every repair.",
          buttonIcon: "MessageCircle",
          imageSrc: "http://img.b2bpic.net/free-photo/female-plumber-working-fix-problems-client-s-house_23-2150990738.jpg",
          imageAlt: "Male plumber working with client to fix kitchen problems",
        },
        {
          title: "Skilled Experts",
          description: "Qualified, friendly technicians.",
          buttonIcon: "Award",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-auto-mechanics-working-together-workshop_637285-9438.jpg",
          imageAlt: "Male plumber working with client to fix kitchen problems",
        },
        {
          title: "Clean & Respectful",
          description: "We treat your home like our own.",
          buttonIcon: "Smile",
          imageSrc: "http://img.b2bpic.net/free-photo/charming-student-girl-good-mood-relaxing-home_343059-139.jpg",
          imageAlt: "Male plumber working with client to fix kitchen problems",
        },
      ]}
      title="Why Katy Homeowners Keep Choosing Us"
      description="We are the safe choice for plumbing that you won't regret."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you offer emergency services?",
          content: "Yes, we prioritize emergency plumbing issues.",
        },
        {
          id: "q2",
          title: "Are your technicians licensed?",
          content: "All our team members are fully qualified and experienced.",
        },
        {
          id: "q3",
          title: "How quickly can you arrive?",
          content: "We often have availability for same-day or next-morning appointments.",
        },
      ]}
      title="Common Questions"
      description="Answers to help you understand our process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Need a Plumber You Can Trust? We make it simple—fast service, honest work, no stress."
      buttons={[
        {
          text: "Book Appointment",
          href: "#",
        },
        {
          text: "Call Now",
          href: "tel:3462391620",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Jalen & Sons Plumbing"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "(346) 239-1620",
              href: "tel:3462391620",
            },
            {
              label: "Book Now",
              href: "#contact",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
