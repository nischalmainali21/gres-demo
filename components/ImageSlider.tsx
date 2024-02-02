"use client";
import Image from "next/image";
import React, { useState } from "react";

type PropsType = {
  images: string[];
  title: string;
};

const ImageSlider = ({ images, title }: PropsType) => {
  console.log(images);
  const allImages = images.map((item, index) => ({ index, url: item }));
  console.log(allImages);
  const [activeImage, setActiveImage] = useState(allImages[0].url);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 ">
        <div className="rounded-xl">
          <Image
            src={activeImage}
            alt={`${title} product image`}
            className="rounded-xl"
            width={100}
            height={100}
          />
        </div>
        <div className="flex h-24 flex-row justify-around rounded-md">
          {allImages.map((item) => (
            <Image
              key={item.index}
              src={item.url}
              width={100}
              height={100}
              alt={`${title} ${item.index} image`}
              className="h-24 w-24 cursor-pointer rounded-md"
              onClick={() => setActiveImage(allImages[item.index].url)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
