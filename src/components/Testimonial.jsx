import React from "react";
import OwlCarousel from "react-owl-carousel";

const options = {
  margin: 16,
  responsiveClass: true,
  nav: true,
  loop: true,
  dots: false,
  autoplay: true,
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
    <div className="my-[3rem]">
      <div className="app-container">
        <div className="mx-auto w-full md:w-[80%]">
          <h3 className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] text-center text-[2rem] font-medium">
            Testimonials
          </h3>
          <OwlCarousel className="owl-theme" {...options}>
            <div className="bg-[#f1f5f6] p-8">
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
            </div>
            <div className="bg-[#f1f5f6] p-8">
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
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
