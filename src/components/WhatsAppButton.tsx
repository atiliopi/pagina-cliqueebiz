import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "5598999038602"; // Formato internacional sem caracteres especiais
  const message = encodeURIComponent("Olá! Vim pelo site e gostaria de saber mais sobre o CliqueeBiz.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2"
      aria-label="Contato via WhatsApp"
    >
      <Phone className="w-6 h-6" />
      <span className="hidden md:inline">Fale conosco</span>
    </a>
  );
};

export default WhatsAppButton;