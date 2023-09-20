import React from "react";
import teamImg from "../images/team.png";

function Team() {
  return (
    <div className="team relative" id="team">
      {/* <div className=" absolute inset-0 bg-[#f1f5f6] opacity-50"></div> */}
      <div className="app-container relative">
        <div className="mx-auto w-full py-[3rem] md:w-[80%]">
          <h3 className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] text-center text-[1.5rem] font-[600] text-[#0D1A3C] md:text-[2rem]">
            Meet Our Team
          </h3>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div
              data-aos="fade-right"
              className="mx-auto mt-[2rem] w-full md:w-1/2"
            >
              <p className="w-full text-[1rem] tracking-[.5px] md:w-[500px] md:text-[1.1rem]">
                We are a team of highly qualified professionals who are members
                of professional bodies. <br />
                <br /> We pride ourselves on having a hard working, diverse
                workforce, a friendly, and respectful culture, and we encourage
                our people to have the right mindsets and skills to navigate
                their present world and pursue careers as unique as they are,
                while building their unique experiences. We know that if team
                members are well supported and engaged in our mission and
                values, we can deliver better services. <br />
                <br /> We value team building and bonding. Unlike Jack, we work
                hard and play hard. We are not dull auditors. <br />
                <br /> We call ourselves 'The PAC Team'.
              </p>
            </div>
            <div className="" data-aos="fade-left" data-aos-delay="300">
              <img src={teamImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
