import React from "react";
import image from "../images/Why-Us1.png";

function WhyUs() {
  return (
    <div className="relative mt-[3rem] bg-[#0D1A3C]" id="whyus">
      <div className="app-container">
        <div className="mx-auto w-full py-[3rem] md:w-[80%]">
          <h3 className="mx-auto mb-[1rem] w-fit border-b-2 border-white text-center text-[1.5rem] font-[600] text-white md:text-[2rem]">
            Why Us
          </h3>
          <div className="flex flex-col md:flex-row items-start justify-between gap-4">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="max-w-[90%] md:max-w-[60%] space-y-[2rem] text-white">
              <div data-aos="fade-right">
                <h4
                  // data-aos="fade-up"
                  className="mb-[rem] w-fit max-w-full md:max-w-[50%] text-[1.4rem] font-[400] md:text-[1.3rem]"
                >
                  Our Commitment
                </h4>
                <p>
                  At Phillips Akindele & Co., our commitment extends beyond
                  numbers, and it is clear: to leverage the full resources of
                  our firm to help individuals and businesses reach their
                  financial goals. Over the years, we've had a passion for
                  what's possible. And now, we're that trusted Audit firm that
                  thrives on challenges and delivers results. Moreover, we
                  believe in privacy and confidentiality, clear communication,
                  and proactive solutions to empower your financial decisions.
                  We are your Independent professional when it comes to business
                  transactions, your partner when it comes to safeguarding your money and providing advisory on your taxes. We go the extra mile.
                </p>
              </div>
              <div data-aos="fade-left">
                <h4
                  // data-aos="fade-up"
                  className="mb-[rem] text-[1.4rem] font-[400] md:text-[1.3rem]"
                >
                  Our Expertise
                </h4>
                <p>
                  Our qualified and seasoned experts bring a wealth of knowledge to your journey with us. We specialize in industry-specific
                  solutions, offering a diverse range of traditional and digital
                  services to guide you toward sustainable growth. We've helped
                  top companies achieve predictable revenue and profit growth by
                  enhancing their organizational performance through our Audit,
                  Tax, and Advisory services.
                </p>
              </div>
              <div data-aos="fade-right">
                <h4
                  // data-aos="fade-up"
                  className="mb-[rem] w-fit text-[1.4rem] font-[400] md:text-[1.3rem]"
                >
                  What We Are Known For
                </h4>
                <ul className="ml-5 list-disc">
                  <li>
                    We customize our services to suit your specific needs.
                  </li>
                  <li>
                    We prioritize confidentiality and deliver services of the
                    highest quality.
                  </li>
                  <li>
                    Our deep knowledge in various industries sets us apart.
                  </li>
                  <li>
                    We are committed to transparency, offering competitive fees
                    for our services to ensure you can budget confidently and
                    avoid any unexpected charges.
                  </li>
                  <li>
                    We employ cutting-edge technology and ensure that our
                    services remain consistently aligned with best practices.
                  </li>
                  <li>
                    We blend modern and traditional approaches for your benefit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
