import { useEffect, useState } from "react";
import { getFeaturedProducts } from "../services/api.tsx";
import { FaHeart, FaRetweet, FaShoppingCart } from "react-icons/fa";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getFeaturedProducts();
        console.log("Productos obtenidos:", result);
        const formatted = result
          .map((item: any) => item.productos)
          .filter((p: any) => p !== null);
        setProducts(formatted);
      } catch (err) {
        console.error("Error al obtener productos destacados:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 relative inline-block after:block after:h-1 after:w-20 after:bg-orange-400 after:mx-auto after:mt-2">
            Nuestros productos destacados
          </h2>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Cargando productos...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="featured__item">
                <div
                  className="relative h-64 bg-cover bg-center rounded-md overflow-hidden group"
                  style={{ backgroundImage: `url(${product.imagen_path})` }}
                >
                  <ul className="absolute bottom-[-60px] left-0 right-0 flex justify-center gap-3 transition-all duration-300 group-hover:bottom-5">
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center bg-white text-black border border-gray-200 rounded-full transition-all hover:bg-orange-400 hover:text-white"
                      >
                        <FaHeart className="text-[16px]" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center bg-white text-black border border-gray-200 rounded-full transition-all hover:bg-orange-400 hover:text-white"
                      >
                        <FaRetweet className="text-[16px]" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center bg-white text-black border border-gray-200 rounded-full transition-all hover:bg-orange-400 hover:text-white"
                      >
                        <FaShoppingCart className="text-[16px]" />
                      </a>
                    </li>
                  </ul>


                </div>
                <div className="text-center mt-4">
                  <h6 className="text-md font-semibold text-gray-800">
                    {product.nombre}
                  </h6>
                  <h5 className="text-orange-400 font-bold text-lg">
                    ${product.precio.toFixed(2)}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
