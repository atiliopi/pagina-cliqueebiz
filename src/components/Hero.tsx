import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Chegou a plataforma de link na bio que vai muito{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                além do básico.
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Monte e publique sua bio editável em minutos, direto pelo navegador.{" "}
              <strong>Sem pagar Canva Pro. Sem depender de ninguém.</strong> Só
              clicar e usar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg text-center font-semibold text-sm border border-green-200">
                  ✅ Sem ser escravo do Canva
                </div>
                <div className="bg-blue-100 text-blue-800 px-4 py-3 rounded-lg text-center font-semibold text-sm border border-blue-200">
                  ⚡ Link online em minutos
                </div>
                <div className="bg-purple-100 text-purple-800 px-4 py-3 rounded-lg text-center font-semibold text-sm border border-purple-200">
                  🚀 Inovação é meu DNA
                </div>
              </div>
            </div>
          </div>

          {/* Imagem à direita ajustada */}
          <div className="flex justify-center lg:justify-center">
            <img
              src="/lovable-uploads/celularheader.png"
              alt="Celular Header"
              className="w-full max-w-xs sm:max-w-sm lg:w-[420px] h-auto rounded-2xl mx-auto"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
