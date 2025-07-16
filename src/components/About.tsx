
import { Award, Users, Star, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '20+' },
    { icon: Users, label: 'Clients Satisfaits', value: '150+' },
    { icon: Star, label: 'Projets', value: '200+' },
    { icon: TrendingUp, label: 'Success', value: '98%' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-[1/1] lg:aspect-[4/5] bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden">
              <img
                src="/images/1745840202622.jpg"
                alt="Working professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-white text-black p-6 rounded-xl">
              <div className="text-2xl font-bold">20+ ans</div>
              <div className="text-sm"> d’expérience</div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className='p-8 lg:p-4'>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">À PROPOS DE MOI</h2>
              <p className="text-gray-400 text-md text-justify leading-relaxed mb-6">
                Avec plus de 20 ans d’expérience dans des secteurs stratégiques en France et à l’international, mon parcours professionnel m’a permis d’évoluer au cœur de l’industrie, du BTP et du ferroviaire. J’ai collaboré avec des acteurs majeurs tels que Cegelec, Fabricom, Fizer dans l’industrie, Vinci Construction et Bouygues dans le secteur du bâtiment, ainsi que Alstom et la RATP dans le domaine ferroviaire. Ces expériences m’ont apporté une vision terrain concrète des enjeux de productivité, de performance et de transformation digitale.

                En parallèle, mon aventure entrepreneuriale a commencé en 2015.
              </p>

              <p className="text-gray-400 text-md text-justify leading-relaxed mb-6" >Autodidacte passionné de technologie, je me suis formé de manière continue, entouré des meilleurs mentors francophones dans les domaines de l’intelligence artificielle et de l’automatisation.

                En 2024, j’ai fondé Ahdigital, une agence spécialisée en IA Générative, Automatisation et No-Code/Low-Code.

              </p>

              <p className="text-gray-400 text-md text-justify leading-relaxed mb-6">
                Cette initiative répond à un besoin clair : rendre l’intelligence artificielle accessible, rapide à mettre en œuvre et durable pour les entreprises. De la startup en phase de lancement aux grands groupes en transformation, j’accompagne mes clients avec des solutions sur mesure à forte valeur ajoutée, pour accélérer leur croissance et optimiser leurs opérations.
              </p>
              <p className="text-gray-400 text-md text-justify leading-relaxed mb-6">
                  À travers Ahdigital, ma mission est simple : aider les entreprises à gagner en agilité, en efficacité et à réussir leur transition numérique avec les technologies les plus innovantes du moment.
              </p>
            </div>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="border border-gray-700 rounded-xl p-6 hover:border-accent-green transition-colors group">
                  <stat.icon className="w-8 h-8 text-white mb-3 group-hover:text-accent-green transition-colors" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
