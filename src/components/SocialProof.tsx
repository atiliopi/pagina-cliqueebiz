const SocialProof = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Construa sua presença online e encante seu público — tudo com um <span className="text-purple-600">único link inteligente.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja na prática a bio de pessoas que <strong>venderam 10x mais</strong> depois de usar o novo formato de bio 👇
          </p>
        </div>

        {/* 4 frames diferentes, um ao lado do outro */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "https://meulink.lat/Template27",
            "https://meulink.lat/template20",
            "https://meulink.lat/template15",
            "https://meulink.lat/template28"
          ].map((url, idx) => (
            <iframe
              key={idx}
              src={url}
              title={`Exemplo de Bio ${idx + 1}`}
              className="w-full h-[700px] rounded-xl border shadow-lg"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
