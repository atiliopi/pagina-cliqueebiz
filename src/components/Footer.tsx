import { MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/lovable-uploads/logo.png"
              alt="Logo MeuLink"
              className="w-14 h-14 object-contain"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Mail size={20} className="text-purple-400" />
              <span>Email de suporte: contato@cliquee.biz</span>
            </div>
            
            <div className="flex justify-center">
              {/* <a 
                href="https://wa.me/19996586312" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
              >
                <MessageCircle size={20} />
                <span>Suporte WhatsApp</span>
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 CliqueeBiz. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
