import s1 from "/app/public/street/s1.jpg";
import s2 from "/app/public/street/s2.jpg";
import s3 from "/app/public/street/s3.jpg";
import s4 from "/app/public/street/s4.jpg";
import Image from "next/image";

export default function Page() {
  const pictures = [
    {
      link: s1,
      name: "Bern River",
    },
    {
      link: s2,
      name: "Paris sunset",
    },
    {
      link: s3,
      name: "Prague tower",
    },
    {
      link: s4,
      name: "Venice Houses",
    },
  ];

  return (
    <>
      <main className="  w-4/5 mx-auto columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
        {pictures.map((pic, idx) => (
          <div className="mb-4 break-inside-avoid" key={idx}>
            <Image
              className="object-cover max-w-full  cursor-pointer hover:opacity-70 transition-all duration-250"
              src={pic.link}
              quality={100}
              alt={pic.name}
              placeholder="blur"
            />
          </div>
        ))}
      </main>
    </>
  );
}
