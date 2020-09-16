import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1 aria-label=" Hi, I’m Simranjeet,web developer." className="blast-root">
            <span className="blast" style="opacity: 1; color: #23ffde;">C</span
            ><span className="blast" style="opacity: 1; color: #23ffde;">o</span
            ><span className="blast" style="opacity: 1; color: #23ffde;">n</span
            ><span className="blast" style="opacity: 1; color: #23ffde;">t</span
            ><span className="blast" style="opacity: 1; color: #23ffde;">a</span
            ><span className="blast" style="opacity: 1; color: #23ffde;">c</span
            ><span className="blast" style="opacity: 1; color: #23ffde;">t</span>
            <span className="blast" style="opacity: 1; color: #23ffde;">m</span
            ><span className="blast" style="opacity: 1; color: #23ffde;">e</span>
          </h1>
          <p>
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question, don’t
            hesitate to contact me using below form either.
          </p>

          <div className="contact">
            <script type="text/javascript">
              var submitted = false;
            </script>
            <script>
              function doIt() {
                alert("Your Message is sent!");
                __doPostBack("ctl00$ctl00$bLogout", "");
              }
            </script>
            <iframe
              name="hidden_iframe"
              id="hidden_iframe"
              style="display: none;"
              onload="if(submitted)  {doIt();}"
            ></iframe>
            <form
              className="form"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfw-BZLTTNI3Y9D9LbCBb5b56lpbOokb2P1win1ky8SP5lt8A/formResponse"
              method="post"
              target="hidden_iframe"
              autocomplete="off"
              onsubmit="submitted=true;"
            >
              <input
                id="name"
                type="text"
                name="entry.649112156"
                placeholder="Name *"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='Name *'"
                required="true"
              />

              <input
                id="email"
                type="email"
                name="entry.1560288382"
                placeholder="Email *"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='Email *'"
                required="true"
              /><br />

              <input
                id="sbj"
                type="text"
                name="entry.1406382583"
                placeholder="Subject (optional)"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='Subject'"
              /><br />

              <textarea
                id="msg"
                type="text"
                name="entry.728219473"
                placeholder="Message *"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='Message *'"
                required="true"
                cols="50"
                rows="10"
              ></textarea
              ><br />
              <input id="sub-btn" type="submit" value="Send" />
            </form>
            <p
              style="
                color: aliceblue;
                width: 50%;
                font-size: 1em;
                margin: 1% 0;
                transform: translateY(-40px);
              "
            >
              Or you can just mail me at ~
              <a
                href="mailto:smrnjeet222@gmail.com"
                style="color: #23ffde; font-size: 1.3em;"
              >
                smrnjeet222@gmail.com</a
              >
            </p>
          </div>
        </div>

        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br />
          &lt;/html&gt;
        </span>
      </div>
      
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633470.5169291274!2d76.89342349926463!3d28.705698137363992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a47a1803d%3A0xedfb8cc477815e2f!2sRohini%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1597408824240!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen=""
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </>
  );
}
