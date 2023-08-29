import React from "react";

function Team() {
  return (
    <div className="team relative" id="team">
      <div className="md:hidden absolute inset-0 bg-[#f1f5f6] opacity-50"></div>
      <div className="app-container relative">
        <div className="py-[3rem]">
          <h3
            data-aos="fade-up"
            className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] pb-[1rem] text-center text-[3rem] font-[400] md:text-[4rem]"
          >
            Meet Our Team
          </h3>
          <div
            data-aos="fade-right"
            className="mx-auto mt-[2rem] w-full md:w-[80%] md:mt-[5rem]"
          >
            <p className="w-full text-[1rem] md:text-[1.3rem] tracking-[.5px] md:w-[600px]">
              We are made up of a group of dynamic result driven people, who are
              key to delivering our purpose. Our people culture is hinged on
              creating an atmosphere where our people can be the best they can
              be, while carrying out our business strategy and evolving with the
              times to ensure we are fit for the progression of our society. At
              PAC, we encourage our people to have the right mindsets and skills
              to navigate their present world and, pursue careers as unique as
              they are, while building their unique experiences.
            </p>
            <br />
            <br />
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="w-full text-[1rem] md:text-[1.3rem] tracking-[.5px] md:w-[600px]"
            >
              Our purpose - to be a positive lasting impact in our industry and
              society, by contributing our quota to solving important problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
