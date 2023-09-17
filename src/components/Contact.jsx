import React from "react";
import location from "../images/location.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import chat from "../images/chat.png";
import fb from "../images/fb-black.png";
import insta from "../images/insta-black.png";
import tw from "../images/tw1.png";
import link from "../images/link-black.png";
import image from "../images/Contact us-amico.png";

function Contact() {
  return (
    <section id="contact" className="app-container !mt-[4rem]">
      <h3 className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] text-center text-[1.5rem] font-[600] text-[#0D1A3C] md:text-[2rem]">
        Want to contact us?
      </h3>
      <div class="mx-auto grid w-full">
        <div className="flex justify-between">
          <div className="md:ml-[10rem] mt-[2rem]">
            <div className="">
              {/* <span className="md:border-r md:border-black md:pr-4 text-[1.2rem] text-center md:ml-[4rem]">
                A member of TIAG, TAG Alliances
              </span> */}
              <span className="flex items-center gap-2 justify-center md:justify-start">
                <p className="text-[1.2rem] italic ">Telephone:</p>
                <p>08033510318/07064171650</p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mt-[2rem] text-center md:text-left text-[1.2rem]">
                <p>Phillips Akindele & Co.</p>
                <p>1 Engineering Close, Victoria Island, Lagos</p>
                <span className="flex items-center gap-2">
                  <p className=" italic ">Email:</p>{" "}
                  <p>team@phillipsakindeleandco.com</p>
                </span>
                <div className="mt-[2rem]">
                  <ul className="flex cursor-pointer items-center justify-center md:justify-start gap-6 text-[1rem] font-normal text-white">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100095332141729&mibextid=ZbWKwL"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={fb} alt="" className="w-[.8rem]" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/pacnigeria?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={insta} alt="" className="w-[1.2rem]" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/pacnigeria/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={link} alt="" className="w-[1.2rem]" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/pac_nigeria"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={tw} alt="" className="w-[1.2rem]" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:ml-[5rem]">
                <img src={image} alt="" className="w-[15rem] mx-auto mt-8 md:m-0 md:mt-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
