import Carousel_Products from "./ui/home/Carousel_Products";
import Courses_display from "@/app/ui/home/Courses_display"
import Nosotros_home from "./ui/home/Nosotros_home";
import CarouselComponent from "@/app/ui/home/Carousel";


export default function Page() {
  return (
  <>
  <CarouselComponent/>
  <Carousel_Products/>

  <Courses_display/>
  <Nosotros_home/>
 
  </>

  );
}
