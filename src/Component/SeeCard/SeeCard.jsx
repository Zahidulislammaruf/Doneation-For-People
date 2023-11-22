import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { savedApplication } from "../../Utility/LocalStroage";

const SeeCard = () => {
    const seeCard = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const card = seeCard.find(card => card.id === idInt)
    const handleDonet = () => {
        savedApplication(idInt);
        toast(`Thank For Your ${card.price} Dollars`)

    }
    return (
        <div className="container mx-auto mt-14 ">
            <div className="">
                <img className=" w-full" src={card.pic} alt="" />
                <section  className=" absolute bg-[#0B0B0B80] -mt-[72px] p-3 container ">
                    <button onClick={handleDonet} style={{background:card.color_for_text}} className="btn text-white">Donate ${card.price}</button>
                </section >
                <div className="mb-8 p-4">
                <h1 className="text-[40px] font-bold mt-2">{card.title}</h1>
                <p className="text-[20px] mt-4">{card.description}</p>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default SeeCard;