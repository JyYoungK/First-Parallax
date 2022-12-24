import { motion } from "framer-motion";

const Thanks = () => {
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
          <span className="ml-1 hover:text-blue " onClick={() => openSite()}>
            https://wallpaperaccess.com/
          </span>
          . I inspire to become a better developer & designer. I am always open
          to new opportunities. In 2023, I want to make more fascinating
          websites. If you liked my work and want to connect with me, feel free
          to contact me.
        </div>
      </motion.div>
    </section>
  );
};

export default Thanks;
