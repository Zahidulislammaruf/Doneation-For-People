import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../../Utility/LocalStroage";
import ShowDon from "../ShowDon/ShowDon";

const Donation = () => {
    
    const carditem = useLoaderData();
  const [saveDon, setsaveDon] = useState([])
  const [datalength, SetDataLength] = useState(4)
  useEffect(()=>{
  const StoreCardIds = getStoredApplication()  
  if(carditem.length > 0){
   
    const StoreCard = [];
    for(const id of StoreCardIds ){
        const job =carditem.find(job=> job.id === id);
        if(job){
            StoreCard.push(job)
        }
    }
    setsaveDon(StoreCard) ;
  }
},[])

    return (
        <div className=" container mx-auto p-4">
          <div className="mt-12 ">
         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 item-center gap-y-8 m-0 md:ml-48 lg:ml-20 ">
            {
              saveDon.slice(0,datalength).map(value=><ShowDon key={value.id} value={value}></ShowDon>)  
            }
            </div>
            <div className={datalength >= saveDon.length && 'hidden'}>
              <div className={datalength === saveDon.length && 'hidden'}>
                <div className="text-center mt-12">
              <button onClick={()=> SetDataLength(saveDon.length)} className="btn text-white bg-[#009444]">See All</button>
              </div>
              </div>
            </div> 
            </div>

        </div>
    );
};

export default Donation;