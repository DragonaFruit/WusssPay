import React, { use, useState } from "react";

import ProductCard from "../components/home/ProductCard";
import nasigoreng from "../assets/nasigoreng.jpg";
import cilok from "../assets/cilok.jpg";
import mieayam from "../assets/mieayam.jpg";
import lemontea from "../assets/lemontea.jpg";
import matcha from "../assets/matcha.jpg";
import esteler from "../assets/esteler.jpg";



export default function Home() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="font-poppins">
            <h1 className="text-3xl py-5 font-bold flex justify-center">Pilih Menu Anda</h1>

                                 {/*    LIST           MENU     */}
            <h2 className="text-2xl font-extrabold px-3">MAKANAN</h2>
            
                
            <ProductCard 
                nama={"Nasi Goreng"}
                harga={25000}
                gambar={nasigoreng}
            />

            <ProductCard
                nama={"Cilok"}
                harga={15000}
                gambar={cilok}
            />

            <ProductCard
                nama={"Mie Ayam"}
                harga={23000}
                gambar={mieayam}
            />

            <h2 className="text-2xl font-extrabold px-3">MINUMAN</h2>

            <ProductCard
                nama={"lemon tea"}
                harga={7000}
                gambar={lemontea}
            />
           
            <ProductCard
                nama={"Matcha"}
                harga={10000}
                gambar={matcha}
            />

            <ProductCard
                nama={"EsTeler"}
                harga={10000}
                gambar={esteler}
            />
            <div className="justify-center items-center flex p-4 ">
                <button id="" onClick={() => setIsOpen(true)} className=" w-80 h-15 border-3 bg-[var(--color-second)] font-semibold text-white rounded-full">Pesan Sekarang</button>
            </div>

            
    {/* === Sistem Overlay ==== */}

      <div className={`fixed right-0 left-0 bottom-0 bg-[var(--color-third)] h-full transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <h3>wdwd</h3>
      </div>

        </div>
    );
}
