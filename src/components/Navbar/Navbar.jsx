
export default function Navbar({ booking }) {
  console.log(booking)
  return (
    <div className="flex justify-between items-center px-4 md:px-24 border-b-2 border-[#BB2525] py-4">
      <div className="flex gap-2 items-center cursor-pointer">
        <img className="w-10" src="https://img.icons8.com/?size=256&id=DJxb8MnWdwZZ&format=png" alt="sdfsdf" />
        <h2 className="md:text-2xl font-semibold text-[#BB2525]">Hotel <span className="text-blue-600">Relax</span></h2>
      </div>
      <ul className="flex gap-4 items-center ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>
          <i className='bx bxs-cart-download text-2xl md:text-4xl text-[#BB2525] cursor-pointer relative'>
            <span className="absolute top-0 -right-1 rounded-full text-sm text-white bg-black w-4 h-4 flex items-center justify-center ">{booking.length}</span>
          </i>
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {
              booking.map(book => <div className="bg-[#BB2525] text-white px-4 py-2 my-2 items-center flex justify-between">
                <div>
                  <h2>{book.title}</h2>
                  <h2>price : {book.price}</h2>
                  <button className="bg-blue-700 px-4 py-2 rounded mt-2">Pay Book</button>
                </div>
                <div>
                  <img className="w-20 mx-auto" src={book.cover_img} alt="" />
                  <p>Room size : {book.room_size}</p>
                </div>
              </div>)
            }
          </div>
        </dialog>

        <button className="px-4 py-2 bg-[#BB2525] text-white rounded font-semibold">LogIn</button>
      </ul>
    </div>
  )
}
