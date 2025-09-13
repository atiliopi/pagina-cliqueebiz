const Guarantee = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      role: "Influenciadora Digital",
      content: "Cara, não acredito que perdi tanto tempo com Canva! Em 3 minutos estava tudo pronto. Ficou muito mais profissional que qualquer coisa que eu conseguia fazer antes.",
      rating: 5
    },
    {
      name: "Roberto Costa", 
      role: "Lojista Online",
      content: "Economizei R$ 40 por mês do Canva Pro e ainda ficou melhor! Meus clientes sempre elogiam como meu link fica organizado.",
      rating: 5
    },
    {
      name: "Ana Beatriz",
      role: "Coach de Carreira", 
      content: "Finalmente um link na bio que realmente representa meu trabalho. Super fácil de usar e o resultado é impecável!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Prestador de Serviços",
      content: "Meus clientes aumentaram 200% depois que mudei para o CliqueeBiz. A diferença é visível!",
      rating: 5
    },
    {
      name: "Juliana Mendes",
      role: "Consultora",
      content: "Nunca pensei que fosse tão fácil ter uma bio profissional. Recomendo para todos!",
      rating: 5
    },
    {
      name: "Pedro Santos",
      role: "Fotógrafo",
      content: "A qualidade dos templates é incrível. Meu portfolio nunca ficou tão bem organizado.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            🗣️ Veja o que nossos usuários estão falando:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
