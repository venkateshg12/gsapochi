import { useEffect, useRef, useState } from "react";
import HamburgerMenu, { Logo } from "../constants";
import { navItems } from "../constants";
import gsap from "gsap";
const Navbar = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const colorOverlayRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);


    const toggleScreenLock = () => {
        setOpenNav((prev) => !prev);
    };

    useEffect(() => {
        document.body.style.overflow = openNav ? 'hidden' : '';
    }, [openNav]);

    useEffect(() => {
        if (openNav) {
            // Animate background color from top to bottom
            gsap.fromTo(colorOverlayRef.current,
                { height: 0 },
                {
                    height: "100vh",
                    duration: 0.5,
                    ease: "power2.out",
                    backgroundColor: "#9b2226"
                }
            );
        } else {
            // Animate background color away
            gsap.to(colorOverlayRef.current, {
                height: 0,
                duration: 0.5,
                ease: "power2.in",
                backgroundColor: "transparent",
                overwrite: "auto"
            });
        }
    }, [openNav]);

    useEffect(() => {
        const navLinks = navRef.current?.querySelectorAll(".nav-link");
        if (!navLinks) return;
        navLinks.forEach((link: Element) => {
            const underline = link.querySelector(".underline");

            gsap.set(underline, { scaleX: 0, transformOrigin: "left center" });
            link.addEventListener('mouseenter', () => {
                gsap.set(underline, { transformOrigin: "left center" });
                gsap.to(underline, {
                    scaleX: 1,
                    duration: 0.5,
                    ease: "power2.out",
                })
            })

            link.addEventListener('mouseleave', () => {
                gsap.set(underline, { transformOrigin: "right center" });
                gsap.to(underline, {
                    scaleX: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    transformOrigin: "right center",
                })
            })

            return () => {
                navLinks.forEach((link: Element) => {
                    link.addEventListener('mouseenter', () => { });
                    link.removeEventListener('mouseleave', () => { });
                })
            }
        })
    }, [])


    return (
        <div className={`relative ${openNav && "bg-[#9b2226]"} backdrop-blur-2xl fixed`}>
            <nav className={`w-full py-4 px-4 md:py-8 md:px-12 z-0 flex items-center  justify-between ${openNav && "border-2 border-b-white"} `}>
                <div>
                    <Logo />
                </div>
                <div ref={navRef} className="flex gap-4 text-[1.1rem] max-[990px]:hidden">
                    {
                        navItems.map((item, index) => (
                            <>
                                <a key={index} className={`nav-link font-neue-montreal ${index === 4 && 'ml-[17rem]'} cursor-pointer relative inline-block`}>
                                    {item}
                                    <span className="underline absolute bottom-0 left-0 h-0.5 w-full bg-black "></span>
                                </a>
                            </>
                        ))
                    }
                </div>
                <div className="min-[990px]:hidden">
                    <div onClick={toggleScreenLock}>
                        <HamburgerMenu className={`${openNav && 'bg-[#9b2226]'}`} />
                    </div>
                </div>
            </nav>
            {openNav && (
                <div ref={colorOverlayRef} className="flex flex-col  gap-3 pl-4 py-4 font-grotesk z-50 tracking-widest text-[4rem] font-bold text-white w-full h-screen">
                    {
                        navItems.map((item, index) => (
                            <a href="" key={index}>{item}</a>
                        ))
                    }
                </div>
            )}

        </div>
    )
}

export default Navbar;
