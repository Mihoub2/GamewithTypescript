import "../styles/cards.css";

export interface ICardComponent {
  item: { id: number; stat: string; img: string };
  id: number;
  handleClick: (id: number) => void;
}

const Card: React.FunctionComponent<ICardComponent> = ({
  item,
  id,
  handleClick,
}) => {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <>
      <div className={"card" + itemClass} onClick={() => handleClick(id)}>
        <img src={item.img} alt="" />
      </div>
    </>
  );
};

export default Card;
