import { motion } from "framer-motion";

const Thanks = () => {
  return (
    <section id="thanks" className="pt-32 pb-16">
      {/* HEADING */}
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
          I hope you enjoyed the journey as much as I did. I inspire to become a
          better developer & designer. I am always open to new opportunities. In
          2023, I want to make more fascinating websites, stay tuned. If you
          liked my work, it's my pleasure if contact me.
        </div>
      </motion.div>

      {/* <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
            lectus.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div>
      </div> */}
    </section>
  );
};

export default Thanks;
