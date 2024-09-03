import sound from "assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";
import DrinkCard from "components/Main/DrinkCard";
import DrinkMenu from "components/Main/DrinkMenu";
import "./Main.css";
import PizzaMenu from "components/Main/PizzaMenu";

const Main = () => {
  return (
    <main>
      <p>My HomePage</p>

      <audio id="audioPlayer" controls autoPlay>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <PizzaMenu />

      <DrinkMenu title="Notre Menu de Boissons">
        <DrinkCard
          title="Coca-Cola"
          image="https://media.istockphoto.com/id/1289738725/fr/photo/bouteille-en-plastique-de-coke-avec-la-conception-et-le-chapeau-rouges-d%C3%A9tiquette.jpg?s=1024x1024&w=is&k=20&c=HBWfROrGDTIgD6fuvTlUq6SrwWqIC35-gceDSJ8TTP8="
        >
          <p>Volume: 33cl</p>
          <p>Prix: 2,50 €</p>
        </DrinkCard>
        <DrinkCard
          title="Pepsi"
          image="https://media.istockphoto.com/id/185268840/fr/photo/bouteille-de-cola-sur-un-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=xdsxwb4bLjzuQbkT_XvVLyBZyW36GD97T1PCW0MZ4vg="
        >
          <p>Volume: 33cl</p>
          <p>Prix: 2,50 €</p>
        </DrinkCard>
        <DrinkCard
          title="Eau Minérale"
          image="https://media.istockphoto.com/id/1397515626/fr/photo/verre-deau-gazeuse-%C3%A0-boire-isol%C3%A9.jpg?s=1024x1024&w=is&k=20&c=iEjq6OL86Li4eDG5YGO59d1O3Ga1iMVc_Kj5oeIfAqk="
        >
          <p>Volume: 50cl</p>
          <p>Prix: 1,50 €</p>
        </DrinkCard>
      </DrinkMenu>
    </main>
  );
};

export default Main;
