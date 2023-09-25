

export default function Hotel({ post ,handleBooking}) {
    const { cover_img, title, room_size, price, date } = post;
    return (
        <div className="bg-[#bb25255e] ">
            <img className="h-60 w-full" src={cover_img} alt={`${post.id} number room post Cover img`} />
            <div className="p-6">
                <p className="text-[12px] text-left">Post Date : {date}</p>
                <h2 className="text-3xl font-semibold my-2">{title}</h2>
                <h3 className="">Room size : {room_size}</h3>
                <h2 className=" ">Room Price : <span className="text-4xl text-[#BB2525]">{price}$</span> /month</h2>
                <button onClick={()=> handleBooking(post)} className="block w-full bg-[#BB2525] py-2 mt-4 font-bold text-white">Book Now</button>
            </div>
        </div>
    )
}
