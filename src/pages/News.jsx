import React from "react";
import cac from "../images/CAC-Logo.png";
import tt from "../images/tt.png";
function News() {
  return (
    <div className="app-container py-[3rem]">
      <h1 className="mb-4 text-3xl font-semibold">News</h1>
      <div className="grid gap-[2rem] md:grid-cols-2">
        <div>
          <a href="/news/cac-commence-strike">
            <div className="mx-auto mb-4 h-[20rem] w-[20rem]">
              <img src={cac} alt="" className="h-full w-full object-cover" />
            </div>
          </a>
          <a href="/news/cac-commence-strike">
            <h3 className="mb-4 text-xl font-medium uppercase hover:underline">
              CAC Commences Strike off of Companies from Register
            </h3>
          </a>
          <p>
            We would like to draw your immediate attention to a crucial matter
            concerning your company's status on the Corporate Affairs
            Commission’s official register...
          </p>
        </div>
        <div>
          <a
            href="https://www.tagalliances.com/news-resources/tag-in-the-press/13895-tiag-welcomes-phillips-akindele-co-pac-in-nigeria"
            target="_blank"
            rel="noreferrer"
          >
            <div className="mb-4 w-full md:mx-auto md:h-[20rem]">
              <img src={tt} alt="" className="h-full w-full object-cover" />
            </div>
          </a>
          <a
            href="https://www.tagalliances.com/news-resources/tag-in-the-press/13895-tiag-welcomes-phillips-akindele-co-pac-in-nigeria"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="mb-4 text-xl font-medium uppercase hover:underline">
              TIAG Welcomes Phillips Akindele & Co. in Nigeria
            </h3>
          </a>
          <p>
            Phillips Akindele and Co. has been welcomed to the fold of TIAG, TAG
            Alliances (A worldwide Alliance of Independent Accounting Firms)...
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
