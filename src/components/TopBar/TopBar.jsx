import './TopBar.css'
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { SlSocialInstagram } from "react-icons/sl";

export default function TopBar() {
    return(
        <div className="bg-zinc-900 text-gray-300 py-2 px-4 hidden xl:block">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4 mb-4 md:mb-0">
                    <div className="w-full flex flex-col md:flex-row items-center gap-4">
                        <a href="#" className="flex items-center gap-1 lg:gap-2 hover:text-amber-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <IoLocationSharp size={20} className="text-amber-500"/>
                            Melbourne, Australia
                        </a>
                        <a href="mailto:quote@coloringco.com.au" className="flex items-center gap-1 lg:gap-2 hover:text-amber-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <MdEmail size={20} className="text-amber-500"/>
                            quote@coloringco.com.au
                        </a>
                        <div className="flex flex-row items-center gap-2">
                            <a href="tel:0413709050" className="flex items-center gap-1 lg:gap-2 hover:text-amber-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                <BiSolidPhoneCall size={20} className="text-amber-500"/>
                                0413709050
                            </a>
                            <a href="tel:+61402728444" className="flex items-center gap-1 lg:gap-2 hover:text-amber-500 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                <BiSolidPhoneCall size={20} className="text-amber-500"/>
                                +61402728444
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 lg:gap-4">
                    <a href="https://www.instagram.com/_coloringco/" target="_blank" rel="noopener noreferrer"
                        className="social-icon w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r from-amber-500 to-amber-600 hover:border-transparent hover:text-white transition-all duration-500 ease-out hover:shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1">
                        <SlSocialInstagram className="w-4 h-4"/>
                    </a>
                </div>
            </div>
        </div>
    )
}
