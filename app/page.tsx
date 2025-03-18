import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Github, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  return (
    <div className="min-h-screen text-white bg-contain" style={{backgroundImage: "url('/assets/homebg.jpg')"}}>
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Siddhi</div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium">
              Contact
            </Link>
          </nav>
          <Button className="bg-yellow-500 text-black font-bold" asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="mx-auto max-w-[800px] space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Hi,  I am Siddhi Rane <span className="text-white"> Passionate Software Developer</span>
            </h1>
            <p className="text-xl  md:text-2xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Build dynamic, multilingual news platforms and ecommerce platforms and event websites with modern web technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button className="font-bold" style={{background: "linear-gradient(93deg, #E98841 0.98%, #E33B3B 36.85%, #C11616 73.41%, #A00000 101.11%)"}} asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="text-white font-semibold" style={{background:"linear-gradient(193deg, rgba(255, 120, 120, 0.30) 18.8%, rgba(153, 0, 0, 0.30) 81.95%)"}} asChild>
                <Link href="#contact" className="text-black hover:text-white">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block text-black rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Dedicated Software Developer</h2>
                  <p className="max-w-[600px] text-yellow-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    With 3.5 years of experience specializing in modern web technologies
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Mumbai, India</span>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Code className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Frontend Specialist</p>
                      <p className="text-sm text-orange-300">
                        Proficient in React.js, Next.js, SvelteKit, and EJS
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Code className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Ad Technology Integration</p>
                      <p className="text-sm text-orange-300">
                        Google Ads, MGID, Taboola, and innovative ad implementations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Code className="h-3 w-3" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Performance Optimization</p>
                      <p className="text-sm text-orange-300">
                        AMP development, SEO optimization, and frontend performance
                      </p>
                    </div>
                  </li>
                </ul>
                <Button 
                  asChild 
                  className="flex items-center gap-2 bg-[#1e81b0] w-max text-neutral-300"
                >
                  <a 
                    href="https://drive.google.com/file/d/1nxMkIYx-zGRKsE_RpwcnxPnRb6TwC4gS_dgWEH-u81A/view" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    download
                  >
                    <ArrowRight className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-xl">
                  <img
                    alt="Developer at work"
                    className="aspect-square object-none object-center"
                    height="650"
                    src="/assets/developer-lady.png"
                    width="650"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-black rounded-lg bg-muted px-3 py-1 text-sm">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Expertise</h2>
                <p className="max-w-[900px] text-yellow-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive set of skills developed over 3.5 years in the industry
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Next.js & React.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>SvelteKit & TypeScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>HTML5 & CSS3</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>ShadeCn & Material Ui</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Pug</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Backend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>PHP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>RESTful APIs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Express Js</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>PHPMyAdmin</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>MongoDB Atlas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>SQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Strapi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ad Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Google Banner Ads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>MGID Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Taboola</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Interstitial & Expando Ads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Outstream Video Ads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>AMP Ads</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Performance & SEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>AMP Development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Search Console Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Performance Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Web Vitals Improvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Development Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>JIRA</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Clickup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Git</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>GitHub</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Bitbucket</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>GitLab</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-black rounded-lg bg-muted px-3 py-1 text-sm">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Work</h2>
                <p className="max-w-[900px] text-yellow-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Showcasing my contributions to Republic Media Network's digital platforms
                </p>
              </div>
            </div>
            <Tabs defaultValue="news" className="mt-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                <TabsTrigger value="news">News Platforms</TabsTrigger>
                <TabsTrigger value="events">Event Platforms</TabsTrigger>
                <TabsTrigger value="amp">AMP Development</TabsTrigger>
                <TabsTrigger value="cms">CMS & Tools</TabsTrigger>
              </TabsList>
              <TabsContent value="news" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Republic World</CardTitle>
                      <CardDescription>Multilingual News Platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed and maintained the flagship news platform with dynamic content delivery, responsive
                        design, and optimized ad placements.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/republicworld.jpg"
                          alt="Republic World Website"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://www.republicworld.com/" target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Site
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Republic Bharat</CardTitle>
                      <CardDescription>Hindi News Platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Built a high-traffic Hindi news platform with optimized performance for diverse user devices and
                        integrated monetization solutions.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/Republic_Bharat_Logo.jpg"
                          alt="Republic Bharat Website"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://www.republicbharat.com/" target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Site
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Republic Business</CardTitle>
                      <CardDescription>Business News Platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed a specialized business news platform with real-time data integration, market updates,
                        and business-focused content delivery.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/republicbusiness.jpg"
                          alt="Republic Business Website"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://www.republicbiz.com/" target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Site
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Republic Bangla</CardTitle>
                      <CardDescription>Bangla News Platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed a specialized Bangla news platform with real-time data integration.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/bangla-logo.png"
                          alt="Republic Business Website"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://www.republicbangla.co.in/" target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Site
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Republic Kannada</CardTitle>
                      <CardDescription>Kannada News Platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed a specialized Kannada news platform with real-time data integration latest newly launched with kannada news.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/kannada-logo.png"
                          alt="Republic Business Website"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://www.republickannada.co.in/" target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Visit Site
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="events" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>Emerging Technology Awards</CardTitle>
                      <CardDescription>Event Platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Built a dedicated platform for Republic Business Emerging Technology Awards with nomination
                        systems, live updates, and event coverage.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/rbeta-logo.webp"
                          alt="Tech Awards Platform"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Health and Wellness</CardTitle>
                      <CardDescription>Event Platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed a specialized platform for health and wellness events with expert profiles, session
                        scheduling, and interactive content.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/health-wellness.webp"
                          alt="Health and Wellness Platform"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Republic Plenary Summit</CardTitle>
                      <CardDescription>Event Platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Created a comprehensive platform for the Republic Plenary Summit with speaker profiles, agenda
                        management, and live streaming integration.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/summit-logo.jpg"
                          alt="Plenary Summit Platform"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://summit.republicworld.com/" target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="amp" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>AMP Development</CardTitle>
                      <CardDescription>Mobile Optimization</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed AMP versions of Republic Media Network's news websites to enhance mobile performance,
                        improve page load times, and boost SEO rankings. Implemented AMP-compatible ad solutions to
                        maintain revenue while delivering fast experiences.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/assets/amp-logo.jpg"
                          alt="AMP Development"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>SEO Optimization</CardTitle>
                      <CardDescription>Search Performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Managed search console issues and implemented technical SEO improvements across all platforms.
                        Optimized metadata, structured data, and core web vitals to improve search rankings and
                        visibility. Implemented best practices for news sites to appear in Google News.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="SEO Optimization"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="cms" className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>CMS Dashboard</CardTitle>
                      <CardDescription>Content Management System</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed a custom CMS dashboard for content editors and journalists to manage multilingual news
                        content, media assets, and publishing workflows. Implemented real-time preview capabilities and
                        content scheduling features.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="CMS Dashboard"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ad Management Tools</CardTitle>
                      <CardDescription>Revenue Optimization</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Built internal tools for managing and optimizing ad placements across all platforms. Implemented
                        systems for Google Ads, MGID, Taboola, and custom ad formats including interstitial, expando,
                        cube, and outstream video ads.
                      </p>
                      <div className="mt-4 aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/placeholder.svg?height=200&width=300"
                          alt="Ad Management Tools"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block text-black rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-yellow-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Interested in working together? Let's connect!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:siddhirane265@gmail.com" className="text-sm hover:underline">
                      siddhirane265@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/siddhirepublictv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm hover:underline"
                    >
                      github.com/siddhirepublictv
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-sm">8698905941 / 8591310387</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm">Mumbai, India</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Ankit Dev. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/siddhirepublictv" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:siddhirane265@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

