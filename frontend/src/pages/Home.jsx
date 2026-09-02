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
            jumlah: jumlah.nasiGoreng,
            gambar: nasigoreng
        },
        {
            nama: "Cilok",
            harga: 15000,
            jumlah: jumlah.cilok,
            gambar: cilok
        },
        {
            nama: "Mie Ayam",
            harga: 23000,
            jumlah: jumlah.mieAyam,
            gambar: mieayam
        },
        {
            nama: "lemon tea",
            harga: 7000,
            jumlah: jumlah.lemonTea,
            gambar: lemontea
        },
        {
            nama: "Matcha",
            harga: 10000,
            jumlah: jumlah.matcha,
            gambar: matcha
        },
        {
            nama: "EsTeler",
            harga: 10000,
            jumlah: jumlah.esTeler,
            gambar: esteler
        }
    ];

    const yangDipilih = produkDipilih.filter(
        (produk) => produk.jumlah > 0
    );

    setCart(yangDipilih);

    
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
                  className=
                  "w-80 h-15 border-3 bg-[var(--color-second)] font-semibold text-white rounded-full">Masukkan keranjang</button>
            
            </div>

            


            {/* === Sistem Overlay ==== */}
            <div className={`fixed inset-0 h-[100dvh] bg-slate-50 z-50 flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>

                {/* Header */}
                <div className="p-4 border-b border-gray-200 bg-white flex justify-between items-center shrink-0 shadow-sm">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Keranjang Pesanan</h2>
                        <p className="text-xs text-gray-500">{cart.length} Jenis Produk Dipilih</p>
                    </div>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 font-bold transition-colors cursor-pointer"
                        >
                            ✕
                    </button>
                </div>

                {/* Area Scroll Daftar Produk */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0 bg-slate-50">            
                    {cart.map((produk) => (
                    <div key={produk.nama} className="flex items-center gap-3 bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                        <img src={produk.gambar} alt={produk.nama} className="w-16 h-16 object-cover rounded-xl shrink-0" />

                        <div className="flex-1">
                            <p className="font-bold text-gray-800">{produk.nama}</p>
                            <p className="text-sm font-semibold text-rose-500">Rp {produk.harga.toLocaleString("id-ID")}</p>
                        </div>

                        <div className="bg-slate-100 px-3 py-1 rounded-lg text-sm font-bold text-gray-700">
                            x{produk.jumlah}
                        </div>
                    </div>      
                    ))}
                </div>

                {/* Box Bill Pembayaran (Solid Bottom) */}
                <div className="p-5 border-t border-gray-200 bg-white shrink-0 flex flex-col gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-3xl">
                    <div className="space-y-1 text-sm border-b border-gray-100 pb-3">
                        <div className="flex justify-between text-gray-500">
                            <span>Subtotal Pesanan</span>
                            <span>Rp {cart.reduce((total, p) => total + (p.harga * p.jumlah), 0).toLocaleString("id-ID")}</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                            <span>Biaya Layanan</span>
                            <span className="text-emerald-600 font-medium">Gratis</span>
                        </div>
                        <div className="flex justify-between items-center text-base font-extrabold text-gray-900 pt-2">
                            <span>Total Pembayaran</span>
                            <span className="text-xl text-rose-500">
                                Rp {cart.reduce((total, p) => total + (p.harga * p.jumlah), 0).toLocaleString("id-ID")}
                            </span>
                        </div>
                    </div>  
                </div>

                <button 
                    onClick={async () => {
                    if (cart.length === 0) return alert("Keranjang kamu masih kosong!");
                    try {
                        const response = await fetch('http://100.73.85.52:3000/pesan', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                            pesanan: cart,
                            totalHarga: cart.reduce((total, p) => total + (p.harga * p.jumlah), 0)
                        }) 
                    });
                        if (response.ok) alert("Pesanan berhasil dikirim!");
                        else alert("Gagal mengirim pesanan");
                        } catch (error) {
                        alert("Terjadi kesalahan koneksi ke server Backend.");
                    }
                    }}
                    className="w-full py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl text-center shadow-lg shadow-rose-200 active:scale-[0.98] transition-all"
                    >
                    Pesan Sekarang
                </button>
        </div>

    </div>
    );
}
