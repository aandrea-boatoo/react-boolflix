import { useGlobalContext } from "../contexts/GlobalContext";

// import Cat from "../components/Cat";
// import Card from "../components/Card";
// import Carousel from "../components/Carousel";
export default function HomePage() {
  // const [isActive, setIsActive] = useState(0);
  const { ingredientList } = useGlobalContext();

  // const pet = {
  //   name: "Blanco",
  //   image: "/img/pets/blanco.jpg",
  // };
  // function esegui(index) {
  //   setIsActive(index);
  // }
  // const catsArray = [
  //   {
  //     name: "Blanco",
  //     image: "/img/pets/blanco.jpg",
  //   },
  //   {
  //     name: "Fritz",
  //     image: "/img/pets/fritz.jpg",
  //   },
  //   {
  //     name: "Fuffy",
  //     image: "/img/pets/fuffy.jpg",
  //   },
  // ];
  return (
    <>
      <h1>Home page</h1>
      <ul>
        {ingredientList.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.title}</li>
        ))}
      </ul>
      {/*  <section>
        <h2>Cats</h2>
      
        <Carousel onSlide={esegui}>
          {catsArray.map((pet, index) => (
            <div
              className={`carousel-item ${isActive === index ? "active" : ""}`}
              key={index}
            >
              <Cat name={pet.name} image={pet.image} />
            </div>
          ))}
        </Carousel>
        <Carousel onSlide={esegui}>
          {catsArray.map((pet, index) => (
            <div
              className={`carousel-item ${isActive === index ? "active" : ""}`}
              key={index}
            >
              <Card title={pet.name} image={pet.image} />
            </div>
          ))}
        </Carousel>
      </section>*/}
      {/* <section>
        <h3>Cats</h3>
        <Cat name={pet.name} image={pet.image} />
       
        <Cat {...pet} />
        <Cat {...pet}>
          <div>La storia di questo gatto</div>
        </Cat>
        <Cat name={pet.name} image={pet.image}>
          <p>La storia di questo gatto iin un</p>
        </Cat>
      </section> */}
    </>
  );
}
