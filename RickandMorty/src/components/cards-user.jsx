import { Link } from "react-router-dom";
import "../styles/cards.scss"
const CardPerson = ({ data }) => {
  return (
    <>
      <div className="card">
        <img src={data?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <Link to={`/${data.id}`}>
            <button type="button" className="btn btn-primary btn-show">
              mostrar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default CardPerson;
