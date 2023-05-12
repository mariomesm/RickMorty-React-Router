import CardPerson from "./cards-user"
const Cards = ({data,isLoading}) => {

  return (
    <>
      <div className="container-fluid d-flex flex-wrap">
        {data && !isLoading &&(
          <>
            {data.map((item) => {
              return <CardPerson key={item.id} data={item} />;
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
