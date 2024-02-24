import logo from '../assets/Logo.svg'
const Navbar = () => {
    return (
        <nav>
            <div className="px-5 py-3 shadow-sm md:px-10 lg:px-44 flex items-center justify-between">
                <div className='w-44'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='hidden xl:inline-flex gap-2 text-sm whitespace-nowrap'>
                    <span className='font-semibold'>Deliver to:</span>
                    <span>
                        <img src="./icons/location.svg" alt="" />
                    </span>
                    <span>Current Location</span>
                    <span className='font-semibold'>Mohammadpur Bus Stand, Dhaka</span>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='inline-flex gap-2'>
                        <img src="./icons/search.svg" alt="" />
                        <span className='font-semibold'>
                            Search Food
                        </span>
                    </div>
                    <button className='inline-flex items-center gap-2 shadow shadow-gradient_yellow-from/50 px-4 py-2 rounded-md'>
                        <img src="./icons/user.svg" alt="" />
                        <span className='font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gradient_yellow-from to-gradient_yellow-to '>
                            Login
                        </span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar