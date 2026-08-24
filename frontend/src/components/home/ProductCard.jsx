import nasigoreng from "../../assets/nasigoreng.jpg";
import { useState } from "react";


function ProductCard() {
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
        <div className="flex item-center">
            <img src={nasigoreng} alt="nasigoreng" className="w-30 rounded-4xl px-3 py-3" />
            
            {/* List menu */}
            <div className="flex flex-col">
            <p className="text-1xl font-bold py-5">Nasi Goreng</p>
            <p className="">Rp 25.000</p>
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