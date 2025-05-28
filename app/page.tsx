"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ChevronRight, Menu } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Image
              src="/placeholder.svg?key=cdv8d"
              alt="Chopmoney 360 Logo"
              width={40}
              height={40}
              className="rounded-md"
            /> */}
            <span className="text-xl font-bold">Chopmoney 360</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#products" className="text-sm font-medium hover:text-primary">
              Products
            </Link>
            <Link href="#why-choose" className="text-sm font-medium hover:text-primary">
              Why Choose Us
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button className="hidden md:flex">Get the App</Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="relative z-20 h-9 w-9" aria-label="Toggle Menu">
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Financial Software Solutions for Africa
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Chopmoney360 builds innovative financial technology solutions empowering African youth to achieve
                  financial freedom.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={()=> window.location.href = "#products"}>
                  Explore Our Products
                </Button>
                <Button size="lg" variant="outline" onClick={()=> window.location.href = "#about"}>
                  About Chopmoney360
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dfevzgrbu/image/upload/v1747151182/wwrrt_ltzrzg.webp"
                alt="Chopmoney 360 Products"
                width={500}
                height={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="bg-muted/50 py-20">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12">
            <div className="flex items-center justify-center">
              <Image
                src="https://res.cloudinary.com/dfevzgrbu/image/upload/v1747150768/payroll-management-financial-processing-system-600nw-2546114707_wqexzl.webp"
                alt="Chopmoney 360 Mission"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Chopmoney360</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We are a software company specializing in building innovative solutions for financial services across
                  Africa.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-600/10 p-2 text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Our Mission</h3>
                    <p className="text-muted-foreground">
                      Creating software solutions that empower African youth to achieve financial freedom through
                      technology.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-blue-600/10 p-2 text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">Our Vision</h3>
                    <p className="text-muted-foreground">
                      Driving financial literacy and a cashless Africa by 2030 through innovative software.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="products" className="py-20">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Solutions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Innovative financial software designed for the African market.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Chopmoney App Section */}
        <AnimatedSection delay={200} className="mt-12 mb-16">
          <div className="rounded-lg border bg-card p-8 shadow-md">
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1">
                <div className="mb-4 inline-block rounded-full bg-blue-600/10 p-3 text-blue-600">
                  <Image src="/wallet-icon.png" alt="Wallet Icon" width={32} height={32} />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Chopmoney App</h3>
                <p className="mb-4 text-lg text-muted-foreground">
                  Our flagship product – a mobile budgeting app that helps users plan and control their spending using
                  mobile money. Features personalized budgets, beneficiary budgeting, and automated disbursement.
                </p>
                {/* Buttons */}
                <div className="flex items-center space-x-4 mt-4">
                  <a href="https://onelink.to/gx8jhf" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Download Now <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="https://app.chopmoney.co/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>

              {/* App Screenshot */}
              <div className="flex flex-1 items-center justify-center relative h-[400px] w-full">
                <Image
                  src="https://res.cloudinary.com/dfevzgrbu/image/upload/v1747151583/74753660-355e-4c3b-a467-e549c71246bc.png"
                  alt="Chopmoney App Screenshot"
                  fill
                  style={{ objectFit: "fill" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Additional Products */}
        <AnimatedSection delay={300}>
          <h3 className="mb-6 text-xl font-semibold text-center">Additional Solutions</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <ProductCard
              title="GSE Monitor"
              description="A web application that tracks and analyzes Ghana Stock Exchange data in real time. Targeted at investors and market watchers looking for insights and trends."
              icon="line-chart"
              delay={400}
              link="http://gsemonitor.chopmoney.co/"
            />
            <ProductCard
              title="COT View"
              description="A tool designed to help traders, investors, and financial analysts easily view and analyze Commitments of Traders (COT) reports published weekly by regulatory bodies."
              icon="bar-chart"
              delay={500}
              link="http://cotview.chopmoney.co/"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
function ProductCard({ title, description, icon, delay = 0, link }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="flex flex-col items-start rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md h-full">
        {/* Icon removed */}
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <Button variant="outline" className="mt-auto" size="sm" onClick={() => window.location.href = link }>
          Learn More <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </AnimatedSection>
  );
}

function WhyChooseSection() {
  return (
    <section id="why-choose" className="bg-muted/50 py-20">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Choose Chopmoney360</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                We're committed to developing innovative financial software solutions tailored for Africa.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Innovative Software"
            description="We build cutting-edge financial technology solutions with user-friendly interfaces."
            delay={100}
          />
          <FeatureCard
            title="Mobile-first Technology"
            description="Our solutions are designed with mobile users in mind, ensuring accessibility for all."
            delay={200}
          />
          <FeatureCard
            title="Local Market Focus"
            description="Software specifically designed for Ghana & Africa, addressing unique local financial challenges."
            delay={300}
          />
          <FeatureCard
            title="Financial Literacy"
            description="Our products empower users with knowledge to make informed financial decisions."
            delay={400}
          />
          <FeatureCard
            title="Secure & Transparent"
            description="Our platforms prioritize security and transparency in all transactions."
            delay={500}
          />
          <FeatureCard
            title="Continuous Innovation"
            description="We constantly improve our software with new features and capabilities."
            delay={600}
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description, delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="flex items-start space-x-4 rounded-lg p-4">
        <div className="mt-1 rounded-full bg-blue-600/10 p-1 text-blue-600">
          <CheckCircle className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </AnimatedSection>
  )
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Users Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Hear from people who have transformed their financial lives with Chopmoney 360.
              </p>
            </div>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Kwame Adu"
            role="University Student"
            quote="The Chopmoney App has completely changed how I manage my monthly allowance. I can now budget effectively and even save a little each month."
            avatar="young african male student"
            delay={100}
          />
          <TestimonialCard
            name="Ama Mensah"
            role="Small Business Owner"
            quote="GSE Monitor gives me insights I couldn't get elsewhere. It's helped me make smarter investment decisions for my business's growth."
            avatar="african female entrepreneur"
            delay={200}
          />
          <TestimonialCard
            name="Kofi Boateng"
            role="Financial Analyst"
            quote="COT View has streamlined my analysis process. The data visualization is excellent and saves me hours of work each week."
            avatar="professional african male in suit"
            delay={300}
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, role, quote, avatar, delay = 0 }) {
  return (
    <AnimatedSection delay={delay}>
      <div className="flex flex-col items-start rounded-lg border bg-card p-6 shadow-sm h-full">
        <div className="mb-4 flex items-center space-x-4">
          {/* <Image
            src={`/abstract-geometric-shapes.png?height=48&width=48&query=${avatar}`}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          /> */}
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
        <p className="italic text-muted-foreground">{quote}</p>
      </div>
    </AnimatedSection>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              {/* <Image
                src="/placeholder.svg?key=ck4ei"
                alt="Chopmoney 360 Logo"
                width={40}
                height={40}
                className="rounded-md"
              /> */}
              <span className="text-xl font-bold">Chopmoney360</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building innovative financial software solutions for Africa.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Our Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Chopmoney App
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  GSE Monitor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  COT View
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Chopmoney360. All rights reserved. Built in Africa. Designed for Progress.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Image src="/twitter-icon.png" alt="Twitter" width={20} height={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Image src="/linkedin-icon.png" alt="LinkedIn" width={20} height={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
