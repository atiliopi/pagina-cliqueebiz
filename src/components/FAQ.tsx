import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "🤔 Realmente funciona sem o Canva?",
      answer: "Sim! Tudo é editado direto na nossa plataforma. Você não precisa do Canva, Photoshop ou qualquer outro programa. É tudo aqui mesmo, no navegador."
    },
    {
      question: "💰 É pagamento único mesmo? Sem pegadinha?",
      answer: "Temos planos anuais a partir de R$ 19,99 e também um plano vitalício por R$ 199,99. Sem mensalidade surpresa no cartão depois!"
    },
    {
      question: "📱 Funciona no celular?",
      answer: "Perfeitamente! Tanto para editar quanto para visualizar. Seus visitantes vão ter uma experiência incrível em qualquer dispositivo."
    },
    {
      question: "🎨 Quantos templates vem?",
      answer: "Mais de 50 templates profissionais, e sempre adicionamos novos. Todos 100% editáveis e prontos para usar."
    },
    {
      question: "🔗 Como fica meu link?",
      answer: "Você ganha um link limpo e profissional, tipo: cliqueebiz.com/seunome. Nada de links enormes e confusos."
    },
    {
      question: "⚡ Em quanto tempo fica pronto?",
      answer: "Sério? Em menos de 5 minutos você já está com tudo funcionando. O pessoal demora mais escolhendo o template do que configurando! 😄"
    },
    {
      question: "🛡️ E se eu não gostar?",
      answer: "7 dias de garantia total. Não gostou por qualquer motivo? Manda um email e devolvemos 100% do seu dinheiro. Sem pergunta, sem enrolação."
    },
    {
      question: "📊 Consigo ver as estatísticas?",
      answer: "Claro! Você vê quantas pessoas clicaram em cada link, de onde vieram, horários de pico... tudo de forma simples e visual."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🤷‍♀️ Dúvidas? <span className="text-purple-600">A gente responde!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            As perguntas mais comuns (e as respostas bem diretas):
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUp size={24} className="text-purple-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="p-6 bg-purple-50 border-l-4 border-purple-400 rounded-b-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              🗨️ Ainda tem dúvida?
            </h3>
            <p className="text-gray-600 mb-6">
              Nosso suporte é 100% via WhatsApp. Fale com a gente, respondemos rapidinho e sem enrolação!
            </p>
            {/* <a
              href="https://wa.me/+5591985134037"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-transform"
            >
              <span>💬 Falar com o Suporte no WhatsApp</span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
