import { FaHeart, FaRetweet, FaShoppingCart } from "react-icons/fa";

export default function FeaturedProducts() {
  const categories = [
    { label: "Top", value: "*" },
    { label: "Pines", value: "pin" },
    { label: "Llaveros", value: "llavero" },
    { label: "Personalizados", value: "personalizado" },
  ];
  const products = [
    {
      id: 1,
      name: "Pin de madera",
      price: 100,
      imageUrl: "/img/products/pin-madera.jpg",
      category: "pin",
    },
    {
      id: 2,
      name: "Pin de madera",
      price: 100,
      imageUrl: "/img/products/pin-madera.jpg",
      category: "pin",
    },
  ];
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 relative inline-block after:block after:h-1 after:w-20 after:bg-orange-400 after:mx-auto after:mt-2">
            Nuestros productos
          </h2>
        </div>

        <div className="flex justify-center mb-6">
          <ul className="flex flex-wrap gap-4 justify-center text-gray-700 font-medium">
            {categories.map((cat) => (
              <li key={cat.value} className="cursor-pointer hover:text-orange-400 transition">
                {cat.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`featured__item mix ${product.category}`}
            >
              <div className="relative h-64 bg-cover bg-center rounded-md overflow-hidden group"
                style={{ backgroundImage: `url(${product.imageUrl})` }}>
                <ul className="absolute bottom-[-60px] left-0 right-0 flex justify-center gap-3 transition-all duration-300 group-hover:bottom-5">
                  <li>
                    <a href="#" className="bg-white border border-gray-200 p-2 rounded-full hover:bg-orange-400 hover:text-white">
                      <FaHeart />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-white border border-gray-200 p-2 rounded-full hover:bg-orange-400 hover:text-white">
                      <FaRetweet />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="bg-white border border-gray-200 p-2 rounded-full hover:bg-orange-400 hover:text-white">
                      <FaShoppingCart />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center mt-4">
                <h6 className="text-md font-semibold text-gray-800">
                  <a href="#">{product.name}</a>
                </h6>
                <h5 className="text-orange-400 font-bold text-lg">${product.price.toFixed(2)}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}