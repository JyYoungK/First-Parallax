import { motion } from "framer-motion";
import LinkedinLogo from "../assets/logo/LinkedinLogo.png";
import GithubLogo from "../assets/logo/GithubLogo.webp";
import GmailLogo from "../assets/logo/GmailLogo.webp";
import React, { useState } from "react";

const Thanks = () => {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText("johnnykang1204@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  function openSite() {
    window.open("https://wallpaperaccess.com/", "_blank");
  }

  return (
    <section className="mt-96 pb-16">
      <motion.div
        className="md:w-3/5 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="font-playfair font-extrabold text-4xl mb-5 text-white">
          Thank you. The journey ends here.
        </div>
        <div className={`h-0.5 w-full bg-gradient-starblue`} />
        <div className="mt-10 text-2xl text-white">
          I hope you enjoyed the journey as much as I did. Images are from
          <span
            className="ml-1 hover:text-[#2CBCE9]"
            onClick={() => openSite()}
          >
            https://wallpaperaccess.com/
          </span>
          . I inspire to become a better developer & designer. I am always open
          to new opportunities. In 2023, I want to make more fascinating
          websites. If you liked my work and want to connect with me, feel free
          to contact me.
        </div>
      </motion.div>
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          href="https://www.linkedin.com/in/johnny-kang-ab689368/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="md:w-10 md:h-10 w-8 h-8"
            alt="linkedin-link"
            src={LinkedinLogo}
          />
        </a>
        <a href="https://github.com/JyYoungK" target="_blank" rel="noreferrer">
          <img
            className="md:w-10 md:h-10 w-8 h-8"
            alt="github-link"
            src={GithubLogo}
          />
        </a>
        <a onClick={handleClick}>
          <img
            className="md:w-10 md:h-10 w-8 h-8"
            alt="email-link"
            src={GmailLogo}
          />
          {copied && (
            <span className="bg-green-500 p-2 rounded-lg text-white">
              {" "}
              Email Copied!
            </span>
          )}
        </a>
      </div>
    </section>
  );
};

export default Thanks;
