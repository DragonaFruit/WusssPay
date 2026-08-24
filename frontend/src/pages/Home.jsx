import ProductCard from "../components/home/ProductCard";

function Home() {
    return (
        <div className="font-poppins">
            <h1 className="text-3xl py-5 font-bold text-blue-500 flex justify-center">Pilih Menu Anda</h1>

            <h2 className="text-2xl font-bold px-3">MAKANAN</h2>
            <ProductCard />
            
           
            <h2>MINUMAN</h2>
            
            

            <button>Pesan Sekarang</button>
        </div>
    );
}

export default Home;    