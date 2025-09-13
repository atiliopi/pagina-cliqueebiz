import { ArrowRight, Shield, Zap, ArrowUpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Pronto para transformar seu Link na Bio?
        </h2>
        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 text-xl font-bold group"
          onClick={() => {
            document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver Planos e Preços
          <ArrowUpCircle size={24} className="ml-2 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;
