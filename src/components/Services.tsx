
import { Briefcase, TrendingUp, Users, Target, BarChart, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Audit & Conseil en IA et Automatisation',
      description: 'Comprehensive business planning and strategic consulting to drive growth and efficiency.',
      features: ['Planification stratégique', 'Stratégie de croissance', 'Productivité augmentée']
    },
    {
      icon: TrendingUp,
      title: 'Formation personnalisée IA & No-code',
      description: 'Ateliers pratiques et sessions de formation sur mesure pour dirigeants et équipes afin de maîtriser les outils d’IA et de No-code adaptés à leur métier.',
      features: ['Formation No-code', 'Optimisation des processus', 'Automatisation intelligente']
      // AI Strategy
    },
    {
      icon: Users,
      title: 'Développement de Solutions IA sur mesure',
      description: 'Conception et déploiement de solutions intelligentes et automatisées pour optimiser les opérations spécifiques à votre entreprise.',
      features: ['Adoption de l’IA', 'Intégration IA & métier', 'Innovation automatisée']
    },
    // {
    //   icon: Target,
    //   title: 'Stratégie de Croissance par l’IA',
    //   description: 'Accompagnement dans la mise en place de leviers d’accélération grâce à l’IA, de l’optimisation marketing à l’automatisation commerciale.',
    //   features: ['Stratégie de croissance', 'Conseil opérationnel', 'Productivité augmentée']
    // },
    // {
    //   icon: BarChart,
    //   title: 'Veille & Analyse de Marché assistée par IA',
    //   description: 'Utilisation d’outils intelligents pour surveiller les tendances sectorielles, analyser la concurrence et anticiper les besoins du marché.',
    //   features: ['Retour sur investissement (ROI)', 'Productivité augmentée', 'Optimisation des processus']
    // },
    // {
    //   icon: Lightbulb,
    //   title: 'Évaluation des Risques et Conformité IA',
    //   description: 'Identification des risques liés à l’adoption de l’IA, recommandations juridiques et éthiques, conformité RGPD et bonnes pratiques en automatisation.',
    //   features: ['Évaluation des risques', 'Éthique de l’IA', 'Veille concurrentielle']
    // }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">NOS SERVICES</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Solutions commerciales complètes, conçues sur mesure pour stimuler la croissance, améliorer l’efficacité et garantir le succès de votre organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-accent-green">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-green transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-black group-hover:text-accent-green-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
