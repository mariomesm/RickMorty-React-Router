import {getData} from "../Api/Api";
import Cards from "../components/cards"
import { useState, useEffect } from "react";

const ShowCards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchId, setSearchId] = useState([]);
  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = async () => {
    setIsLoading(true);
    try {
      const { results } = await getData();
      setSearchId(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container h-100 w-100">
        <Cards data={searchId} isLoading={isLoading} />
      </div>
    </>
  );
};

export default ShowCards;
