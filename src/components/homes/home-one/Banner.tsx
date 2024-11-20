"use client"
import Image from "next/image"
import BtnArrow from "@/svg/BtnArrow"
import Link from "next/link"
import InjectableSvg from "@/hooks/InjectableSvg"
import SvgAnimation from '@/hooks/SvgAnimation'
import VideoPopup from "@/modals/VideoPopup"
import { useState } from "react"

import bannerImg_2 from "@/assets/img/banner/h2_banner_img.png"
import bannerImg_4 from "@/assets/img/others/student_grp.png"
import bannerImg_6 from "@/assets/img/banner/h2_banner_shape03.svg"

const Banner = () => {

   const svgIconRef = SvgAnimation('/assets/img/banner/h2_banner_shape02.svg');
   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="banner-area-two banner-bg-two tg-motion-effects" style={{ backgroundImage: `url(/assets/img/banner/banner_bg02.png)` }}>
            <div className="container">
               <div className="container p-lg-5" style={{ backgroundColor: '#2A62FF', borderRadius: '15px' }}>

                  <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-6">
                     <div className="banner__content-two">
                        <h3 className="title pb-3" style={{ color: '#FFFFFF', fontFamily: 'sans-serif', fontSize: '40px', fontWeight: '400' }} data-aos="fade-right" data-aos-delay="400">
                           Unlock your
                           <span className="position-relative">
                              {/*<svg x="0px" y="0px" preserveAspectRatio="none" viewBox="0 0 209 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M4.74438 7.70565C69.7006 -1.18799 136.097 -2.38304 203.934 4.1205C207.178 4.48495 209.422 7.14626 208.933 10.0534C206.793 23.6481 205.415 36.5704 204.801 48.8204C204.756 51.3291 202.246 53.5582 199.213 53.7955C136.093 59.7623 74.1922 60.5985 13.5091 56.3043C10.5653 56.0924 7.84371 53.7277 7.42158 51.0325C5.20725 38.2627 2.76333 25.6511 0.0898448 13.1978C-0.465589 10.5873 1.61173 8.1379 4.73327 7.70565" fill="currentcolor" />
                              </svg>*/}
                              Potential
                           </span> <br />
                           With our Expert-Led Courses
                        </h3>
                        <p style={{ color: '#FFFFFF', fontWeight: 200, fontFamily: 'inherit' }} className="pb-4">Transform your skills and advance your career with flexible, online learning.</p>
                        <div className="banner__btn-two" data-aos="fade-right" data-aos-delay="600">
                           <Link href="/contact" className="btn arrow-btn" style={{ backgroundColor: '#FFFFFF', color: '#1E1E1E' }}>Explore All our Courses <BtnArrow /></Link>
                           {/*<a onClick={() => setIsVideoOpen(true)} style={{ cursor: "pointer", borderColor: '#FFFFFF', borderWidth: '2px',  borderStyle: 'solid', borderRadius: '50px', padding: '10px 20px', color: '#FFFFFF' }} className="play-btn popup-video"> Become an Instructor</a>*/}
                        </div>
                     </div>
                  </div>
                  
                  <div className="col-xl-6 col-lg-6 col-md-8">
                     <div className="banner__images-two tg-svg" ref={svgIconRef}>
                     <Image
                     src={bannerImg_2}
                     alt="img"
                     className="main-img"
                     style={{
                        width: '52%',
                        height: '52%',
                        objectFit: 'cover',
                        marginTop: '0px',
                        zIndex: 2, // Ensure the z-index is numeric and set higher
                        position: 'relative', // Add relative positioning to make z-index work
                     }}
                     />
                     <div
                     className="container"
                     style={{
                        position: 'absolute', // Ensure it's positioned absolutely for stacking
                        zIndex: 1, // Set a lower z-index to keep it behind the image
                        marginLeft: '80px',
                        marginTop: '-400px',
                        height: '415px',
                        width: '80%',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                     }}
                     ></div>


                        {/*<div className="shape big-shape" data-aos="fade-up" data-aos-delay="600">
                           <InjectableSvg src="/assets/img/banner/h2_banner_shape01.svg" alt="shape" className="injectable tg-motion-effects1" />
                        </div>*/}
                           <span className="svg-icon"></span>
                        {/*<div className="about__enrolled" data-aos="fade-right" data-aos-delay="200">
                           <p className="title"><span>36K+</span> Enrolled Students</p>
                           <Image src={bannerImg_4} alt="img" />
                        </div>*/}
                        <div className="banner__student" style={{ position: 'absolute', zIndex: 3, top: '170px' }} data-aos="fade-left" data-aos-delay="200">
                           <div className="icon">
                              <InjectableSvg src="/assets/img/banner/h2_banner_icon.svg" alt="img" className="injectable" />
                           </div>
                           <div className="content">
                              <span>Let us help you grow your skill</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               </div>
            </div>
            {/*<Image src={bannerImg_6} alt="shape" className="line-shape-two" data-aos="fade-right"
               data-aos-delay="1600" />*/}
         </section>
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"Ml4XCF-JS0k"}
         />
      </>
   )
}

export default Banner
