import Image1 from "../../assets/Maries-Illustres.webp";
import Image2 from "../../assets/fleure.webp";
import Image3 from "../../assets/shabat.webp";

const Program = () => {
  return (
    <main>
      <section className="w-11/12 md:w-2/3 mx-auto mt-32 md:mt-20 flex flex-col gap-10 md:gap-x-20 md:gap-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="flex gap-4 md:justify-end items-center">
            <img className="w-[112px]" src={Image1} alt="Marie Illustre" />
            <p className="uppercase text-3xl w-[150px]">Mariage Civil</p>
          </div>
          <div className="flex flex-col justify-center">
            <p>26 Octobre 2023 à 16h suivi d'un cocktail</p>
            <p>Mairie du 16ème arrondissement </p>
            <p>Adresse : 71 Av. Henri Martin, 75016 Paris</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="flex gap-4 md:justify-end items-center">
            <p className="uppercase text-3xl w-[150px]">Houppa & Réception</p>
            <img className="w-[112px]" src={Image2} alt="Fleur" />
          </div>
          <div className="flex flex-col justify-center">
            <p>26 Octobre 2023 à 16h suivi d'un cocktail</p>
            <p>Mairie du 16ème arrondissement </p>
            <p>Adresse : 71 Av. Henri Martin, 75016 Paris</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
          <div className="flex gap-4 md:justify-end items-center">
            <img className="w-[76px]" src={Image3} alt="Shabbat" />
            <p className="uppercase text-3xl w-[190px]">Le Shabbat</p>
          </div>
          <div className="flex flex-col justify-center">
            <p>26 Octobre 2023 à 16h suivi d'un cocktail</p>
            <p>Mairie du 16ème arrondissement </p>
            <p>Adresse : 71 Av. Henri Martin, 75016 Paris</p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Program;
