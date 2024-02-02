"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

type PropsType = {
  images: string[];
  title: string;
};

const ImageSlider = ({ images, title }: PropsType) => {
  //   console.log(images);
  const allImages = images.map((item, index) => ({ index, url: item }));
  //   console.log(allImages);
  const [activeImage, setActiveImage] = useState(allImages[0].url);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? allImages.length - 1 : currentIndex - 1;
    setActiveImage((prev) => (prev = allImages[newIndex].url));
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === allImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setActiveImage((prev) => (prev = allImages[newIndex].url));
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="mb-4 sm:mb-0">
      <div className="flex flex-col gap-6 ">
        <div className="group relative h-[350px] rounded-xl border shadow-md sm:h-[460px] xl:h-[500px]">
          <Image
            src={activeImage}
            alt={`${title} product image`}
            className="rounded-xl"
            fill
            sizes="(min-width: 200px) 50vw,(min-width:768px) 100vw"
          />
          {/* Left Arrow */}
          <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>
        <div className="hidden items-center justify-center gap-2 rounded-md sm:flex sm:h-24 sm:flex-row sm:justify-around xl:justify-evenly">
          {allImages.map((item) => (
            <div
              key={`${title}${item.index}`}
              className="flex justify-center border shadow-md"
            >
              <Image
                src={item.url}
                width={100}
                height={100}
                alt={`${title} ${item.index} image`}
                className="h-24 w-24 cursor-pointer rounded-md"
                onClick={() => setActiveImage(allImages[item.index].url)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
