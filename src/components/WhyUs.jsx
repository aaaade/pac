import React from "react";
import image from "../images/men-mobile.svg";

function WhyUs() {
  return (
    <div className="relative mt-[3rem] bg-[#0D1A3C]" id="whyus">
      <div className="app-container">
        <div className="mx-auto w-full py-[3rem] md:w-[80%]">
        <h3 data-aos="fade-up" className="mx-auto mb-[1rem] w-fit border-b-2 border-white text-center text-[3rem] md:text-[3rem] font-[600] text-white">
            Why Us
          </h3>
          <div className="space-y-[2rem] text-white">
            <div data-aos="fade-right">
              <h4
                // data-aos="fade-up"
                className="mb-[rem] w-fit text-[1.4rem] font-[400] md:text-[2rem]"
              >
                What It’s Like Working With Us
              </h4>
              <p>
                We're a close-knit group that makes an effort to get along with
                everyone, including our customers. That doesn't imply that we
                constantly follow the established regulations. We've discovered
                that the most original and successful ideas result from an
                irreverent viewpoint together with a healthy disregard for the
                conventional formulas. In the end, we're dedicated to creating
                and implementing the most successful plans that help you achieve
                your objectives.
              </p>
            </div>
            <div  data-aos="fade-left">
              <h4
                // data-aos="fade-up"
                className="mb-[rem] text-[1.4rem] font-[400] md:text-[2rem]"
              >
                Don't Hire Us If It's Simple
              </h4>
              <p>
                We're a close-knit group that makes an effort to get along with
                everyone, including our customers. That doesn't imply that we
                constantly follow the established regulations. We've discovered
                that the most original and successful ideas result from an
                irreverent viewpoint together with a healthy disregard for the
                conventional formulas. In the end, we're dedicated to creating
                and implementing the most successful plans that help you achieve
                your objectives.
              </p>
            </div>
            <div data-aos="fade-right">
              <h4
                // data-aos="fade-up"
                className="mb-[rem] w-fit text-[1.4rem] font-[400] md:text-[2rem]"
              >
                We Avoid Wasting Your Time and Money
              </h4>
              <p>
                We're a close-knit group that makes an effort to get along with
                everyone, including our customers. That doesn't imply that we
                constantly follow the established regulations. We've discovered
                that the most original and successful ideas result from an
                irreverent viewpoint together with a healthy disregard for the
                conventional formulas. In the end, we're dedicated to creating
                and implementing the most successful plans that help you achieve
                your objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
