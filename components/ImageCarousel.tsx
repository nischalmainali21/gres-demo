"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

type PropsType = {
  images: string[];
  title: string;
};

const ImageCarousel = ({ images, title }: PropsType) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideApi, setSlideApi] = useState<CarouselApi>();
  const [thumbsApi, setThumbsApi] = useState<CarouselApi>();

  const onThumbClick = useCallback(
    (index: number) => {
      if (!thumbsApi || !slideApi) return;
      console.log("index", index);
      slideApi.scrollTo(index);
    },
    [thumbsApi, slideApi],
  );

  const onSelect = useCallback(() => {
    if (!slideApi || !thumbsApi) return;
    console.log("on select entered");
    console.log("valueofselectedScrollSnap", slideApi.selectedScrollSnap());
    setSelectedIndex(slideApi.selectedScrollSnap());
    thumbsApi.scrollTo(slideApi.selectedScrollSnap());
  }, [slideApi, thumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!slideApi) return;
    onSelect();
    slideApi.on("select", onSelect);
    slideApi.on("reInit", onSelect);
  }, [slideApi, onSelect]);

  const allImages = images.map((item, index) => ({ index, url: item }));
  return (
    <div className="sm:ml-0 sm:p-8">
      <div className="flex flex-col gap-4">
        <Carousel setApi={setSlideApi}>
          <CarouselContent>
            {allImages.map((item) => (
              <CarouselItem key={`${title}${item.index}`}>
                <div className="relative h-[350px] rounded-xl border shadow-md sm:h-[460px] xl:h-[500px]">
                  <Image
                    src={allImages[selectedIndex].url}
                    fill
                    alt={`${title} ${selectedIndex} image`}
                    sizes="(min-width: 200px) 50vw,(min-width:768px) 100vw"
                    className={`rounded-xl`}
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
        {/* thumbnail images */}
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          setApi={setThumbsApi}
        >
          <CarouselContent>
            {allImages.map((item) => (
              <CarouselItem
                key={`${title}${item.index}`}
                className={`${allImages.length == 4 ? "basis-1/4" : "basis-1/5"} `}
              >
                <div
                  className={`flex justify-center rounded-md border shadow-md`}
                  onClick={() => onThumbClick(item.index)}
                >
                  <Image
                    src={allImages[item.index].url}
                    width={200}
                    height={200}
                    alt={`thumnail ${title} ${item.index} image`}
                    className={`h-24 w-full cursor-pointer rounded-md ${item.index === selectedIndex ? "border-b-4 border-green-600" : ""}`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarousel;
