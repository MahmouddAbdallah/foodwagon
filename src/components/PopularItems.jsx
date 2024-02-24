import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const PopularItems = () => {
    const [popularItem, setPopularItem] = useState([]);
    const sliderRef = useRef();
    const fetchPopularItems = async () => {
        try {
            const { data } = await axios.get('../Data/popular.json');
            setPopularItem(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchPopularItems()
    }, [])

    const slideLeft = () => {
        const slider = sliderRef.current;
        slider.scrollLeft += 295
    }
    const slideRight = () => {
        const slider = sliderRef.current;
        slider.scrollLeft -= 295
    }
    return (
        <section className="px-5 md:px-10 lg:px-44 pt-10">
            <div className="text-center mb-10">
                <h4 className="head">
                    Popular items
                </h4>
            </div>
            <div className="relative flex items-center">
                <button onClick={slideRight} className="absolute -left-3 lg:-left-14 bg-amber-400 text-white p-1 lg:p-3 rounded-full">
                    <MdKeyboardArrowLeft size={22} />
                </button>
                <div ref={sliderRef} className="flex gap-5 overflow-hidden scroll-smooth">
                    {popularItem?.map((item) =>
                        <div key={item.id} className="space-y-3">
                            <div className="w-[275px] h-[275px]">
                                <img src={item.img} className="w-full h-full object-cover rounded-xl" alt="" />
                            </div>
                            <div className='space-y-1'>
                                <h5 className="font-semibold">{item.title}</h5>
                                <div className="flex gap-2 items-center text-amber-500">
                                    <IoLocationSharp size={18} />
                                    <span>
                                        {item.location}
                                    </span>
                                </div>
                                <span className="font-bold">$ {item.price}</span>
                            </div>
                            <button className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-t from-g_red-f to-g_red-t">
                                Order Now
                            </button>
                        </div>
                    )}
                </div>
                <button onClick={slideLeft} className="absolute -right-3 lg:-right-14 bg-amber-400 text-white p-1 lg:p-3 rounded-full">
                    <MdKeyboardArrowRight size={22} />
                </button>
            </div>
        </section>
    )
}

export default PopularItems