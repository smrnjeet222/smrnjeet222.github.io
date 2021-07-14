import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import bounce from "../script/bounce";

export default function Contact() {

  const search = useLocation().search;
  const resp = new URLSearchParams(search).get('response');

  const [thank, setThank] = useState(false);

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Simranjeet Singh | Contact Me";
    setThank(resp);
    setTimeout(() => setThank(false), 5000);
    bounce();
  }, []);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 40,
  };

  return (
    <>
      {thank &&
        <div style={{ position: "absolute", zIndex: 999999, top: "10px", left: "50%", transform: "translate(-50%, 0%)" }}>
          <div style={{
            padding: "2rem 4rem", backgroundColor: "#222", 
            textAlign: "center", borderRadius: "1rem",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          }}>
            <h3 style={{ color: "#23ffde", fontSize: "2rem" }}>
              Thank you !
            </h3>
            <p style={{ color: "#fff", fontSize: "1rem" }}>We will soon get in touch 😃.</p>
          </div>
        </div>
      }
      <div className="container home-page" style={{ zoom: "95%" }}>
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Simranjeet,web developer."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              C
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              o
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              n
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              a
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              c
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              t&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              m
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              e
            </span>
          </h1>
          <p>
            I am interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to contact me using below form either.
          </p>

          <div className="contact">
            <form
              className="form"
              action="https://formsubmit.co/b6a7714e1b4daa06870a4ac3e0718e01"
              method="POST"
              autoComplete="off"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://smrnjeet222.github.io/contact?response=true" />
              <input type="text" name="_honey" style={{ "display": "none" }} />
              <motion.input
                id="name"
                type="text"
                name="name"
                placeholder="Name *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.1 }}
              />
              &nbsp;
              <motion.input
                id="email"
                type="email"
                name="email"
                placeholder="Email *"
                required={true}
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.2 }}
              />
              <br />
              <motion.input
                id="sbj"
                type="text"
                name="subject"
                placeholder="Subject (optional)"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.4 }}
              />
              <br />
              <motion.textarea
                id="msg"
                type="text"
                name="message"
                placeholder="Message *"
                required={true}
                cols="50"
                rows="10"
                initial={{ y: "120vh" }}
                animate={{ y: 0 }}
                layout
                transition={{ ...spring, delay: 0.7 }}
              ></motion.textarea>
              <br />
              <motion.input
                id="sub-btn"
                type="submit"
                value="Send"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              />
            </form>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                color: "aliceblue",
                maxWidth: "60%",
                fontSize: "1em",
                margin: "5px 0 5px 2px",
                transform: "translateY(-40px)",
              }}
            >
              Or you can just mail me at ~&nbsp;
              <a
                href="mailto:smrnjeet222@gmail.com"
                style={{ color: "#23ffde", fontSize: "1.3em" }}
              >
                smrnjeet222@gmail.com
              </a>
            </motion.p>
          </div>
        </div>

        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>

      <motion.div
        className="mapouter"
        style={{ backgroundColor: "#e2e2e2" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        <div className="gmap_canvas">
          <iframe
            title="gmap_canvas"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d633470.5169291274!2d76.89342349926463!3d28.705698137363992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013a47a1803d%3A0xedfb8cc477815e2f!2sRohini%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1597408824240!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            scrolling="no"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}
