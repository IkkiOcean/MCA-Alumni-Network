import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import about from "../assets/about.jpg"

const About = () => {
  
  return (
    <>
      {/* About Page */}
      <section className=' bg-neutral-900 lg:h-screen'>
        <div  className='flex flex-wrap  gap-y-10  flex-col-reverse lg:flex-row justify-center items-center lg:justify-around lg:items-center'>
          <div className='card lg:w-[450px] w-[400px] h-min bg-transparent text-white m-2  shadow-xl' >
            <div className='card-body '>
              <h1 className=' text-xl lg:text-2xl text-orange-600 font-bold'>ABOUT</h1>
              <h1 className='card-title'>
                MCA<span className='text-orange-600'>ALUMNI</span>  NETWORK
              </h1>
              <p className='font-semibold text-base'>
                Our alumni network is a vibrant and diverse community of professionals who have graduated from our MCA program. They are leaders in their fields, making significant contributions to the industry and society. We are proud of their achievements and the positive impact they have on the world.
              </p>
              <div className='card-actions justify-center'>
                <Link
                  to={`/register`}
                  className='btn btn-success w-28'>
                  Register
                </Link>
                <Link
                  to={`/login`}
                  className='btn btn-primary w-28'>
                  Login
                </Link>
              </div>
            </div>
          </div>
          <img
            className='m-5 w-60 rounded-md  border-4 border-white lg:w-96 lg:transition-transform lg:duration-0.2 lg:ease-in-out lg:transform lg:hover:scale-105'
            src={'https://gssoc.girlscript.tech/GirlScript_Group_Photo.svg'} />
        </div>
        <div className='flex flex-col gap-10  fixed top-44 right-5'>
          <a href='https://www.facebook.com/' target='_blank'>
            <FaFacebook className='text-[#F5DEB3] lg:text-4xl text-xl'/>
          </a>
          <a href='https://twitter.com' target='_blank'>
            <FaTwitter className='text-[#F5DEB3] lg:text-4xl text-xl' />
          </a>
          <a href='https://linkedin.com' target='_blank'>
            <FaLinkedin className='text-[#F5DEB3] lg:text-4xl text-xl' />
          </a>
          <a href="https://instagram.com" target='_blank'>
            <FaInstagram className='text-[#F5DEB3] lg:text-4xl text-xl' />
          </a>
          <a href='https://youtube.com' target='_blank'>
            <FaYoutube className='text-[#F5DEB3] lg:text-4xl text-xl' />
          </a>
        </div>
      </section>
    </>

  );
};

export default About;
