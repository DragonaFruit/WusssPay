import ProductCard from "../components/home/ProductCard";
import nasigoreng from "../assets/nasigoreng.jpg";
import cilok from "../assets/cilok.jpg";
import mieayam from "../assets/mieayam.jpg";
import lemontea from "../assets/lemontea.jpg";

function Home() {
    return (
        <div className="font-poppins">
            <h1 className="text-3xl py-5 font-bold text-blue-500 flex justify-center">Pilih Menu Anda</h1>

            <h2 className="text-2xl font-bold px-3">MAKANAN</h2>
            
                 {/* List Makanan */}
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

            <h2 className="text-2xl font-bold px-3">MINUMAN</h2>

            <ProductCard
                nama={"lemon tea"}
                harga={7000}
                gambar={lemontea}
            />
           
            
            

            <button>Pesan Sekarang</button>
        </div>
    );
}

export default Home;    