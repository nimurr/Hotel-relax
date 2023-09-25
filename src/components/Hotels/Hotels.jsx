import { useEffect, useState } from 'react'
import Hotel from '../Hotel/Hotel';



export default function Hotels({handleBooking}) {
    const [hotel, setHotel] = useState([]);
    useEffect(() => {
        fetch('hotel.json')
            .then(res => res.json())
            .then(data => setHotel(data))
    }, [])


    return (
        <div className='my-10'>
            <h2 className='text-center mt-10 mb-5 text-4xl font-semibold text-[#BB2525]'>Available Room Packages</h2>
            <span className="w-32 h-[2px] bg-[#BB2525] block mx-auto mb-10"></span>

            <div className='w-10/12 mx-auto grid md:grid-cols-3 gap-4'>
                {
                    hotel.map(post => <Hotel key={post.id} post={post} handleBooking={handleBooking}></Hotel>)
                }
            </div>
        </div>
    )
}
