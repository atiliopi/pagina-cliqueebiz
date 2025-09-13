import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="precos" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Plano Básico */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">CliqueeBiz 1 Link</h3>
              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">R$ 19,99</div>
                <div className="text-lg text-gray-700 mb-4">por ano</div>
              </div>
              
              <div className="border-t border-b border-gray-100 py-6 mb-8">
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1 Biolink personalizada</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-6 text-xs md:text-sm font-bold mb-6 w-full" asChild>
                <a href="https://pay.cakto.com.br/3dasp7j_563769" target="_blank" rel="noopener noreferrer">
                  🔥 QUERO MEU ACESSO
                </a>
              </Button>
              
              <div className="flex items-center justify-center text-gray-600">
                <Shield size={20} className="mr-2" />
                <span>Compra segura PIX e cartão</span>
              </div>
            </div>
          </div>

          {/* Plano Profissional */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute -top-4 left-0 right-0 text-center">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">MAIS POPULAR</span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">CliqueeBiz 5 Links</h3>
              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">R$ 49,99</div>
                <div className="text-lg text-gray-700 mb-4">por ano</div>
              </div>
              
              <div className="border-t border-b border-gray-100 py-6 mb-8">
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>5 Biolinks</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-6 text-xs md:text-sm font-bold mb-6 w-full" asChild>
                <a href="https://pay.cakto.com.br/3ek6hna" target="_blank" rel="noopener noreferrer">
                  ⭐ COMEÇAR AGORA
                </a>
              </Button>
              
              <div className="flex items-center justify-center text-gray-600">
                <Shield size={20} className="mr-2" />
                <span>Compra segura PIX e cartão</span>
              </div>
            </div>
          </div>

          {/* Plano Avançado */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">CliqueeBiz 15 Links</h3>
              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">R$ 99,99</div>
                <div className="text-lg text-gray-700 mb-4">por ano</div>
              </div>
              
              <div className="border-t border-b border-gray-100 py-6 mb-8">
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>15 Biolinks</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-6 text-sm md:text-base font-bold mb-6 w-full" asChild>
                <a href="https://pay.cakto.com.br/y84oxzu" target="_blank" rel="noopener noreferrer">
                  🚀 COMEÇAR AGORA
                </a>
              </Button>
              
              <div className="flex items-center justify-center text-gray-600">
                <Shield size={20} className="mr-2" />
                <span>Compra segura PIX e cartão</span>
              </div>
            </div>
          </div>

          {/* Plano Empresas */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">CliqueeBiz 30 Links</h3>
              <div className="mb-8">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">R$ 199,99</div>
                <div className="text-lg text-gray-300 mb-4">Vitalício</div>
              </div>
              
              <div className="border-t border-b border-gray-700 py-6 mb-8">
                <div className="flex items-center text-left text-gray-300 mb-4">
                  <svg className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>30 Biolinks</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-purple-400 to-purple-300 hover:from-purple-500 hover:to-purple-400 text-gray-900 px-4 py-6 text-sm md:text-base font-bold mb-6 w-full" asChild>
                <a href="https://pay.cakto.com.br/9sx4f4h_563783" target="_blank" rel="noopener noreferrer">
                  � ACESSO VITALÍCIO
                </a>
              </Button>
              
              <div className="flex items-center justify-center text-gray-400">
                <Shield size={20} className="mr-2" />
                <span>Suporte prioritário</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
