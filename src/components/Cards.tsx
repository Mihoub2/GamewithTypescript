import { useState } from "react";
import Card from "./Card";
import "../styles/cards.css";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 6, img: "/img/reacteur.png", stat: "" },
      { id: 6, img: "/img/reacteur.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);
  const [result, setResult] = useState(false);

  function check(current: number) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      if (
        items[0].stat !== "" &&
        items[1].stat !== "" &&
        items[2].stat !== "" &&
        items[3].stat !== "" &&
        items[4].stat !== "" &&
        items[5].stat !== "" &&
        items[6].stat !== "" &&
        items[7].stat !== "" &&
        items[8].stat !== "" &&
        items[9].stat !== "" &&
        items[10].stat !== "" &&
        items[11].stat !== "" &&
        items[12].stat !== "" &&
        items[13].stat !== "" &&
        items[14].stat !== "" &&
        items[15].stat !== ""
      ) {
        setResult(true);
      }
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 500);
    }
  }

  function handleClick(id: number) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="cardContainer">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
      {result === true ? <p>Nice</p> : <p>Raté</p>}
    </div>
  );
}
export default Cards;
