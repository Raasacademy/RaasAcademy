import Link from "next/link"
import Image from "next/image"

import logo from "@/assets/img/logo/secondary_logo.svg"

const FooterCommon = () => {
   return (
      <>
         <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="footer__widget">
               <div className="logo mb-35">
                  <Link href="/"><Image src={logo} alt="img" /></Link>
               </div>
               <div className="footer__content">
                  <p style={{ color: 'white' }}>when an unknown printer took galley of type and scrambled it to make pspecimen bookt has.</p>
                  <ul className="list-wrap">
                     <li style={{ color: 'white' }}>463 7th Ave, NY 10018, USA</li>
                     <li style={{ color: 'white' }}>+123 88 9900 456</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
               <h4 className="footer__widget-title">Useful Links</h4>
               <div className="footer__link">
                  <ul className="list-wrap">
                     <li><Link href="/events-details" style={{ color: 'white' }}>Our values</Link></li>
                     <li><Link href="/events-details" style={{ color: 'white' }}>Our advisory board</Link></li>
                     <li><Link href="/events-details" style={{ color: 'white' }}>Our partners</Link></li>
                     <li><Link href="/events-details" style={{ color: 'white' }}>Become a partner</Link></li>
                     <li><Link href="/events-details" style={{ color: 'white' }}>Work at Future Learn</Link></li>
                     <li><Link href="/events-details" style={{ color: 'white' }}>Quizlet Plus</Link></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
            <div className="footer__widget">
               <h4 className="footer__widget-title">Our Company</h4>
               <div className="footer__link">
                  <ul className="list-wrap">
                     <li><Link href="/contact" style={{ color: 'white' }}>Contact Us</Link></li>
                     <li><Link href="/instructor-details" style={{ color: 'white' }}>Become Teacher</Link></li>
                     <li><Link href="/blog" style={{ color: 'white' }}>Blog</Link></li>
                     <li><Link href="/instructor-details" style={{ color: 'white' }}>Instructor</Link></li>
                     <li><Link href="/events-details" style={{ color: 'white' }}>Events</Link></li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   )
}

export default FooterCommon
