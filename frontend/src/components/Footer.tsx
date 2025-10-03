
import { FaFacebook, FaLinkedin, FaWhatsapp, FaEnvelope, FaHeart } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne Logo et Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-4">
              DocMind
            </h2>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              Révolutionnez votre façon d'analyser les documents ! Transformez vos textes complexes en cartes mentales claires, tableaux synthétiques et résumés intelligents grâce à l'IA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group" aria-label="Facebook">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                  <FaFacebook className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="group" aria-label="LinkedIn">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                  <FaLinkedin className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="group" aria-label="WhatsApp">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                  <FaWhatsapp className="w-5 h-5" />
                </div>
              </a>
              <a href="#" className="group" aria-label="Email">
                <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110">
                  <FaEnvelope className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>

          {/* Colonne Fonctionnalités */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Fonctionnalités</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Cartes mentales</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Tableaux résumés</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Résumés intelligents</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Analyse de documents</a></li>
            </ul>
          </div>

          {/* Colonne Ressources */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-200">Ressources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Guide d'utilisation</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Exemples</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">FAQ</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-blue-700/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-blue-100">
              <span>© 2025 DocMind. Tous droits réservés.</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-100">
              <span>Fait avec</span>
              <FaHeart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>pour faciliter l'apprentissage</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer