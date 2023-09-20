import React from "react";
import audit from "../images/Audit-rafiki.png";
import tax from "../images/Tax-amicoa.png";
import others from "../images/others.png";

function About() {
  return (
    <div className="relative my-[3rem] md:mt-[6rem]" id="about">
      <div className="app-container">
        <div className="mx-auto w-full md:w-[80%]">
          <h3 className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] text-center text-[3rem] font-[600] text-[#0D1A3C] md:text-[2rem]">
            About Us
          </h3>
          <div className="text-center text-[#666566]" data-aos="fade-up">
            <p className="mb-[1rem] text-[1rem] tracking-[.5px] md:text-[1.1rem]">
              At Phillips Akindele & Co., we specialize in audit and assurance
              services. With a foundation established in 2016, and the only Nigerian audit & tax member firm of TAG Alliances (a Worldwide Alliance of Independent Professional Service Firms), we’ve proudly partnered with several clients across a range of industries in Africa.
            </p>
            <p className=" mb-[1rem] text-[1rem] tracking-[.5px] md:text-[1.1rem]">
              Headquartered in Lagos, Nigeria, our mission is clear: to simplify
              complex financial matters and provide actionable insights for
              local and global growth. Our team, carefully selected from
              respected sources, brings both international standards and a deep
              understanding of African regulatory landscapes to every project.
            </p>
            <p className="text-[1rem] tracking-[.5px] md:text-[1.1rem]">
              We are your strategic business partner.
            </p>
          </div>
          <div className="mx[5px] grrid-cols-1 my-[2rem] grid gap-[2rem] md:grid-cols-3">
            <div
              data-aos="fade-left"
              className="flex flex-col items-center rounded-[1rem] bg-[#009FE3] p-[2rem] text-center text-white"
            >
              <img src={audit} alt="" className="h-[8rem] w-[10rem]" />
              <h4 className="text-[1.5rem] font-semibold">Audit & Assurance</h4>
              <p>
                Following the procedures stipulated by the International
                Auditing Standards and expressing an appropriate opinion on a
                set of financial statements.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="flex flex-col items-center rounded-[1rem] bg-[#009FE3] p-[2rem] text-center text-white"
            >
              <img src={tax} alt="" className="h-[8rem] w-[10rem]" />
              <h4 className="text-[1.5rem] font-semibold">Tax</h4>
              <p>
                An examination of the level of compliance based on the tax laws
                and other regulations applicable to your jurisdiction and
                industry.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="600"
              className="flex flex-col items-center rounded-[1rem] bg-[#009FE3] p-[2rem] text-center text-white"
            >
              <img src={others} alt="" className="h-[8rem] w-[10rem]" />
              <h4 className="text-[1.5rem] font-semibold">Advisory Services</h4>
              <p>
                This includes forensic audit, tax & financial due diligence, and
                other professional services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
