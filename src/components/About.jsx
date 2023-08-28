import React from "react";
import audit from "../images/simple-safe.png";
import tax from "../images/easy-to-use.png";
import others from "../images/time-saving.png";

function About() {
  return (
    <div className="my-[3rem]">
      <div className="app-container">
        <div className="mx-auto w-full md:w-[80%]">
          <h3 className="mx-auto mb-[1rem] w-fit border-b-2 border-[#067CA6] text-center text-[2rem] font-medium">
            About Us
          </h3>
          <div className="text-center">
            <p className="mb-[3rem] text-[1rem] md:text-[1.3rem]">
              Phillips Akindele & Co. provides audit and assurance services to
              its clients. This includes statutory and non-statutory audit as
              well as limited assurance assignments such as forensic audit. We
              perform the services complying with the provisions of the
              International Standards on Auditing. The services include
              reviewing, reporting and providing recommendations on the adequacy
              and effectiveness of existing accounting and internal control
              systems of our clients. We also provide tax advisory services
              assisting companies to achieve compliance with the provisions of
              the relevant tax and regulatory laws in Nigeria and in Africa at
              large. Through Strategic Partnerships, we are currently present in
              10 other African countries.
            </p>
            <p className="text-[1rem] md:text-[1.3rem]">
              Our clients operate in a wide range of industries including;
              Fintech, law, brand & advertising, information technology, marine,
              haulage, insurance brokerage, oil & gas(downstream & upstream),
              financial services, professional services, building and
              construction, entertainment, non-profit organizations, and real
              estate.
            </p>
          </div>
          <div className="mx[5px] my-[2rem] grid grrid-cols-1 md:grid-cols-3 gap-[2rem]">
            <div className="flex flex-col items-center rounded-[1rem] bg-[#067CA6] p-[2rem] text-center text-white">
              <img src={audit} alt="" className="w-[10rem]" />
              <h4 className="text-[1.5rem] font-semibold">Audit</h4>
              <p>
                Following the procedures stipulated by the International
                Auditing Standards and expressing an appropriate opinion on a
                set of financial statements.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-[1rem] bg-[#067CA6] p-[2rem] text-center text-white">
              <img src={tax} alt="" className="w-[10rem]" />
              <h4 className="text-[1.5rem] font-semibold">Tax</h4>
              <p>
                An examination of the level of compliance based on the tax laws
                and other regulations applicable to your jurisdiction and
                industry.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-[1rem] bg-[#067CA6] p-[2rem] text-center text-white">
              <img src={others} alt="" className="w-[10rem]" />
              <h4 className="text-[1.5rem] font-semibold">Other services</h4>
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
