import Sac from "@/components/Sac";

const HowToBuy = () => {
  return (
    <section className="container mx-auto  flex flex-col md:h-full md:flex md:flex-row gap-10 ">
      <div className="w-full md:w-[20%] ">
        <Sac />
      </div>
      <di className="w-full md:flex-grow bg-red-300">
        <h1>Parceiros</h1>
      </di>
    </section>
  );
};

export default HowToBuy;
