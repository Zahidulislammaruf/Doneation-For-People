import Banner from "../Banner/Banner";
import Cards from "../Cards/Cards";
import { useEffect, useState } from "react";

const Home = () => {
  const [donCard,setDoncard] = useState([]);
  const [match,setMatch] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setDoncard(data))
    },[])
    
    const sakib = e =>{
       
       e.preventDefault();
        
     const sValue = e.target.name.value
     const matchvalue = donCard.filter(matched=>matched.category == sValue)
     if(matchvalue.length > 0 ){
      setMatch(matchvalue)
     }
    }
    return (
        <div>
          <Banner sakib={sakib}></Banner>
          <Cards match={match} donCard={donCard}></Cards> 
        </div>
    );
};

export default Home;