import Banner from "./Banner"
import Features from "./Features"
import Courses from "./Courses"
import Cta from "./Cta"
import Choose from "./Choose"
import Categories from "./Categories"
import Instructor from "../main-homepage/Instructor"
import Blog from "../home-six/Blog"
import Testimonial from "./Testimonial"
import BrandTwo from "@/components/common/brands/BrandTwo"
import Newsletter from "./Newsletter"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderSeven from "@/layouts/headers/HeaderSeven"

const HomeSeven = () => {
   return (
      <>
         <HeaderSeven />
         <main className="main-area fix">
            <Banner />
            <Features />
            <Courses />
            <Cta />
            <Choose />
            <Categories />
            <Instructor />
            <Testimonial />
            <BrandTwo />
            <Blog />
            <Newsletter />
         </main>
         <FooterTwo style={true} />
      </>
   )
}

export default HomeSeven

