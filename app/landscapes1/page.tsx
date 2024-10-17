import { images } from "@/app/_data/landscape1";
import Gallery from "../_components/gallery";

export const metadata = {
  title: "Landscapes I",
};

export default function Page() {
  return <Gallery images={images} />;
}
