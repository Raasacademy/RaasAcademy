import CoursesCMS from "@/components/adminBoard/CoursesCMS";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Home Two SkillGro - Online Courses & Education React Next js Template",
};
const index = () => {
   return (
      <Wrapper>
         <CoursesCMS />
      </Wrapper>
   )
}

export default index