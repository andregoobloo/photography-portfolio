"use client";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Image from "next/image";
import { useRef } from "react";
import type { LightGallery } from "lightgallery/lightgallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";

interface Props {
  images: StaticImageData[];
}

export default function Gallery({ images }: Props) {
  const lightboxRef = useRef<LightGallery | null>(null);
  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          450: 1,
          640: 2,
          728: 3,
          1024: 4,
          1280: 5,
          1800: 6,
        }}
      >
        <Masonry className="px-20 mx-auto sm:px-6" gutter="2rem">
          {images.map((img: string | StaticImport, idx: number) => (
            <div key={idx}>
              <Image
                className="cursor-pointer hover:opacity-80 transition-opacity duration-250"
                src={img}
                alt="Photogaphy portolfio image"
                placeholder="blur"
                height={500}
                width={400}
                onClick={() => {
                  lightboxRef.current?.openGallery(idx);
                }}
              />
            </div>
          ))}
          <LightGalleryComponent
            onInit={(ref) => {
              if (ref) {
                lightboxRef.current = ref.instance;
              }
            }}
            speed={500}
            download={false}
            dynamic={true}
            dynamicEl={images.map((img) => ({
              src: img.src,
            }))}
          />
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
}
