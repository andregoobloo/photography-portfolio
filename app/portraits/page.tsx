import { images } from "@/app/_data/portraits";
import Gallery from "../_components/gallery";

export const metadata = {
  title: "Portraits",
};

export default function Page() {
  return <Gallery images={images} />;
}
