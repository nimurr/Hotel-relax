

export default function Slider() {
    return (
        <div className="md:w-12/12 mx-auto md:h-[90vh] ">
            <div className="carousel w-12/12 md:h-[90vh] mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="./img/slider1.avif" className="w-full" />
                    <div className="absolute transform -translate-y-1/2 left-0 right-0 top-1/2 h-full">
                        <div className="w-full h-full bg-[#3663a777] flex items-center justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <div>
                                <h2 className="text-center font-bold md:text-8xl text-4xl text-white">22% offf</h2>
                                <h2 className="text-xl text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, adipisci!</h2>
                            </div>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="./img/slider2.avif" className="w-full" />
                    <div className="absolute transform -translate-y-1/2 left-0 right-0 top-1/2 h-full">
                        <div className="w-full h-full bg-[#3663a777] flex items-center justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <div>
                                <h2 className="text-center font-bold md:text-8xl text-4xl text-white">25% offf</h2>
                                <h2 className="text-xl text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, adipisci!</h2>
                            </div>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="./img/slider3.avif" className="w-full" />
                    <div className="absolute transform -translate-y-1/2 left-0 right-0 top-1/2 h-full">
                        <div className="w-full h-full bg-[#3663a777] flex items-center justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <div>
                                <h2 className="text-center font-bold md:text-8xl text-4xl text-white">18% offf</h2>
                                <h2 className="text-xl text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, adipisci!</h2>
                            </div>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="./img/slider4.avif" className="w-full " />
                    <div className="absolute transform -translate-y-1/2 left-0 right-0 top-1/2 h-full">
                        <div className="w-full h-full bg-[#3663a777] flex items-center justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <div>
                                <h2 className="text-center font-bold md:text-8xl text-4xl text-white">10% offf</h2>
                                <h2 className="text-xl text-white ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, adipisci!</h2>
                            </div>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
