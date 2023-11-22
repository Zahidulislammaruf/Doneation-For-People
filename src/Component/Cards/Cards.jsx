
import Card from "../Card/Card";

const Cards = ({match,donCard}) => {
  
    
    
    

    return (
        <div  className=" container mx-auto pl-16 lg:pl-12 pd:ml-6 mb-12">
           
           {
            match.length === 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-y-6">
            {
                donCard.map(value=><Card key={value.id} value={value}></Card>)
            }
           </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-y-6">
            {
                match.map(value=><Card key={value.id} value={value}></Card>)
            }
           </div>
            )
           }
           
        </div>
    );
};

export default Cards;