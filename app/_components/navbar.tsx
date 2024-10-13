import Link from "next/link";
import PageLinks from "./pageLinks";

export default function Navbar() {
  return (
    <div className="uppercase flex flex-col items-center pb-10 z-20 relative text-xl">
      <Link href="/" className="py-10 hover:opacity-60 transition-all delay-50">
        Andre Holzthum Photography
      </Link>
      <PageLinks />
    </div>
  );
}
