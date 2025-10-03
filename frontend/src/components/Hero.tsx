

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Background animé */}
      <div className="absolute inset-0">
        {/* Gradient animé */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300/20 via-blue-500/20 to-blue-700/20 animate-gradient-x"></div>
        
        {/* Formes flottantes animées */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/30 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-600/30 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-blue-700/30 rounded-full animate-float"></div>
        
        {/* Particules scintillantes */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-500 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-blue-600 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-blue-700 rounded-full animate-twinkle-slow"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-12">
        <div className="lg:w-1/2 text-center lg:text-left pl-0 lg:pl-36 mb-8 lg:mb-0">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight animate-fade-in-up">
              Transformez vos documents en savoir clair et visuel
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-200">
              Téléchargez vos fichiers et obtenez instantanément un résumé, une carte mentale interactive ou un tableau structuré. Gagnez du temps, comprenez mieux, et partagez facilement vos idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform">
                <span className="relative z-10">Commencer maintenant</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group relative overflow-hidden bg-white/80 backdrop-blur-sm text-blue-600 border-2 border-blue-600/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative group">
            {/* Effet de halo autour de l'image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300 animate-pulse-slow"></div>
            
            <img 
              src="/hero.png" 
              alt="Transformation de documents" 
              className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105 animate-fade-in-up animation-delay-600"
            />
            
            {/* Reflets sur l'image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero