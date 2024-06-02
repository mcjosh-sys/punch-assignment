import logo from '@assets/logo.svg'
import { MenuIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'
const Navbar = () => {
    return (
        <Sheet>
            <nav className="bg-primary rounded-lg max-w-[1300px] h-[60px] hidden sl:flex items-center justify-between mt-9 mx-[70px] flex-1">
                <a href="/">
                    <img src={logo} width={112} height={27.35} className='ml-6' alt="logo" />
                </a>
                <ul className='flex gap-[30px] text-white text-sm'>
                    <li><a href="#">Find Work</a></li>
                    <li><a href="#">Find Talent</a></li>
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className='flex items-center'>
                    <a href='#' className='text-white text-sm mr-3'>
                        Log In
                    </a>
                    <a href='#' className='bg-white rounded-lg px-5 py-3 mx-2 hover:bg-secondary transition-colors duration-300'>
                        Join Now
                    </a>
                </div>
            </nav>
            {/* Mobile nav */}
            <nav className="bg-primary rounded-lg max-w-[1300px] h-[60px] flex sl:hidden items-center justify-between mt-9 mx-4 flex-1 shadow-xl">
                <a href="/">
                    <img src={logo} width={112} height={27.35} className='ml-6' alt="logo" />
                </a>
                <SheetTrigger>
                    <MenuIcon className='text-white mr-4' />
                </SheetTrigger>
            </nav>
            <SheetContent>
                <div className='h-full w-full flex flex-col mt-20 gap-6'>
                    <ul className='flex flex-col text-xl font-semibold gap-2 items-end w-full [&_li:hover]:[text-shadow:_0_2px_2px_rgb(0_0_0/_40%)]'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Find Work</a></li>
                        <li><a href="#">Find Talent</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <Separator className='bg-gray-400' />
                    <div className='flex justify-center gap-8 px-4'>
                        <a className='relative group border-2 py-2 px-5 bg-slate-500 text-white rounded-lg overflow-hidden' href="#">
                            <span className='absolute inset-0 z-0 bg-white translate-y-12 transition duration-300 ease-in-out group-hover:translate-y-0' />
                            <span className='relative group-hover:text-black'>Log In</span>
                        </a>
                        <a href="#" className='relative group bg-secondary flex items-center border-2 py-2 px-5 rounded-lg overflow-hidden'>
                            <span className='absolute inset-0 z-0 bg-white translate-y-12 transition-transform duration-300 ease-in-out group-hover:translate-y-0' />
                            <span className='relative'>Join Now</span>
                        </a>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Navbar