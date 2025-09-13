
import { UserPlus, Edit3, Share2, MousePointer } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Acesse a plataforma premium do CliqueeBiz",
      description: "Entre na nossa plataforma exclusiva com acesso total aos recursos"
    },
    {
      icon: Edit3,
      title: "2. Escolha o template que você gostar",
      description: "Dezenas de opções profissionais para todos os nichos e estilos"
    },
    {
      icon: MousePointer,
      title: "3. Preencha e adicione suas informações",
      description: "Customize tudo do seu jeito: cores, textos, links e ferramentas"
    },
    {
      icon: Share2,
      title: "4. Adicione o link do site na sua bio e pronto!",
      description: "Cole na bio do Instagram, TikTok, YouTube e em qualquer lugar"
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Esses são os <span className="text-purple-600">4 passos rápidos</span> para você usar o novo formato de bio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon size={32} className="text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
