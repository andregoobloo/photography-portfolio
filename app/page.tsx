import Image from "next/image";
import bg from "/app/public/bg.jpg";

export default function Home() {
  return (
    <>
      <main>
        <Image
          src={bg}
          // sizes="100vw"
          fill
          quality={100}
          alt="background image"
          className="object-cover object-center"
        ></Image>
      </main>
    </>
  );
}
