import { FaMotorcycle, FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Hero = () => {
    return (
        <section className='px-5 md:px-10 lg:px-44 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 overflow-hidden'>
            <div className='flex flex-col-reverse xl:grid gap-10 grid-cols-12 pt-32 pb-20 lg:pb-32'>
                <div className=' xl:col-span-7 space-y-5 lg:space-y-8'>
                    <div className="space-y-5 flex flex-col items-center lg:items-start">
                        <h1 className="text-white text-5xl sm:text-6xl font-semibold lg:font-bold">Are you starving?</h1>
                        <p className="text-sm lg:text-base text-black/50 font-semibold">Within a few clicks, find meals that are accessible near you</p>
                    </div>
                    <div className="w-full bg-white rounded-md">
                        <div className="shadow pt-4 pb-3 px-5">
                            <button className="inline-flex items-center px-3 py-2 gap-2 bg-redColor/20 rounded-md">
                                <FaMotorcycle className="fill-redColor" size={20} />
                                <span className="font-bold text-redColor">
                                    Delivery
                                </span>
                            </button>
                        </div>
                        <div className="flex items-center gap-3 py-4 px-5">
                            <div className="flex-1 flex items-center relative">
                                <div className="absolute left-1">
                                    <IoLocationSharp className='text-black fill-g_red-f' size={20} />
                                </div>
                                <input
                                    placeholder="Enter Your Address"
                                    type="text"
                                    className="w-full border px-6 py-1 border-black/20 rounded-md text-black placeholder:text-black/20 outline-none" />
                            </div>
                            <button className="inline-flex items-center gap-2 rounded-md p-3 bg-gradient-to-r from-g_red-f to-g_red-t text-white">
                                <FaSearch className="fill-white" size={15} />
                                <span className="font-bold text-white text-sm">
                                    Find Food
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' xl:col-span-5 flex justify-center px-5 lg:px-10 relative'>
                    <div className="z-10">
                        <img className="brightness-110 hover:brightness-125 duration-500 hover:-translate-y-3" src="./images/hero.png" alt="" />
                    </div>
                    <div className="absolute w-96 h-96 lg:w-11/12 lg:h-11/12 -left-6 -bottom-3 lg:-left-8 lg:-bottom-3 rounded-full bg-gradient-to-r from-black/10 to-black/50  blur-md lg:blur-lg" />
                </div>
            </div>
        </section>
    )
}

export default Hero