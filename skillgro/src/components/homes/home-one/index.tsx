import FooterOne from "@/layouts/footers/FooterOne"
import Blog from "../main-homepage/Blog"
import CourseArea from "../main-homepage/CourseArea"
import InstructorTwo from "../main-homepage/InstructorTwo"
import About from "./About"
import Banner from "./Banner"
import Choose from "../home-seven/Choose"
import Counter from "./Counter"
import EventArea from "./EventArea"
import Feature from "./Feature"
import Newsletter from "./Newsletter"
import Testimonial from "../home-seven/Testimonial"
import WorkArea from "./WorkArea"
import BrandOne from "@/components/common/brands/BrandOne"
import Instructor from "./Instructor"
import HeaderTwo from "@/layouts/headers/HeaderTwo"

const HomeOne = () => {
   return (
      <>
         <HeaderTwo />
         <main className="main-area fix">
            <Banner />
            {/*<BrandOne style={true} />*/}
            <Feature />
            {/*<About />*/}
            <Choose />
            <CourseArea style={true} />
            {/*<WorkArea />
            <Counter />
            <Instructor />*/}
            <Newsletter />
            <EventArea />
            <Blog style={true} />
            <Testimonial />
            <InstructorTwo style={true} />
         </main>
         <FooterOne style={true} />
      </>
   )
}

export default HomeOne
