import React from "react";
import location from "../images/location.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import chat from "../images/chat.png";
import fb from "../images/fb-black.png";
import insta from "../images/insta-black.png";
import tw from "../images/tw-black.png";
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
          <div className="ml-[17rem] mt-[2rem]">
            <div className="flex items-center justify-center text-left italic">
              <span className="border-r border-black pr-4 text-[1.2rem] ">
                A member of TIAG, TAG Alliances
              </span>
              <span className="ml-4 flex items-center gap-2">
                <p className="text-[1.2rem] italic ">Telephone:</p>
                <p>08033510318/07064171650</p>
              </span>
            </div>
            <div className="flex justify-between">
              <div className="mt-[2rem] text-left text-[1.2rem]">
                <p>Phillips Akindele & Co.</p>
                <p>1 Engineering Close, Victoria Island 106104, Lagos</p>
                <span className="flex items-center gap-2">
                  <p className=" italic ">Email:</p>{" "}
                  <p>team@phillipsakindeleandco.com</p>
                </span>
                <div className="mt-[2rem]">
                  <ul className="flex cursor-pointer items-center gap-6 text-[1rem] font-normal text-white">
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
                  </ul>
                </div>
              </div>
              <div>
                <img src={image} alt="" className="w-[15rem]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
