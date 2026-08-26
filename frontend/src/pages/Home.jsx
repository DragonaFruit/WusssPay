import { useState } from "react";

import ProductCard from "../components/home/ProductCard";
import nasigoreng from "../assets/nasigoreng.jpg";
import cilok from "../assets/cilok.jpg";
import mieayam from "../assets/mieayam.jpg";
import lemontea from "../assets/lemontea.jpg";
import matcha from "../assets/matcha.jpg";
import esteler from "../assets/esteler.jpg";



export default function Home() {

    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([])

    const [jumlah, setJumlah] = useState({
    nasiGoreng: 0,
    cilok: 0,
    mieAyam: 0,
    lemonTea: 0,
    matcha: 0,
    esTeler: 0
});


    const ubahJumlah = (nama, nilai) => {
    setJumlah((prev) => ({
        ...prev,
        [nama]: Math.max(0, prev[nama] + nilai)
    }));
  };

  const addToCart = () => {
    const produkDipilih = [
        {
            nama: "Nasi Goreng",
            harga: 25000,
            jumlah: jumlah.nasiGoreng
        },
        {
            nama: "Cilok",
            harga: 15000,
            jumlah: jumlah.cilok
        },
        {
            nama: "Mie Ayam",
            harga: 23000,
            jumlah: jumlah.mieAyam
        },
        {
            nama: "lemon tea",
            harga: 7000,
            jumlah: jumlah.lemonTea
        },
        {
            nama: "Matcha",
            harga: 10000,
            jumlah: jumlah.matcha
        },
        {
            nama: "EsTeler",
            harga: 10000,
            jumlah: jumlah.esTeler
        }
    ];

    const yangDipilih = produkDipilih.filter(
        (produk) => produk.jumlah > 0
    );

    setCart(yangDipilih);

    console.log(yangDipilih)
};

    return (
        <div className="font-poppins">
            <h1 className="text-3xl py-5 font-bold flex justify-center">Pilih Menu Anda</h1>

            {/*    LIST           MENU     */}
            <h2 className="text-2xl font-extrabold px-3">MAKANAN</h2>
            
                
            <ProductCard 
                nama={"Nasi Goreng"}
                harga={25000}
                gambar={nasigoreng}
                jumlah={jumlah.nasiGoreng}
                onTambah={() => ubahJumlah("nasiGoreng", 1)}
                onKurang={() => ubahJumlah("nasiGoreng", -1)}
                />

            <ProductCard
                nama={"Cilok"}
                harga={15000}
                gambar={cilok}
                jumlah={jumlah.cilok}
                onTambah={() => ubahJumlah("cilok", 1)}
                onKurang={() => ubahJumlah("cilok", -1)}
            />

            <ProductCard
                nama={"Mie Ayam"}
                harga={23000}
                gambar={mieayam}
                jumlah={jumlah.mieAyam}
                onTambah={() => ubahJumlah("mieAyam", 1)}
                onKurang={() => ubahJumlah("mieAyam", -1)}
            /> 

            <h2 className="text-2xl font-extrabold px-3">MINUMAN</h2>

            <ProductCard
                nama={"lemon tea"}
                harga={7000}
                gambar={lemontea}
                jumlah={jumlah.lemonTea}
                onTambah={() => ubahJumlah("lemonTea", 1)}
                onKurang={() => ubahJumlah("lemonTea", -1)}
            />
           
            <ProductCard
                nama={"Matcha"}
                harga={10000}
                gambar={matcha}
                jumlah={jumlah.matcha}
                onTambah={() => ubahJumlah("matcha", 1)}
                onKurang={() => ubahJumlah("matcha", -1)}
            />

            <ProductCard
                nama={"EsTeler"}
                harga={10000}
                gambar={esteler}
                jumlah={jumlah.esTeler}
                onTambah={() => ubahJumlah("esTeler", 1)}
                onKurang={() => ubahJumlah("esTeler", -1)}
            />

            

            
            <div className="justify-center items-center flex p-4 ">
            
                <button onClick={() => {
                  addToCart(); 
                  setIsOpen(true);
                  }} 
                  className="w-80 h-15 border-3 bg-[var(--color-second)] font-semibold text-white rounded-full">Masukkan keranjang</button>
            
            </div>

            
    {/* === Sistem Overlay ==== */}

      <div className={`fixed right-0 left-0 bottom-0 bg-[var(--color-third)] h-full transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <h2 className="text-2xl font-bold p-5">
          Keranjang
        </h2>

        {cart.map((produk) => (
          <div key={produk.nama} className="p-4">
            <p className="text-xl font-bold">
                {produk.nama}
            </p>

            <p>
              Rp {produk.harga.toLocaleString("id-ID")}
            </p>

            <p>
              jumlah: {produk.jumlah}
            </p>
          </div>      
        ))}
      </div>
        </div>
    );
}
