import React from "react";
import cac from "../images/CAC-Logo.png";
import fb from "../images/fb-black.png";
import insta from "../images/insta-black.png";
import tw from "../images/tw1.png";
import link from "../images/link-black.png";

function NewsDetails() {
  return (
    <div className="app-container py-[3rem]">
      <div className="mx-auto w-full md:w-[60%]">
        <h1 className="text-[25px] md:text-[45px] uppercase md:leading-[4rem]">
          CAC Commences Strike off of Companies from Register
        </h1>
        <ul className="mt-4 flex cursor-pointer items-center gap-6 text-[1rem] font-normal text-white justify-start">
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
          <li>
            <a
              href="https://twitter.com/pac_nigeria"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tw} alt="" className="w-[1.2rem]" />
            </a>
          </li>
        </ul>
        <div className="mx-auto my-4 h-[400px] w-full md:w-1/2">
          <img src={cac} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="space-y-5">
          <p className="text-md">
            We would like to draw your immediate attention to a crucial matter
            concerning your company's status on the Corporate Affairs
            Commission’s official register.
          </p>
          <h3 className="text-xl font-medium">
            Compliance for Active Company Status
          </h3>
          <p className="text-md">
            The Corporate Affairs Commission (CAC) has initiated the process of
            striking off companies that have not complied with the Companies and
            Allied Matters Act 2020 by not filing their annual returns for a
            consecutive period of 10 years. This process adheres strictly to
            legal requirements.
          </p>
          <h3 className="text-xl font-medium">Take Action Now</h3>
          <p className="text-md">
            Don't panic – there's a solution! You can ensure compliance by
            filing your annual returns up to date within 90 days of the
            publication on the commission's website. Failing to comply within
            the stipulated time frame can lead to your company being struck off
            the registrar.
          </p>
          <h3 className="text-xl font-medium">
            Legal Consequences and Restoration
          </h3>
          <p className="text-md">
            Keep in mind that a struck-off company cannot engage in business
            until it's restored via an order from the Federal High Court. This
            emphasizes the seriousness of the situation.
          </p>
          <p className="text-md">
            To know whether your company status is active, visit{" "}
            <a
              href="https://search.cac.gov.ng/home"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              https://search.cac.gov.ng/home
            </a>{" "}
            and input the name of your company. We encourage you to act
            promptly.
          </p>
          <p className="text-md">The PAC Team</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetails;
