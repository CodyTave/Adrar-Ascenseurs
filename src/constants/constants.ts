export const navLinks: Array<{
  id: string;
  title: string;
  order: string;
  floor: string;
}> = [
  {
    id: "home",
    title: "Home",
    order: "order-0",
    floor: "fifth",
  },
  {
    id: "services",
    title: "Services",
    order: "order-1",
    floor: "fourth",
  },
  {
    id: "about",
    title: "Á Propos",
    order: "order-2",
    floor: "third",
  },
  {
    id: "contact",
    title: "Contact",
    order: "order-3",
    floor: "first",
  },
];

export const elevatorLinks: Array<{
  id: string;
  Number: number;
  section: string;
}> = [
  { id: "fifth", Number: 5, section: "hero" },
  { id: "fourth", Number: 4, section: "services" },
  { id: "third", Number: 3, section: "about" },
  { id: "second", Number: 2, section: "services2" },
  { id: "first", Number: 1, section: "contact" },
  { id: "zero", Number: 0, section: "footer" },
];

export const elevatorButtons: Array<{ id: string; title: string }> = [
  { id: "installation", title: "Installation" },
  { id: "maintenance", title: "Maintenance" },
  { id: "réparation", title: "Réparation" },
  { id: "tarifs", title: "Tarifs" },
  { id: "conseil", title: "Conseil" },
];
export const elevator: Array<{ id: string; title: string; text: string }> = [
  {
    id: "installation",
    title: "Installation",
    text: `Notre équipe d'experts en installation d'ascenseurs est formée
  avec minutie pour offrir un service fiable et efficace à nos
  clients. Chez Adrar Ascenseurs, nous nous engageons à respecter
  les délais et à fournir un service professionnel de qualité
  supérieure. Notre expertise nous permet de prendre en charge
  diverses marques et modèles d'ascenseurs, répondant ainsi à tous
  les besoins de nos clients.
`,
  },
  {
    id: "maintenance",
    title: "Maintenance",
    text: `
    En plus de nos services d'installation et de réparation,
     nous offrons également des services de maintenance pour assurer le bon fonctionnement
      de votre ascenseur à long terme. Nos contrats de maintenance sont conçus pour répondre
       aux besoins individuels de chaque client et pour garantir la sécurité et la fiabilité de l'ascenseur.
        Nous proposons également des conseils techniques pour aider nos clients
         à prendre des décisions éclairées pour leurs ascenseurs.
  `,
  },
  {
    id: "réparation",
    title: "Réparation",
    text: `Si vous rencontrez des problèmes avec votre ascenseur, notre équipe de
  réparation est là pour vous aider. Nous proposons des services de réparation
   rapides et efficaces pour tous les types d'ascenseurs. Nos techniciens expérimentés
    utilisent uniquement des pièces de qualité supérieure pour assurer la sécurité
     et la fiabilité de votre ascenseur. Nous nous engageons à respecter les délais
      de réparation et à offrir une garantie sur toutes les réparations effectuées.`,
  },
  {
    id: "tarifs",
    title: "Tarifs",
    text: `En tant que fournisseur de services d'ascenseurs,
   nous sommes également disponibles pour fournir des conseils techniques pour toute question
    ou préoccupation que vous pourriez avoir. Nous sommes heureux de partager notre expertise
     et de vous aider à prendre des décisions éclairées sur la gestion de votre ascenseur.

  `,
  },
  {
    id: "conseil",
    title: "Conseil",
    text: `Chez Adrar Ascenseurs, nous nous engageons à offrir des tarifs
   compétitifs pour tous nos services. Nous sommes fiers de notre service client exceptionnel
    et de notre engagement à garantir la satisfaction de nos clients. Contactez-nous
     pour toute demande d'installation, de réparation, de maintenance ou de conseil
      technique sur votre ascenseur et laissez-nous vous offrir un service de qualité supérieure.

  `,
  },
];

export const AboutText = {
  title: "Á Propos De Nous",
  text: `est une entreprise spécialisée dans la fabrication et l'installation d'ascenseurs.
   Fondée en 2009 par des experts de l'industrie des ascenseurs,
    l'entreprise a rapidement établi sa réputation en proposant des produits de qualité supérieure et un service client 
    exceptionnel. Adrar Ascenseurs se concentre sur la fabrication d'ascenseurs à haute performance
     pour les immeubles résidentiels, commerciaux et industriels.
      La société utilise des technologies de pointe pour garantir des ascenseurs fiables,
       efficaces et sûrs pour ses clients.
        Adrar Ascenseurs s'engage à fournir des solutions d'ascenseurs adaptées aux besoins de chaque client,
         tout en respectant les normes de sécurité et les réglementations en vigueur.`,
};
export const Elevators = {
  title: "Ascenseurs",
  text: `Nous proposons des services d'installation et de réparation professionnels pour les ascenseurs. Nous sommes spécialisés dans l'installation, la maintenance et la réparation des ascenseurs pour les immeubles résidentiels, commerciaux et industriels. Nous travaillons avec les meilleures marques et les plus récentes technologies pour garantir des ascenseurs sûrs, fiables et efficaces pour nos clients. Contactez-nous dès maintenant pour discuter de vos besoins en matière d'ascenseurs et pour obtenir un devis gratuit.
  `,
};
export const Escalators = {
  title: "Escalateurs",
  text: `
  Adrar Ascenseurs offre des services d'installation, maintenance et réparation professionnels pour les escaliers mécaniques. Nous sommes experts dans la mise en place, l'entretien et la réparation des escaliers mécaniques pour les bâtiments résidentiels, commerciaux et industriels. Nous utilisons les meilleures marques et les dernières technologies pour garantir des escaliers mécaniques sûrs, fiables et efficaces pour nos clients. Contactez-nous dès maintenant pour discuter de vos besoins en matière d'escaliers mécaniques et pour obtenir un devis gratuit.


  `,
};
export const lifts = {
  title: "Monte charge",
  text: `
  Adrar offre des services d'installation, maintenance et réparation professionnels pour les monte-charges. Nous sommes spécialisés dans la mise en place, l'entretien et la réparation des monte-charges pour les bâtiments résidentiels, commerciaux et industriels. Nous travaillons avec les meilleures marques et les dernières technologies pour garantir des monte-charges sûrs, fiables et efficaces pour nos clients. Contactez-nous dès maintenant pour discuter de vos besoins en matière de monte-charges et pour obtenir un devis gratuit.
  `,
};
