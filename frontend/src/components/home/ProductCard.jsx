import { useState } from "react";

function ProductCard({ nama, harga, gambar }) {
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
      <img src={gambar} alt={nama} className="w-30 rounded-4xl px-3 py-3" />

      {/* List menu */}
      <div className="flex flex-col justify-center">
        <p className="text-xl font-bold py-1 ">{nama}</p>
        <p className="font-bold">Rp {harga.toLocaleString("id-ID")}</p>
      </div>

      <div className="flex items-center justify-center px-5">
        <button
          onClick={kurang}
          className="w-8 h-8 text-xl
                rounded-full border-2 border-black items-center justify-center flex leading-none "
        >
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>  
        </button>
        <p id="menu" className="p-1 text-center">{jumlah}</p>
        <button
          onClick={tambah}
          className="w-8 h-8 text-xl items-center
                rounded-full border-2 border-black justify-center flex leading-none "
        >
          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
        </button>
      </div>

    </div>
  );
}

export default ProductCard;
