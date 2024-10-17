import { images } from "@/app/_data/landscape2";
import Gallery from "../_components/gallery";

export const metadata = {
  title: "Landscapes II",
};

export default function Page() {
  return <Gallery images={images} />;
}
