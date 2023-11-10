import Image from "../../assets/background.webp";
const Home = () => {
  return (
    <main>
      <section>
        <img src={Image} alt="Wedding image" />
        <div className="uppercase text-2xl font-semibold tracking-[0.3rem] w-fit mt-10 mx-auto text-center">
          <p>Bari & Adrien</p>
          <p>1er Décembre 2023</p>
        </div>
      </section>
      <footer className="mt-8 flex flex-col justify-center items-center text-center pb-20">
        <div className="mt-10">
          <small className="block">Pour toutes questions :</small>
          <small className="block">raquelhugo.wedding@gmail.com</small>
          <small className="block">06 64 87 17 15</small>
        </div>
        <div className="mt-10">
          <small>© Bari & Adrien 2023</small>
        </div>
      </footer>
    </main>
  );
};
export default Home;
