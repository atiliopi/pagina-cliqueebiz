import { AlertTriangle, X, DollarSign, Clock, TrendingDown } from "lucide-react";

const PainPoints = () => {
  const problems = [
    {
      icon: X,
      title: "O Canva não foi feito pra isso",
      description: "O Canva é ótimo pra design estático, mas criar um link na bio funcional nele é tipo tentar usar uma colher pra cortar bife. Ele não foi feito pra interatividade real, nem pra ser navegado como um mini site."
    },
    {
      icon: DollarSign,
      title: "Precisa do Canva PRO pra links clicáveis",
      description: "Sim! Quer deixar botões com links? Vai ter que pagar. A versão grátis limita as funcionalidades interativas, e sem isso, sua bio é só um cartaz bonito, mas inútil."
    },
    {
      icon: Clock,
      title: "É chato de editar e atualizar",
      description: "Tem que abrir o Canva, achar o design, esperar carregar, editar, baixar/exportar, copiar link… um ritual de sofrimento pra qualquer alteração simples. Já a nossa plataforma faz isso em segundos."
    },
    {
      icon: TrendingDown,
      title: "Conversão ruim e não responsivo de verdade",
      description: "Templates do Canva podem até parecer bonitos, mas não são otimizados pra celular, carregam devagar, e perdem feio pra páginas reais em termos de cliques, carregamento e experiência do usuário."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Alert Block */}
        <div className="flex justify-center mb-16">
          <div className="rounded-2xl shadow-md p-8 w-full max-w-3xl" style={{ background: '#303438' }}>
            <div className="text-center">
              <div className="text-6xl mb-6">⚠️</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seu instagram está travado? Ninguém chama no direct? <span className="text-red-400">Ninguém clica nos links da bio?</span>
              </h2>
              <p className="text-xl text-white max-w-2xl mx-auto">
                Isso acontece porque o <strong>instagram mudou…</strong><br/>
                E quem não atualiza <span className="text-red-400 font-bold">fica pra trás</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Se você ainda usa o formato antigo na sua bio ou ainda usa o Canva pra isso...
          </h3>
          <div className="text-4xl font-bold text-red-600 mb-4">Pare imediatamente!</div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border-l-4 border-red-400 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <problem.icon size={24} className="text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bio Example */}
        <div className="flex justify-center">
          <img
            src="/lovable-uploads/biosemcanva.png"
            alt="Exemplo de Bio sem Canva"
            className="rounded-2xl shadow-lg max-w-xs w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
