export const navLinks: Array<{ id: string; title: string; order: string }> = [
  {
    id: "home",
    title: "Home",
    order: "order-0",
  },
  {
    id: "services",
    title: "Services",
    order: "order-1",
  },
  {
    id: "about",
    title: "Á Propos",
    order: "order-2",
  },
  {
    id: "contact",
    title: "Contact",
    order: "order-3",
  },
];

export const elevatorLinks: Array<{
  id: string;
  Number: number;
  section: string;
}> = [
  { id: "five", Number: 5, section: "hero" },
  { id: "four", Number: 4, section: "services" },
  { id: "three", Number: 3, section: "about" },
  { id: "two", Number: 2, section: "services2" },
  { id: "one", Number: 1, section: "contact" },
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
