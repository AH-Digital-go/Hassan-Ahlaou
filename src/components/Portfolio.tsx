
import { ExternalLink, Play } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Automatisation des Cartes professionnelles ',
      category: 'Chambre de commerce',
      image: '/images/carte.png',
      description: "Automatise la gestion des demandes de cartes professionnelles. Optimise des délais de traitements administratif. Réduit des erreurs humaines.",
      link: 'https://www.awesomescreenshot.com/video/40402475?key=0faf48b9cd3b8d6217bc15e41e9276d7'
    },
    {
      title: "Saisie Automatique d'écritures comptables & Dashboard",
      category: 'Experts comptables',
      image: "/images/compta.png",
      description: 'Automatisation complète de la saisie comptable.  Génération de tableaux de bord financiers dynamiques. Gain de temps et fiabilité renforcée pour la gestion comptable.',
      link: 'https://drive.google.com/file/d/1Av8z8ARMEnD3XYvSJQlrIxEg4DGWzdsa/view?usp=sharing'
    },
   
    {
      title: "Système d'automatisation pour hôtellerie",
      category: 'hôtellerie',
      image: '/images/hotellerie.png',
      description: 'Les réservations. La planification des activités clients. La gestion du personnel. La communication multicanale avec les clients grâce aux chatbots',
      link: 'https://www.loom.com/share/c7320dee4d8c4372a771cf8480ba4247?sid=9bfe26b9-524a-445d-bf9b-2e368dd96285'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">RÉALISATIONS RÉCENTES</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Une vitrine de projets réussis et d’initiatives stratégiques ayant apporté des résultats exceptionnels à mes clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="aspect-[1/1] lg:aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                 <div className="absolute inset-0 bg-black/50"></div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[1.5vh] text-gray-300 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    <a href={project.link}  target="_blank">
                      <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                        <Play className="w-4 h-4 text-white" />
                      </button>
                    </a>
                    <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                    
                  </div>
                </div>
                <h3 className="text-[3vh] lg:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-[1.5vh] lg:text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
