import Link from "next/link";

export default function PageLinks() {
  const navs = [
    {
      href: "/landscapes1",
      directory: "Landscapes I",
    },
    {
      href: "/landscapes2",
      directory: "Landscapes II",
    },
    {
      href: "/portraits",
      directory: "Portraits",
    },
    {
      href: "/street_photography",
      directory: "Street Photography",
    },

    {
      href: "/contact",
      directory: "Contact",
    },
  ];
  return (
    <div className="md:flex-row md:gap-5 lg:gap-10 flex flex-col">
      {navs.map((nav) => (
        <Link
          key={nav.href}
          href={nav.href}
          className="hover:opacity-60 transition-all delay-50 text-lg"
        >
          {nav.directory}
        </Link>
      ))}
    </div>
  );
}
