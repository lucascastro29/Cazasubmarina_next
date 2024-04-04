import Carousel from "@/app/ui/home/Carousel";
import Image from "next/image";
import carrousel_Image_1 from "@/public/img/carrousel_home/1.jpg"
import carrousel_Image_1_0 from "@/public/img/carrousel_home/2.jpg"
import Products_Carousel from "./ui/home/Products_Carousel";

export default function Page() {
  return (
  <>
  <Carousel/>
  <Products_Carousel/>
  </>

  );
}
