import s1 from "/app/public/street/s1.jpg";
import s2 from "/app/public/street/s2.jpg";
import s3 from "/app/public/street/s3.jpg";
import s4 from "/app/public/street/s4.jpg";
import Image from "next/image";

export default function Page() {
  // const pictures = [
  //   {
  //     src: s1,
  //     name: "Bern River",
  //   },
  //   {
  //     src: s2,
  //     name: "Paris sunset",
  //   },
  //   {
  //     src: s3,
  //     name: "Prague tower",
  //   },
  //   {
  //     src: s4,
  //     name: "Venice Houses",
  //   },
  // ];

  const pictures = [s1, s2, s3, s4];

  return (
    <>
      <main className=" w-4/5 mx-auto columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        {pictures.map((pic, idx) => (
          <div className="mb-4 break-inside-avoid" key={idx}>
            <Image
              className="object-cover max-w-full  cursor-pointer hover:opacity-70 transition-all duration-250"
              src={pic}
              quality={100}
              alt="placeholder"
              placeholder="blur"
            />
          </div>
        ))}
      </main>
    </>
  );
}
