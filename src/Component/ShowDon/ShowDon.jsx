
const ShowDon = ({value}) => {
    const {category,title,price,pic1,color_for_bg,color_for_cardbg,color_for_text} = value
    return (
        <div className="flex " >
            <div style={{background : color_for_cardbg}} className="card card-side w-[440px]  shadow-xl">
           <figure><img src={pic1} className="w-[200px]" alt="Movie"/></figure>
               <div className="">
    
                    <button style={{background:color_for_bg, color:color_for_text}} className="px-2 ml-2 mt-4" >{category}</button>
                   <h2  className="card-title  ml-2 mt-2">{title}</h2>
                   <h2 className="ml-2 mt-2" style={{color:color_for_text}}>${price}</h2>
                    <div className="card-actions justify-start ml-2 mt-3">
                    <button style={{background:color_for_text}} className="btn">View Details</button>
                     </div>
                 </div>
              </div>
        </div>
    );
};

export default ShowDon;