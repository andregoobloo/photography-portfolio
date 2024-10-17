import { images } from "@/app/_data/street";
import Gallery from "../_components/gallery";

export const metadata = {
  title: "Street Photography",
};

export default function Page() {
  return <Gallery images={images} />;
}
