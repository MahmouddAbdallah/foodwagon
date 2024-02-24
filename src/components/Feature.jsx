import axios from "axios";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdOutlineStar } from "react-icons/md";
const Feature = () => {
    const [featureItem, setfeatureItem] = useState([]);
    const fetchfeatureItems = async () => {
        try {
            const { data } = await axios.get('../Data/feature.json');
            setfeatureItem(data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchfeatureItems()
    }, [])
    return (
        <section className='px-5 md:px-10 lg:px-44 py-10'>
            <div className="text-center">
                <h4 className="head my-10">
                    Featured Restaurants
                </h4>
            </div>
            <div className="grid grid-cols-12 gap-5">
                {
                    featureItem.map(item => (
                        <div
                            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 "
                            key={item.id}>
                            <div className="space-y-5">
                                <div>
                                    <img className="rounded-lg w-full" src={item.img} alt="" />
                                </div>
                                <div className="flex gap-3">
                                    <div>
                                        <img className="w-12 h-12 " src={item.res.img} alt="" />
                                    </div>
                                    <div >
                                        <h6 className="font-semibold">{item.res.name}</h6>
                                        <div className="inline-flex items-center">
                                            <MdOutlineStar size={23} className="fill-yellow-400" />
                                            <span className="text-sm text-yellow-400">
                                                {item.res.rating}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center mt-10">
                <button className="inline-flex items-center py-2 px-5 bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-sm shadow-amber-300 rounded-md font-semibold">
                    View All
                    <MdKeyboardArrowRight size={22} />
                </button>
            </div>
        </section>
    )
}

export default Feature