"use client";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Separator from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface workCardProps {
  imagePath: string;
  appName: string;
  appDesc: string;
  link: string;
}
function WorkCard(props: workCardProps) {
  return (
    <>
      <Card className="grow">
        <CardHeader className="flex flex-row gap-x-2">
          <img
            className="w-12 h-12 rounded-md"
            src={props.imagePath}
            alt="pfp"
          />
          <div className="my-0">
            <CardTitle>
              <a className="hover:underline" href={props.link}>
                {props.appName}
              </a>
            </CardTitle>
            <CardDescription>{props.appDesc}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}

export default function MainPage() {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="h-svh flex justify-center items-center">
        <div>
          <h1 className="text-6xl sm:text-8xl lg:text-[10rem] text-center text-transparent font-semibold block bg-clip-text bg-rainbow animate-gradient-move">
            BaconErie
          </h1>
          <h2 className="text-center text-2xl">Amateur programmer</h2>
          <br />
          <div className="flex justify-center gap-x-2">
            <Button variant="secondary">
              <a href="https://github.com/BaconErie">Github</a>
            </Button>
            <Button variant="secondary">
              <a href="#work">My work</a>
            </Button>
            <Button variant="secondary">
              <a href="#contact">Contact</a>
            </Button>
          </div>
          <div></div>
        </div>
      </div>

      <div id="work" className="p-8">
        <h1 className="font-semibold text-5xl mb-4">My work</h1>
        <Separator />

        <div className="py-4 flex gap-x-4">
          <WorkCard
            imagePath="/zibutton.svg"
            appName="字Button"
            appDesc="Study chinese with buttons instead of paper and pencil"
            link="https://zibutton.baconerie.com"
          />
          <WorkCard
            imagePath="/seven_noise_gif.gif"
            appName="Simple Diffusion"
            appDesc="Attempt at making a diffusion model from scratch in PyTorch"
            link="https://github.com/BaconErie/Simple-Diffusion"
          />
        </div>
      </div>

      <div id="contact" className="p-8">
        <h1 className="font-semibold text-5xl mb-4">Contact</h1>
        <Separator />

        <div className="py-4 gap-x-4">
          <b>Email</b>: baconerie0001@gmail.com
        </div>
      </div>
    </>
  );
}
