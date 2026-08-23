import ProductCard from "../components/home/ProductCard";

function Home() {
    return (
        <div>
            <h1>Pilih Menu Anda</h1>

            <h2>MAKANAN</h2>
            <ProductCard />
            <ProductCard />
            <ProductCard />

            <h2>MINUMAN</h2>
            <ProductCard />
            <ProductCard />
            <ProductCard />

            <button>Pesan Sekarang</button>
        </div>
    );
}

export default Home;    