const Hero = () => {
  return (
    <section className="hero container-xl mx-auto pt-16">
      <div className="py-16 w-full flex flex-col justify-center items-center text-center space-y-5">
        {/* Heading Text */}
        <div className="">
          <h1 className="hero-heading text-4xl lg:text-7xl px-4 mb-4 font-extrabold">
            Sip, Code, Conquer <br />
          </h1>
          <h2 className="sub-heading mx-auto text-2xl text-zinc-400 w-[550px]">
            A Fusion of Artistry and Technology to Craft Your Perfect Drink
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
