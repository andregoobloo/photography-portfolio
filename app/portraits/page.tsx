"use client";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import Image from "next/image";
import { useRef } from "react";
import type { LightGallery } from "lightgallery/lightgallery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { images } from "../_data/portraits";

export default function Page() {
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
          {images.map((img, idx) => (
            <div key={idx}>
              <Image
                className="cursor-pointer hover:opacity-80 transition-opacity duration-250"
                src={img}
                alt="portrait of a woman"
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
