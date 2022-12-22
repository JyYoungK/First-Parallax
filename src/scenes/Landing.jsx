import Birds from "../assets/birds.png";

const Landing = () => {
  return (
    <section id="home" className="md:flex md:items-end md:h-full py-10">
      <div className="ml-60 basis-3/5 z-10 mt-16 md:mt-96 flex justify-end md:order-2">
        <img
          alt="birds"
          className="w-full max-w-[400px] md:max-w-[300px]"
          src={Birds}
        />
      </div>
    </section>
  );
};

export default Landing;
