
import { useState } from "react";


function ProductCard({nama,harga,gambar}) {
    const [jumlah, setjumlah] = useState(0);

    const tambah = () => {
        setjumlah(jumlah + 1);
    };

    const kurang = () => {
        if (jumlah > 0) {
            setjumlah(jumlah - 1);
        }
    };
   
    return (    
        <div className="flex grid grid-cols-3 grid-rows-1 gap-1">
            <img 
            src={gambar} 
            alt={nama}
            className = "w-30 rounded-4xl px-3 py-3"
            />

            {/* List menu */}
            <div className="flex flex-col">
            <p className="text-xl font-bold py-5">{nama}</p>
            <p className="">Rp {harga.toLocaleString("id-ID")}</p>
            </div>

            <div className="flex items-center ">
                <button onClick={kurang} className="w-8 h-8 text-xl items-center
                rounded-full border-2 border-black justify-center flex ">-</button>
                <p className="p-2">{jumlah}</p>
                <button onClick={tambah} className="w-8 h-8 text-xl items-center
                rounded-full border-2 border-black justify-center flex ">+</button>
            </div> 

        </div>
    );
};


export default ProductCard;