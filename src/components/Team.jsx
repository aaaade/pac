import React from "react";
import teamImg from "../images/team.png";

function Team() {
  return (
    <div className="team relative" id="team">
      {/* <div className=" absolute inset-0 bg-[#f1f5f6] opacity-50"></div> */}
      <div className="app-container relative">
        <div className="py-[3rem] w-full md:w-[80%] mx-auto">
          <h3
            
            className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] text-center text-[1.5rem] font-[600] text-[#0D1A3C] md:text-[2rem]"
          >
            Meet Our Team
          </h3>
          <div className="flex justify-between items-center">
            <div
              data-aos="fade-right"
              className="mx-auto mt-[2rem] w-1/2"
            >
              <p className="w-full text-[.8rem] tracking-[.5px] md:w-[500px] md:text-[1.1rem]">
                We are made up of a group of dynamic result driven people, who
                are key to delivering our purpose. Our people culture is hinged
                on creating an atmosphere where our people can be the best they
                can be, while carrying out our business strategy and evolving
                with the times to ensure we are fit for the progression of our
                society. At PAC, we encourage our people to have the right
                mindsets and skills to navigate their present world and, pursue
                careers as unique as they are, while building their unique
                experiences.
              </p>
              <br />
              <br />
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="w-full text-[.8rem] tracking-[.5px] md:w-[500px] md:text-[1.1rem]"
              >
                Our purpose - to be a positive lasting impact in our industry
                and society, by contributing our quota to solving important
                problems.
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
