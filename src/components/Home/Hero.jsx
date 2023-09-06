const Hero = () => {
  return (
    <section className="pt- flex items-center flex-col">
      <div className="flex flex-col items-center justify-center md:pt-24 pt-8">
        <h1 className="pb-4  px-5 leading-9  text-3xl  sm:text-4xl  font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r  from-neutral-600 to-neutral-500">
          One Persons Trash Is Another Persons Treasure
        </h1>
        <h1 className="pb-4 pt-4 px-5 leading-9  text-3xl font-kurdish sm:text-4xl text-to font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r  from-neutral-600 to-neutral-500">
          زبڵی کەسێک , گەنجینەی کەسێکی ترە
        </h1>
        <p className="mt-4 px-4  xl:text-lg text-center font-normal leading-6 text-neutral-500 ">
          You protect the environment by giving what you no longer need
        </p>
        <p className="mt-4 px-4 pb-4 lg:text-lg text-center font-normal leading-8 text-neutral-500 ">
          تۆ ژینگە دەپارێزیت بە پێدانی ئەوەی کە چیتر پێویستت پێی نییە
        </p>
      </div>
    </section>
  );
};

export default Hero;
