
const Urgency = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Agora você tem <span className="text-purple-600">duas opções:</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">😴</div>
            <h3 className="text-2xl font-bold text-red-700 mb-6">Zona de Conforto</h3>
            <ul className="space-y-3 text-red-600">
              <li>❌ Ignorar tudo que você viu</li>
              <li>❌ Continuar com a bio antiga</li>
              <li>❌ Link lento e pouca venda</li>
              <li>❌ Escravo do Canva</li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-green-700 mb-6">Zona de Confronto</h3>
            <ul className="space-y-3 text-green-600">
              <li>✅ A Mudança Definitiva</li>
              <li>✅ Oportunidade de ser um dos primeiros</li>
              <li>✅ Se diferenciar do mercado</li>
              <li>✅ Design moderno e organizado</li>
              <li>✅ Vendas automáticas</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            É COM VOCÊ. <span className="text-purple-600">QUAL VOCÊ ESCOLHE?</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Urgency;
