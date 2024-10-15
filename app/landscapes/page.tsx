"use client";
import l1 from "@/app/public/landscapes/l1.jpg";
import l2 from "@/app/public/landscapes/l2.jpg";
import l3 from "@/app/public/landscapes/l3.jpg";
import l4 from "@/app/public/landscapes/l4.jpg";
import l5 from "@/app/public/landscapes/l5.jpg";

import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const images = [l1, l2, l3, l4, l5];

  return (
    <>
      <div className="px-20 mx-auto  columns-1 sm:columns-2 lg:columns-3 pb-10 md:pb-20 gap-4 ">
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          download={false}
        >
          {images.map((img, idx) => (
            <Link key={idx} href={img.src}>
              <Image
                className="object-cover max-w-full h-auto  cursor-pointer hover:opacity-70 transition-all duration-250 mb-4 break-inside-avoid"
                src={img}
                // quality={100}
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
