import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataId } from "../Api/Api";
import Detail from "./card-Detail";

const User = ()=>{
    const [userDetail,setUserDetail] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams()
    
    useEffect(()=>{
        getCharacterId()
    })
    const getCharacterId = async () => {
        setIsLoading(true);
        try {
          const  results  = await getDataId(id);
          setUserDetail(results);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      };
    return(
        <>
        <Detail data={userDetail} isLoading={isLoading}/>
        </>
    )
};
export default User

