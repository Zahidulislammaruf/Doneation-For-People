
const Banner = ({sakib}) => {
    const handleSakib = e => {
     sakib(e)
    }
    return (
        <div  className="container mx-auto ">
            <div className="flex flex-col justify-center items-center mt-[145px]">
                <h2 className="text-[48px] font-semibold ">I Grow By Helping People In Need</h2>
                <div className="mt-[40px] mb-[210px]">
                    <form onSubmit={handleSakib}>
                    <input name="name" type="text" className="border border-[ #DEDEDE;] w-[340px] h-[50px] rounded-lg text-black p-4" placeholder="Search" />
                    <input  type="submit" className="btn bg-[#FF444A] text-white" value="Submit" />
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;