import { Logo } from "../constants";
import { navItems } from "../constants";
const Navbar = () => {
    return (
        <div>
            <nav className="w-full py-8 px-12 flex items-center justify-between bg-[#f8edeb]">
                <div>
                    <Logo />
                </div>
                <div className="flex gap-4 text-[1.1rem]">
                    {
                        navItems.map((item, index) => (
                            <a key={index} className={`font-neue-montreal ${index === 4 && 'pl-[17rem]'} cursor-pointer`}>{item}</a>
                        ))
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
