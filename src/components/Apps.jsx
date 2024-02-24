
const Apps = () => {
    const items = [
        {
            name: 'Daily Discounts',
            img: "../icons/daily_discount.png"
        },
        {
            name: "Live Tracking",
            img: "../icons/location.png"
        },
        {
            name: "Quick Delivery",
            img: "../icons/quick_delivery.png"
        }
    ]
    return (
        <section className="overflow-hidden">
            <div className="px-5 md:px-10 lg:px-44 py-20 bg-[#FEEFD0]">
                <div className=" grid grid-cols-12 gap-10 bg-white px-5 py-10 rounded-xl ">
                    {
                        items.map(item =>
                            <div className="col-span-12 sm:col-span-6 md:col-span-4 flex justify-center" key={item.name}>
                                <div className="inline-flex flex-col sm:flex-row items-center gap-3 lg:px-10">
                                    <img src={item.img} alt="" />
                                    <h4 className="head">{item.name}</h4>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className=" px-5 md:px-10 xl:px-44 py-96 xl:py-48 bg-gradient-to-r from-amber-500 to-amber-400 relative flex justify-center -z-20">
                <div className=" absolute bottom-10 left-10 md:left-32 xl:-bottom-56 xl:left-44">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 xl:col-span-6">
                            <img src="../images/app.png" className="md:w-[75%] w-[80%]" alt="" />
                        </div>
                        <div className="col-span-12 xl:col-span-6 mt-10 xl:-ml-20">
                            <div className="space-y-3">
                                <h3 className="text-2xl md:text-3xl font-bold xl:text-transparent bg-clip-text bg-gradient-to-l xl:from-amber-300 xl:to-amber-500 ">Install the app</h3>
                                <p className="text-sm text-black/80 ">
                                    It&#39;s never been easier to order food.
                                    <br />
                                    Look for the finest
                                    discounts and you&#39;ll be lost in a world of delectable food.
                                </p>
                            </div>
                            <div className="flex gap-2 mt-5">
                                <a href="">
                                    <img src="../images/app-store.svg" alt="" />
                                </a>
                                <a href="">
                                    <img src="../images/google-play.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bg-[#FEEFD0] w-[170vw] h-[170vh] rounded-b-full bottom-44 sm:bottom-32 xl:bottom-12 ml-32 -z-10" />
            </div>
        </section>
    )
}

export default Apps