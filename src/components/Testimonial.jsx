import React from "react";
import OwlCarousel from "react-owl-carousel";
import reel from "../images/reel2.png";
import flutterwave from "../images/flutterwave.png";

const options = {
  margin: 16,
  responsiveClass: true,
  nav: true,
  loop: true,
  dots: false,
  // autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
};

function Testimonial() {
  return (
    <div className="my-[1.5rem] " id="testimonials">
      <div className="app-container">
        <div className="mx-auto w-full bg-[#0D1A3C] py-4 md:w-[80%]">
          <h3 className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] text-center text-[3rem] font-[600] text-[#fff] md:text-[2rem]">
            People Are Talking
          </h3>
          <OwlCarousel className="owl-theme text-center" {...options}>
            <div className="p-8 text-center text-[#fff]">
              <q className="text-center italic text-[#fff]">
                Phillips Akindele & Co have been our company's auditors for 5
                years now, and every year, we have had a thorough audit with
                great service. Their methodical approach to financial auditing,
                attention to details, and experienced team are praiseworthy.
                They have assisted in maintaining regulatory adherence and
                provided priceless insights to enhance our financial workflows.
                Throughout the audit procedures, they consistently kept us
                updated and engaged, shared their discoveries and offered
                proactive and useful recommendations to improve our financial
                processes and ultimately, the running of our business.
              </q>
              <br />
              <br />
              <div className="mx-auto h-fit w-[8rem] mt-8">
                <img src={reel} alt="" className="w-full" />
              </div>
              <p className="ml-[.2rem] mt-4">
                <strong>Reelfruit company</strong>
              </p>
            </div>
            <div className="p-8 text-center text-[#fff]">
              <q className="text-center italic text-[#fff]">
                Phillips Akindele & Co. has allowed us to focus on our customers
                instead of being overwhelmed during financial audits in a number
                of countries on the continent. PAC team makes the process
                seamless by proactively guiding us through audit requests,
                saving us from having an entire team of auditors at our offices
                and reducing weeks of compiling information. We enjoy the way
                our annual audit and tax filings are completed timely. As value
                add, the PAC team has been very accessible providing guidance.
                We would highly recommend Phillips Akindele & Co. to anyone
                looking for excellent audit services.
              </q>
              <br />
              <br />
              <div className="mx-auto h-fit w-[10rem] mt-8">
                <img src={flutterwave} alt="" className="w-full" />
              </div>
              <p className="ml-[1rem] mt-4">
                <strong>Flutterwave company</strong>
              </p>
            </div>
            {/* <div className="bg-[#0D1A3C] p-8 text-[#fff]">
              <q className="italic">
                After I was wrongfully terminated as CEO, I asked several very
                knowledgeable legal professionals for names of the best
                litigation firms. Without exception or hesitation, each one told
                me to hire the Robbins Firm. My former employer paid one of the
                largest law firms in the country over one million dollars to
                fight the case. The Robbins litigators prepared the case with
                precision and an extraordinary eye for detail, had the most
                brilliant courtroom strategy and presentation I’ve ever
                witnessed, and delivered a decisive win. <br />
                <br /> In my 30+ years of business experience, I have hired
                dozens of top tier national law firms and spent millions on
                legal fees and this is, by far, the most impressive team I’ve
                ever worked with, which is why when friends ask me for names of
                the best litigation firms, I tell them without exception or
                hesitation to hire the Robbins Firm.
              </q>
              <br />
              <br />
              <strong>A.F., CEO of (another) Technology company</strong>
            </div> */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
