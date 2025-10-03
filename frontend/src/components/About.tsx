function About() {
  return (
    <div className="py-20 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
      {/* En-tête de section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-700 pb-4">À propos de DocMind</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Découvrez comment DocMind transforme vos documents en savoir clair et visuel.
        </p>
      </div>

      {/* Contenu principal avec image et texte */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Section image */}
          <div className="lg:w-[500px] w-full">
            <div className="flex flex-col h-[580px]">
              <div className="relative group mb-6 h-[274px]">
                <img 
                  src="/about.jpg" 
                  alt="À propos de DocMind" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                
              </div>
              <div className="relative group h-[274px]">
                <img 
                  src="/about2.jpg" 
                  alt="À propos de DocMind" 
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
                
              </div>
            </div>
          </div>
          
          {/* Section texte - Une seule carte */}
          <div className="flex-1 min-w-0">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-100/50 h-[580px] flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-3xl font-bold text-blue-700 mb-6 flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-3"></span>
                  C'est quoi DocMind ?
                </h3>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                      Vous est-il déja arrivé de passer des heures à lire un document long et complexe, pour finalement ne retenir que quelques points clés ? Ou de vous sentir submergé par la quantité d'informations à traiter dans vos études ou votre travail ? C'est exactement ce que DocMind vise à résoudre.
                  </p>
                  <div className="bg-blue-50/70 rounded-xl p-6 border-l-4 border-blue-600">
                    <p className="text-lg mb-4">
                      Avec l'aide de l'intelligence artificielle, l'application analyse vos documents et les transforme instantanément en formats adaptés à votre façon d'apprendre ou de travailler :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong className="text-blue-700">Résumé clair et concis :</strong> Obtenez une synthèse claire des points clés.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong className="text-purple-700">Carte mentale interactive :</strong> Visualisez les relations entre les idées principales.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong className="text-indigo-700">Tableau structuré :</strong> Organisez les informations de manière logique et facile à consulter.</span>
                      </li>
                    </ul>
                  </div>
                  <p className="text-lg">
                    Que vous soyez étudiant, professionnel ou chercheur, DocMind vous aide à gagner du temps et à améliorer votre productivité. Rejoignez-nous dans notre aventure pour transformer la manière dont nous interagissons avec l'information écrite.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-100 flex-shrink-0">
                <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform w-full lg:w-auto">
                    <span className="relative z-10 flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      Accéder à DocMind
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Effet de brillance */}
                    <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About