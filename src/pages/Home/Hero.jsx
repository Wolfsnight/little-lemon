import lemon from "@/assets/lemon.jpg";

import ButtonLink from "@/common/ButtonLink.jsx";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse gap-8 pb-16 lg:flex-row lg:px-16 lg:py-12">
      <div className="flex flex-col items-center gap-4 lg:gap-12 lg:px-12">
        <h1 className="text-6xl text-bold">Little Lemon</h1>

        <p className="text-center px-4 pb-12">
          Visit Little Lemon – your cozy spot with a Mediterranean touch! Enjoy
          homemade specialties, fresh ingredients, and aromatic coffee in a
          relaxed atmosphere. Perfect for food lovers and coffee enthusiasts!
        </p>

        <ButtonLink
          label="Reserve a Table"
          href="/reservation"
        />
      </div>

      <img
        src={lemon}
        alt=""
        className="w-full h-48 object-cover object-button
          lg:h-full lg:rounded-2xl "
      />
    </section>
  );
};

export default Hero;
