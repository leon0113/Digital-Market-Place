import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-6xl">
          Your market place for high-quality <br />
          <span className="text-yellow-400">Digital Assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to CreatiMart. Every asset on our platform is verifed by our team ti ensure highest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href={'/products'} className={buttonVariants()}>
            Browser Trending
          </Link>
          <Button variant="outline">Our Quality Promise &rarr;</Button>
        </div>
      </div>

      {/* Todo: List products */}
    </MaxWidthWrapper>
  )
}
