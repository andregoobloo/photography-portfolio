import Link from "next/link";
import PageLinks from "./pageLinks";

export default function Navbar() {
  return (
    <div className="uppercase flex flex-col items-center my-20 z-20 relative">
      <Link
        href="/"
        className="pb-10 hover:opacity-60 transition-all delay-50 text-3xl "
      >
        Andre Holzthum
      </Link>
      <PageLinks />
    </div>
  );
}
