import { CanvasRevealEffectDemo } from "@/components/custom/reveal-cards";
import { TabsDemo } from "@/components/custom/tabs-section";
import { buttonVariants } from "@/components/ui/button";
import { FadeText } from "@/components/ui/fade-text";
import { GradientHeading } from "@/components/ui/gradient-heading";
import ShinyButton from "@/components/ui/shiny-button";
import SplineObj from "@/components/ui/spline";
import { cn } from "@/lib/utils";
import { MouseIcon } from "lucide-react";
import Link from "next/link";

export default function Landing() {

  return (
    <div className="pb-24">
      <main className=" flex flex-col justify-center px-6 md:px-20 flex-grow min-h-[calc(100svh-56px)]">
        <div className="flex gap-12 justify-center items-center flex-col md:flex-row">
          <div className="flex flex-col gap-4 h-fit pt-12 w-full md:w-4/5">
            <GradientHeading size="xxl" className=" pb-4">Create Vaxad App</GradientHeading>
            <FadeText className=" text-2xl font-medium pb-12" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo, officia vitae quia ea explicabo veritatis perferendis sapiente doloribus nobis. Labore laudantium ex ab unde repudiandae dicta tenetur placeat nostrum?" />
            <Link href="/create">
              <ShinyButton className={" text-2xl py-4 w-full  md:w-fit px-12 md:px-48 mt-12 font-semibold hover:text-4xl transition-all"}>
                Try it out!
              </ShinyButton>
            </Link>
          </div>
          {/* https://prod.spline.design/fnFxsRN44d0Zs4wQ/scene.splinecode */}
          <div className=" size:[80vw] md:size-[650px] overflow-hidden">
            <SplineObj url="https://prod.spline.design/fnFxsRN44d0Zs4wQ/scene.splinecode" />
          </div>
        </div>
        <div className="h-full w-full justify-center items-center flex pt-8">
          <a href="#tabs-demo" className={cn(buttonVariants({ variant: "default" }), "opacity-30 rounded-full animate-pulse cursor-pointer")}>Scroll for features
            <span>
              <MouseIcon size={20} />
            </span>
          </a>
        </div>
      </main>
      <CanvasRevealEffectDemo />
      <TabsDemo />
    </div>
  )
}