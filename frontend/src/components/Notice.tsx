
import { FaStar, FaStarHalfAlt, FaRegStar, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  image: string;
  rating: number;
  comment: string;
  date: string;
}   

const reviews: Review[] = [
  {
    id: 1,
    name: "Marie Dubois",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Service exceptionnel ! L'équipe est très professionnelle et les résultats dépassent mes attentes. Je recommande vivement !",
    date: "15 septembre 2024"
  },
  {
    id: 2,
    name: "Jean Martin",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 4.5,
    comment: "Très satisfait de mon expérience. Le support client est réactif et les solutions proposées sont innovantes.",
    date: "8 septembre 2024"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Une expérience fantastique du début à la fin. La qualité du service et l'attention aux détails sont remarquables.",
    date: "2 septembre 2024"
  },
  {
    id: 4,
    name: "Pierre Moreau",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 4,
    comment: "Bon service dans l'ensemble. Quelques petits points à améliorer mais je suis globalement satisfait.",
    date: "28 août 2024"
  },
  {
    id: 5,
    name: "Emma Rousseau",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    comment: "Absolument parfait ! L'équipe a su comprendre mes besoins et a livré exactement ce que j'attendais.",
    date: "22 août 2024"
  },
  {
    id: 6,
    name: "Lucas Bernard",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 4.5,
    comment: "Service de qualité avec une équipe compétente. Je recommande sans hésitation pour vos projets.",
    date: "18 août 2024"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-yellow-400" />);
  }
  
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }
  
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-gray-300" />);
  }
  
  return <div className="flex gap-1">{stars}</div>;
};

function Notice() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de la section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-blue-700 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits qui nous font confiance
            pour leurs projets les plus importants.
          </p>
        </div>

        {/* Grille des avis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* En-tête de l'avis */}
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              {/* Étoiles */}
              <div className="mb-3">
                <StarRating rating={review.rating} />
              </div>

              {/* Commentaire */}
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Statistiques */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
          </div>
        </div>

        {/* Section Contact */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-4xl font-bold text-blue-700 mb-4">
              Contactez-nous dès maintenant
            </h3>
            <p className="text-lg text-gray-600">
              Rejoignez nos clients satisfaits et démarrez votre projet aujourd'hui
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FaWhatsapp className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">Message instantané</p>
                  <a 
                    href="https://wa.me/261346571348" 
                    className="text-green-600 hover:text-green-700 font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +261 34 65 713 48
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaEnvelope className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600 mb-2">Écrivez-nous</p>
                  <a 
                    href="mailto:erazafindravonjy@gmail.com" 
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    erazafindravonjy@gmail.com
                  </a>
                </div>
              </div>

              {/* Adresse */}
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-red-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                  <address className="text-gray-700 not-italic">
                    Lot 2P124 Tambohobe<br />
                    301 Fianarantsoa, Madagascar
                  </address>
                </div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/33123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 text-center"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contact@docmind.fr"
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 text-center"
              >
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Notice