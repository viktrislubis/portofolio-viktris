import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

const Contact = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="px-3 py-5 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Contact Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange"
          >
            Let's keep in touch
          </p>
        </div>

        <div className="flex flex-col w-full mx-auto rounded-xl bg-darkblue p-4 md:p-7 lg:rounded-2xl">
          <div className="p-2 w-full text-center lg:p-5 xl:p-7">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="text-2xl lg:text-3xl text-dark-orange font-medium mb-3 lg:mb-4"
            >
              Get In Touch
            </h1>

            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-5 mb-5 justify-center"
            >
              <SocialHandles />
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center justify-center mb-4 md:gap-5"
            >
              <FaPhoneAlt className="text-white" />
              <p className="text-white md:text-lg">{ContactData.phone}</p>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center justify-center mb-4 md:gap-5"
            >
              <FaEnvelope className="text-white" />
              <a
                href={`mailto:${ContactData.email}`}
                className="text-white md:text-lg hover:text-dark-orange transition-colors"
              >
                {ContactData.email}
              </a>
            </div>

            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center justify-center md:gap-5"
            >
              <FaMapMarkerAlt className="text-white" />
              <p className="leading-normal text-start text-white md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
