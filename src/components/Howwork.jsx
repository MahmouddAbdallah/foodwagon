
const Howwork = () => {
    const items = [
        {
            img: "../icons/locationdot.png",
            title: "Select location",
            desc: 'Choose the location where your food will be delivered.'
        },
        {
            img: "../icons/notification.png",
            title: "Choose order",
            desc: 'Check over hundreds of menus to pick your favorite food.'
        },
        {
            img: "../icons/payment.png",
            title: "Pay advanced",
            desc: 'it"s quick, safe, and simple. Select several methods of payment.'
        },
        {
            img: "../icons/enjoy.png",
            title: "Enjoy meals",
            desc: 'Food is made and delivered directly to your home.'
        },

    ]
    return (
        <section className="px-5 md:px-10 lg:px-44 py-20">
            <div className="text-center mb-20">
                <h4 className="head">
                    How does it work
                </h4>
            </div>
            <div className="grid grid-cols-12 gap-10">
                {
                    items.map(item =>
                        <div key={item.img} className=" col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3">
                            <div className="flex flex-col items-center gap-6">
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="text-center px-">
                                    <h5 className="font-bold">{item.title}</h5>
                                    <p className=" text-sm text-black/50">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Howwork