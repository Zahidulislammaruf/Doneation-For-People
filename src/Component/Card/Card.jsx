import { Link } from "react-router-dom";

const Card = ({value}) => {
const {id,title,pic,category,color_for_bg,color_for_cardbg,color_for_text} = value

return (
  <div > 
        <Link to={`/see/${id}`}>
          <div  style={{background:color_for_cardbg}} className="card card-compact w-[288px] h-[260px] bg-base-100 shadow-xl">
          <figure><img src={pic} alt="Shoes" /></figure>
          <div className=" pl-2">
          <button style={{background:color_for_bg, color:color_for_text}} className=" border px-2 mt-2">{category}</button>
          <p style={{color:color_for_text }} className="text-[20px] font-semibold pb-2 ">{title}</p>
    
         </div>
         </div>  
        </Link>
        </div>
    );
};

export default Card;