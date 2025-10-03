
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`flex justify-between px-6 lg:px-10 py-4 items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-xl shadow-blue-500/10' 
        : 'bg-white/70 backdrop-blur-sm shadow-lg shadow-blue-500/5'
    }`}>
      {/* Logo avec animation */}
      <div className="group cursor-pointer">
        <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-300 transform group-hover:scale-105">
          DocMind
          <div className="h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </h1>
      </div>

      {/* Menu de navigation - peut être ajouté plus tard */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
          Fonctionnalités
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
          À propos
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
          Avis
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      {/* Boutons d'authentification */}
      <div className="flex items-center space-x-3">
        <Link to="/login" className="group relative overflow-hidden bg-transparent text-blue-600 px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-50" >
          <span className="relative z-10">Connexion</span>
        </Link>

        <Link to="/register" className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transform">
          <span className="relative z-10">Inscription</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Effet de brillance */}
          <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </Link>
      </div>

      {/* Indicateur de scroll subtil */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
    </div>
  )
}
