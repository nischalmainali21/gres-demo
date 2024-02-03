import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type PropsType = {
  images: string[];
  title: string;
};

const ImageCarousel = ({ images, title }: PropsType) => {
  const allImages = images.map((item, index) => ({ index, url: item }));
  return (
    <div className="sm:ml-0 sm:p-8">
      <Carousel>
        <CarouselContent>
          {allImages.map((item) => (
            <CarouselItem key={`${title}${item.index}`}>
              <div className="relative h-[350px] rounded-xl border shadow-md sm:h-[460px] xl:h-[500px]">
                <Image
                  src={allImages[item.index].url}
                  fill
                  alt={`${title} ${item.index} image`}
                  sizes="(min-width: 200px) 50vw,(min-width:768px) 100vw"
                  className="rounded-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious />
        </div>
        <div className="hidden sm:block">
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
