const ProductDetails: React.FC = () => {
  return (
    <div className="bg-[#F6F6F6] min-h-screen">

      {/* Producto */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Imagen principal */}
          <div className="flex flex-col items-center">
            <img src="/product/1.jpg" alt="Michi Guerra" className="w-full max-w-md rounded-xl shadow-md" />
            <div className="flex gap-2 mt-4">
              <img src="/product/1.jpg" className="w-16 h-16 object-cover rounded-md cursor-pointer border border-[#E5E5E5]" />
              <img src="/product/1.jpg" className="w-16 h-16 object-cover rounded-md cursor-pointer border border-[#E5E5E5]" />
            </div>
          </div>

          {/* Detalles */}
          <div>
            <h3 className="text-2xl font-bold text-[#14213D] mb-2">Michi Guerra</h3>
            <div className="text-2xl font-bold text-[#FCA311] mb-4">$75.00</div>
            <p className="text-[#0A0908] mb-4">Pin metálico de alta calidad, ideal para mochilas, ropa o coleccionismo. Hecho a mano con resina brillante y detalles únicos.</p>

            <div className="flex items-center gap-4 mb-6">
              <label className="text-[#0A0908]">Cantidad:</label>
              <input type="number" defaultValue={1} className="w-16 text-center border border-[#E5E5E5] rounded-md p-2 bg-white" />
            </div>

            <button className="bg-[#FCA311] hover:bg-[#e6950e] text-white font-semibold px-6 py-3 rounded-md transition-all">
              Añadir al carrito
            </button>

            <ul className="mt-6 space-y-2 text-sm text-[#0A0908]">
              <li><b>Disponibilidad:</b> En stock</li>
              <li><b>Peso:</b> 0.2 kg</li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-[#0A0908] font-semibold">Compartir en:</span>
              <div className="flex gap-2 text-[#14213D]">
                <a href="#" className="hover:text-[#FCA311]">Facebook</a>
                <a href="#" className="hover:text-[#FCA311]">Twitter</a>
                <a href="#" className="hover:text-[#FCA311]">Instagram</a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de descripción */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-[#14213D]">Descripción</h4>
          </div>
          <p className="text-[#0A0908] leading-relaxed">
            Este pin ha sido diseñado para los amantes del anime que desean expresar su estilo en cada detalle. Fabricado con los mejores materiales, su acabado brillante y duradero lo convierten en el complemento ideal. Puedes elegir entre diferentes diseños o solicitar uno totalmente personalizado.
          </p>
        </div>

      </section>


    </div>
  );
};

export default ProductDetails;
