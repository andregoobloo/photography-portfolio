"use client";
import l1 from "@/app/public/landscapes/l1.jpg";
import l2 from "@/app/public/landscapes/l2.jpg";
import l3 from "@/app/public/landscapes/l3.jpg";
import l4 from "@/app/public/landscapes/l4.jpg";
import l5 from "@/app/public/landscapes/l5.jpg";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const images = [l1, l2, l3, l4, l5];

  return (
    <>
      <div className=" w-4/5 mx-auto columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        <LightGallery
          onInit={() => console.log("welcome")}
          speed={500}
          plugins={[lgThumbnail]}
          download={false}
          // dynamic={true}
        >
          {images.map((img, idx) => (
            <Link key={idx} href={img.src}>
              <Image
                className="object-cover max-w-full  cursor-pointer hover:opacity-70 transition-all duration-250 mb-4 break-inside-avoid"
                src={img}
                quality={100}
                alt="placeholder"
                placeholder="blur"
              />
            </Link>
          ))}
        </LightGallery>
      </div>
    </>
  );
}
