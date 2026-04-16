"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SiteMenuOverlay from "@/components/site/SiteMenuOverlay";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open to prevent background scrolling
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? "bg-primary/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
        <div className="mx-auto w-[95vw] flex items-center justify-between h-16 md:h-24 px-6 md:px-10">
          
          {/* Logo Alignment: Left on All screens */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl font-black tracking-wider text-white uppercase">
                ESPRON
              </span>
            </Link>
          </div>

          {/* Right: Menu Toggle Button */}
          <div className="flex justify-end items-center">
            <button
              onClick={() => setOpen(true)}
              className="text-white transition-colors text-xs tracking-[0.2em] font-medium uppercase border border-white/20 rounded-full px-5 py-2.5 flex items-center gap-3 hover:bg-white/10 backdrop-blur-sm group"
            >
              <div className="w-4 flex flex-col gap-1">
                <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                <span className="w-full h-[1.5px] bg-white rounded-full"></span>
              </div>
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text="Menu">Menu</span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <SiteMenuOverlay
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
