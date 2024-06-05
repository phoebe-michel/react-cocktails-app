const Hero = () => {
  return (
    <section className="hero container-xl mx-auto pt-16">
      <div className="pt-12 lg:pt-40 pb-5 md:pb-14 w-full flex flex-col justify-center items-center text-center space-y-5">
        {/* Heading Text */}
        <div className="">
          <h1 className="hero-heading text-3xl md:text-4xl lg:text-5xl xl:text-7xl px-4 mb-2 md:mb-4 font-extrabold">
            Sip, Code, Conquer <br />
          </h1>
          <h2 className="sub-heading mx-auto sm:text-xl md:text-2xl text-zinc-400 md:w-[500px] px-10">
            A Fusion of Artistry and Technology to Craft Your Perfect Drink
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
