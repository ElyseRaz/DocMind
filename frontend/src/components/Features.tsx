import { RiMindMap } from "react-icons/ri";
import { IoLogoTableau } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
function Features() {

    const features = [
        {
            title: "Génération de carte mentale",
            description: "Transformez vos documents en cartes mentales interactives pour une visualisation claire et structurée de l'information.",
            icon: RiMindMap,
        },
        {
            title: "Génération de tableau résumé",
            description: "Obtenez des tableaux résumés qui synthétisent les points clés de vos documents pour une compréhension rapide et efficace.",
            icon: IoLogoTableau,
        },
        {
            title: "Génération de résumés",
            description: "Créez des résumés concis et pertinents de vos documents pour gagner du temps et améliorer la rétention d'information.",
            icon: IoDocumentTextOutline,
        }
    ]
  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 ">   
        <h1 className="text-5xl font-bold text-center text-blue-700 pb-4">Fonctionnalités dans DocMind</h1>
        <p className="text-center text-gray-600 text-xl">Découvrez les fonctionnalités principales de DocMind qui transforment vos documents en savoir clair et visuel.</p>
        {/*Card avec les fonctionnalités : Géneration de carte mentale, Géneration de tableau résumé , Génération des résumés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-6 lg:px-10">
            {features.map((features, index)=>(
                <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300">
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full mb-4">
                        <features.icon className="w-6 h-6"/>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{features.title}</h3>
                    <p className="text-gray-700">{features.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features