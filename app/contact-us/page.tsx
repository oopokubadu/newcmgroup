import React from "react";
import LogoIcon from "@/assets/ic_chopmoney.svg"

const ContactUs = () => {
  return (
    <div className="bg-[#1f1f1f] h-[100vh]">
      <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
        <a className="" href="/">
          <img className="mb-16 mx-auto" src={LogoIcon} alt=""/>
        </a>
        <div className="flex flex-col ">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-center leading-snug tracking-tight text-[#ECEC08] md:text-5xl">
              Support
            </h1>
            <p className="my-8 text-base font-normal text-center text-white">
              Support superheroes at your service! Questions? Issues? We've got
              your back. Satisfaction guaranteed!
            </p>
          </div>
          <div className="flex flex-col">
            <a
              href="tel:+233555190488"
              className="mb-2 text-base font-normal text-center text-white"
            >
              +233555190488
            </a>
            <a
              href="tel:+233200438498"
              className="mb-2 text-base font-normal text-center text-white"
            >
              +233200438498
            </a>
            <a
              href="mailto:admin@chopmoney.co"
              className="mb-4 text-base font-normal text-center text-white"
            >
              admin@chopmoney.co
            </a>

            <a
              className=" mt-2 bg-[#2c2c2c] w-48 rounded-full mx-auto p-4 text-base font-normal text-center text-[#ECEC08]"
              href="https://wa.me/message/NRDZZQVYGWMCL1"
            >
              Whatsapp Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;