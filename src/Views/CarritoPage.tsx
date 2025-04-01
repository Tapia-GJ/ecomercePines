import { Link } from 'react-router-dom';
import { useState } from 'react';

const CartSection: React.FC = () => {
  const [items, setItems] = useState([
    {
      name: 'Pin Gato Sad oki',
      image: '/cart/gatosad.jpg',
      price: 55,
      quantity: 1
    },
    {
      name: 'Pin Pato uwu',
      image: '/cart/duck.jpg',
      price: 39,
      quantity: 1
    },
    {
      name: 'LLaveros Twins Batman',
      image: '/cart/batman.jpg',
      price: 69,
      quantity: 1
    }
  ]);

  const updateQuantity = (index: number, delta: number) => {
    setItems(prev =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Banner encabezado */}
      <section className="bg-gray-800 py-10 text-white text-center">
        <h1 className="text-4xl font-bold font-quicksand">🛍️ Tu Carrito</h1>
        <p className="text-md mt-2">Revisa tus artículos antes de completar tu compra</p>
      </section>

      <section className="py-16 bg-[#F6F6F6] min-h-screen">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto mb-10">
            <table className="min-w-full bg-white rounded-lg shadow-md divide-y divide-[#E5E5E5]">
              <thead>
                <tr className="bg-[#E5E5E5] text-[#14213D]">
                  <th className="py-3 px-4 text-left">Producto</th>
                  <th className="py-3 px-4">Precio</th>
                  <th className="py-3 px-4">Cantidad</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-800">
                {items.map((item, i) => (
                  <tr key={i} className="hover:bg-[#E5E5E5] transition">
                    <td className="flex items-center gap-4 py-4 px-4">
                      <img src={item.image} alt="producto" className="w-20 h-20 object-cover rounded-lg shadow" />
                      <h5 className="font-semibold">{item.name}</h5>
                    </td>
                    <td className="text-center">${item.price.toFixed(2)}</td>
                    <td className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(i, -1)}
                          className="bg-[#FCA311] text-white font-bold px-3 rounded shadow"
                        >
                          -
                        </button>
                        <div className="min-w-[2.5rem] px-2 py-1 text-center bg-white border border-[#E5E5E5] rounded font-semibold">
                          {item.quantity}
                        </div>
                        <button
                          type="button"
                          onClick={() => updateQuantity(i, 1)}
                          className="bg-[#FCA311] text-white font-bold px-3 rounded shadow"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center font-medium">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() => removeItem(i)}
                        className="text-red-500 hover:text-red-700 text-xl"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Botones */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-4">
            <Link
              to="/"
              className="bg-[#14213D] hover:bg-[#0A0908] text-white font-medium py-2 px-4 rounded shadow"
            >
              ⬅️ Regresar al menú principal
            </Link>
            <button className="bg-[#FCA311] hover:bg-yellow-500 text-white font-medium py-2 px-6 rounded shadow">
              🔄 Actualizar Carrito
            </button>
          </div>

          {/* Cupon y Total */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Cupon */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h5 className="text-lg font-bold text-[#14213D] mb-4">🎁 Código de descuento</h5>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Introducir cupón"
                  className="flex-1 border border-[#E5E5E5] px-4 py-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-[#FCA311] hover:bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Aplicar cupón
                </button>
              </form>
            </div>

            {/* Total */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h5 className="text-lg font-bold text-[#14213D] mb-4">🧾 Total del carrito</h5>
              <ul className="mb-4 text-gray-700">
                <li className="flex justify-between border-b py-2">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </li>
                <li className="flex justify-between font-bold text-lg py-2">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </li>
              </ul>
              <Link
                to="/compra"
                className="block w-full text-center bg-[#14213D] hover:bg-[#0A0908] text-white py-3 rounded font-semibold shadow"
              >
                Proceder a pago
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartSection;