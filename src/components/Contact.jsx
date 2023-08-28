import React from "react";

function Contact() {
  return (
    <section id="contact" className="app-container">
     <h3 className="mb-[1rem] text-center text-[2rem] font-medium">
         Want to contact us?
        </h3>
      <div class="">
        <div class="">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6793422775213!2d3.421580383745402!3d6.435216707585489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf5291758a28d%3A0xfb68765c4784ec78!2s1%20Engineering%20Close%2C%20Victoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1688461579042!5m2!1sen!2sng"
            width="1200"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="!w-full"
          ></iframe>
          <div className="w-full text-center mt-8">
            <p>
              Telephone: <a href="tel:08033510318">08033510318</a> |{" "}
              <a href="tel:07064171650">07064171650</a> <br />
              Email:{" "}
              <a href="mailto:team@phillipsakindeleandco.com">
                team@phillipsakindeleandco.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
