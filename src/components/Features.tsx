import { BarChart3, Target } from "lucide-react";

const Features = () => {
  return (
    <section id="recursos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              <span className="text-purple-600">Estatísticas detalhadas</span> do seu link + Pixels
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              + funções e ferramentas exclusivas que não existem no Canva, para você complementar ainda mais o seu link.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Analytics Completos</h3>
                  <p className="text-gray-600">Acompanhe cliques, visitantes e conversões em tempo real</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Pixels de Remarketing</h3>
                  <p className="text-gray-600">Configure Facebook Pixel, Google Analytics e mais</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/estatisticas.png"
              alt="Estatísticas"
              className="rounded-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
