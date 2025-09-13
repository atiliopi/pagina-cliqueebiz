import { CheckCircle, Star, Users, TrendingUp, Palette } from "lucide-react";

const Solution = () => {
  const benefits = [
    "Já é usado pelos grandes perfis",
    "Gere mais cliques e venda muito mais", 
    "Design ultra moderno, com total liberdade",
    "Pronto em apenas alguns segundos"
  ];

  const niches = [
    "Prestadores de serviços", "Infoprodutores", "Influencers", "Empresas",
    "Coaches", "Consultores", "Lojistas", "Freelancers", "Artistas", 
    "Músicos", "Fotógrafos", "Designers", "Advogados", "Médicos"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative text-white">
      <div className="absolute inset-0 bg-black/40 pointer-events-none rounded-none" style={{zIndex:1}}></div>
      <div className="container mx-auto px-4 relative" style={{zIndex:2}}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por esse motivo você precisa <span className="text-yellow-300">urgente</span> atualizar seu formato de bio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center border border-white border-opacity-20">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-purple-600" />
              </div>
              <p className="font-semibold text-lg">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/lovable-uploads/favicon.png"
                alt="Logo CliqueeBiz"
                className="w-16 h-16 rounded-lg mr-4 object-contain"
              />
              <span className="text-2xl font-bold"></span>
            </div>
            
            <p className="text-lg text-purple-100 leading-relaxed mb-6">
              Com o CliqueeBiz, você tem acesso a todos os templates em um só lugar, e sem precisar do Canva pra editar, é tudo simples e intuitivo pela plataforma e com direito a <strong>domínio próprio</strong>. Você também pode criar seus Links do zero!
            </p>
            
            <p className="text-lg text-purple-100 leading-relaxed">
              Além disso, na plataforma você tem acesso a dezenas de ferramentas para adicionar na sua bio, como <strong>botões, ícones de redes sociais, vídeo, áudio, arquivos, PDF, formulários, produtos, sliders, feed de redes sociais, linha do tempo e muito mais!</strong>
            </p>
          </div>

          <div className="relative">
            <img
              src="/lovable-uploads/biolink3.png"
              alt="Exemplo de Bio Moderna"
              className="rounded-2xl max-w-sm mx-auto w-full"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Ele é pra todo e qualquer nicho:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {niches.map((niche, index) => (
              <div key={index} className="flex items-center text-purple-100">
                <span className="text-green-300 mr-3">✅</span>
                <span>{niche}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <span className="text-green-300 mr-3">✅</span>
            <span className="text-purple-100 font-bold">+ Templates novos toda semana</span>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Perfeito para…</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <Users size={24} className="text-white" />
                </div>
                <span className="text-lg font-semibold">Prestadores de serviços</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <span className="text-lg font-semibold">Infoprodutores</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Star size={24} className="text-white" />
                </div>
                <span className="text-lg font-semibold">Influencers</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <Palette size={24} className="text-white" />
                </div>
                <span className="text-lg font-semibold">Empresas</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                  <Users size={24} className="text-white" />
                </div>
                <span className="text-lg font-semibold">Agências</span>
              </div>
            </div>
          </div>
          <p className="text-center text-purple-100 mt-6 text-lg">
            ... que queiram aumentar sua autoridade, serem mais reconhecidos, captarem mais clientes e <strong>faturarem mais através do Instagram.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
