import Image from 'next/image'
import { Button } from '@/components/sections/button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Building Scalable Backend Systems & AI-Powered Applications
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Senior Software Engineer with 10+ years of experience designing scalable SaaS platforms, APIs, workflow
                automation systems, and modern AI-powered applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#projects">
                <Button size="lg">View Projects</Button>
              </Link>
              <Button size="lg" variant="outline">
                Download Resume
              </Button>
            </div>
          </div>
          <Image
            src="https://placehold.co/600x600/000000/FFFFFF/png"
            width="600"
            height="600"
            alt="Javed Wasim"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          />
        </div>
      </div>
    </section>
  )
}