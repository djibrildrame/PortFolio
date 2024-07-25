// Service.js
import React from 'react';
import './Service.css';

const Service = () => {
  return (
    <div className="services-container">
      <h1>Services Offerts</h1>

      <div className="service-item">
        <h2>Développement Front-End</h2>
        <p>
          Je suis passionné par le développement front-end, où j'excelle dans la création d'interfaces utilisateur modernes, réactives et esthétiquement plaisantes. Mes compétences incluent :
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
          </ul>
        </p>
      </div>

      <div className="service-item">
        <h2>Développement Back-End en Cours d'Apprentissage</h2>
        <p>
          Je suis activement en train de perfectionner mes compétences en développement back-end, capable de gérer des projets simples tout en continuant à apprendre et à grandir dans ce domaine. Mes compétences incluent :
          <ul>
            <li>Node.js avec Express</li>
            <li>MongoDB</li>
          </ul>
        </p>
      </div>

      <div className="service-item">
        <h2>Intégration API</h2>
        <p>
          Je suis compétent dans l'intégration de diverses APIs, permettant d'étendre les fonctionnalités de vos projets et d'améliorer l'interopérabilité. Mes compétences incluent :
          <ul>
            <li>Requêtes API REST</li>
          </ul>
        </p>
      </div>

      <div className="service-item">
        <h2>Conception de Sites Web</h2>
        <p>
          Je conçois des sites web modernes, responsives et optimisés, offrant une expérience utilisateur cohérente et agréable sur toutes les plateformes. Mes compétences incluent :
          <ul>
            <li>Responsive Design</li>
            <li>SEO</li>
          </ul>
        </p>
      </div>

      <div className="service-item">
        <h2>Automatisation des Tâches</h2>
        <p>
          Je propose des solutions d'automatisation pour augmenter l'efficacité et réduire les erreurs humaines, optimisant ainsi les processus répétitifs. Mes compétences incluent :
          <ul>
            <li>Scripts en JavaScript</li>
          </ul>
        </p>
      </div>

      <div className="service-item">
        <h2>Support et Maintenance</h2>
        <p>
          Je m'engage à fournir un support continu et des services de maintenance pour assurer que vos projets restent à jour et fonctionnent de manière optimale. Mes compétences incluent :
          <ul>
            <li>Dépannage et correction des bugs</li>
            <li>Mises à jour régulières</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Service;
