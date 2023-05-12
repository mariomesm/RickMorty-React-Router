import "../styles/oneCard.scss"
const Detail = ({data}) => {
    //console.log(data)
  return (
    <>
      <div className="card card-one">
            <img src={data.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p className="card-text">{data.status}</p>
                <p className="card-text">{data.species}</p>
                <p className="card-text">{data.gender}</p>
            </div>
        </div>
    </>
  );
};

export default Detail;
