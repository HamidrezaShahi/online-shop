import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
interface CarouselProps {
  list: React.ReactNode[];
  key: string;
}
export function HorizontalList({ list, key }: CarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {list.map((element, index) => (
          <CarouselItem
            key={key + index}
            className="ml-4 basis-1/2  sm:basis-1/3 md:basis-1/4  lg:basis-1/4 xl:basis1/5"
          >
            <div className="h-full">{element}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
