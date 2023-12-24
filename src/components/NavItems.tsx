'use client'

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

export default function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null);

    const isAnyOpen = activeIndex !== null;

    // for esc button to operate
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null);
            }
        }
        document.addEventListener("keydown", handler);
        return () => {
            document.removeEventListener("keydown", handler);
        }
    }, []);


    // when we click outside the navitems should be closed
    const navRef = useRef<HTMLDivElement | null>(null);
    // hook
    useOnClickOutside(navRef, () => setActiveIndex(null));

    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {
                PRODUCT_CATEGORIES.map((category, i) => {
                    // which items in the navbar is currently open & which is not
                    const handleOpen = () => {
                        if (activeIndex === i) {
                            setActiveIndex(null);
                        } else {
                            setActiveIndex(i);
                        }
                    };

                    const isOpen = i === activeIndex;

                    return (
                        <NavItem key={i} category={category} handleOpen={handleOpen} isOpen={isOpen} isAnyOpen={isAnyOpen} />
                    )
                })
            }
        </div>
    )
}
