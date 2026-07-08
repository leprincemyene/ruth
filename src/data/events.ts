export type EventCategory = 'Musique' | 'Art' | 'Tradition' | 'Danse' | 'Littérature' | 'Gastronomie';

export interface CulturalEvent {
  id: string;
  title: string;
  category: EventCategory;
  city: string;
  venue: string;
  date: string; // ISO
  dateLabel: string;
  time: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const categories: EventCategory[] = [
  'Musique',
  'Art',
  'Tradition',
  'Danse',
  'Littérature',
  'Gastronomie',
];

export const events: CulturalEvent[] = [
  {
    id: '1',
    title: 'Festival des Masques Mvudi',
    category: 'Tradition',
    city: 'Libreville',
    venue: 'Palais de la Culture',
    date: '2026-07-15',
    dateLabel: '15 Juillet 2026',
    time: '18:00',
    price: 'Gratuit',
    description:
      "Célébration des masques traditionnels Mvudi, symboles spirituels des peuples du Gabon. Au programme : danses rituelles, exposition de masques et ateliers d'initiation.",
    image:
      'https://images.pexels.com/photos/99576/pexels-photo-99576.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    id: '2',
    title: 'Nuits de l\'Afrika Jazz',
    category: 'Musique',
    city: 'Libreville',
    venue: 'French Institute',
    date: '2026-07-22',
    dateLabel: '22 Juillet 2026',
    time: '20:30',
    price: '15 000 FCFA',
    description:
      "Une soirée immersive mêlant jazz contemporain et rythmes traditionnels gabonais. Sur scène, les meilleurs artistes de la scène afro-jazz locale et internationale.",
    image:
      'https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    id: '3',
    title: 'Exposition — Pigments d\'Ogooué',
    category: 'Art',
    city: 'Port-Gentil',
    venue: 'Galerie Ndongo',
    date: '2026-08-03',
    dateLabel: '3 Août 2026',
    time: '10:00',
    price: '2 000 FCFA',
    description:
      "Rétrospective des œuvres d'artistes gabonais inspirées par le fleuve Ogooué. Peintures, sculptures et installations contemporaines en dialogue avec la nature.",
    image:
      'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    id: '4',
    title: 'Biennale de la Danse Bwiti',
    category: 'Danse',
    city: 'Lambaréné',
    venue: 'Maison de la Culture',
    date: '2026-08-12',
    dateLabel: '12 Août 2026',
    time: '17:00',
    price: '5 000 FCFA',
    description:
      "La danse Bwiti, patrimoine immatériel du Gabon, à l'honneur. Compagnies nationales et internationales partagent scène et savoirs autour de cette tradition sacrée.",
    image:
      'https://images.pexels.com/photos/2024497/pexels-photo-2024497.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '5',
    title: 'Salon du Livre Gabonais',
    category: 'Littérature',
    city: 'Libreville',
    venue: 'Centre Culturel',
    date: '2026-08-20',
    dateLabel: '20 Août 2026',
    time: '09:00',
    price: 'Gratuit',
    description:
      "Rencontres d'auteurs, dédicaces, tables rondes et ateliers d'écriture. Une célébration de la littérature gabonaise et panafricaine pour tous les amoureux du livre.",
    image:
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '6',
    title: 'Festival des Saveurs du Gabon',
    category: 'Gastronomie',
    city: 'Franceville',
    venue: 'Place de l\'Indépendance',
    date: '2026-09-05',
    dateLabel: '5 Septembre 2026',
    time: '12:00',
    price: 'Entrée libre',
    description:
      "Un voyage culinaire à travers les régions du Gabon : nyembwe, poulet DG, manioc et fruits tropicaux. Démonstrations, dégustations et marché de producteurs.",
    image:
      'https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '7',
    title: 'Concert — Nyabinghi Gabon',
    category: 'Musique',
    city: 'Oyem',
    venue: 'Stade Municipal',
    date: '2026-09-14',
    dateLabel: '14 Septembre 2026',
    time: '19:00',
    price: '3 000 FCFA',
    description:
      "Le rythme percussif du nyabinghi rencontre les chants gabonais dans un concert en plein air. Une fusion unique de traditions musicales caribéennes et africaines.",
    image:
      'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '8',
    title: 'Atelier Tissage Raphia',
    category: 'Tradition',
    city: 'Makokou',
    venue: 'Centre Artisanal',
    date: '2026-09-25',
    dateLabel: '25 Septembre 2026',
    time: '14:00',
    price: '10 000 FCFA',
    description:
      "Initiez-vous à l'art du tissage du raphia, savoir-faire ancestral des communautés du nord-est gabonais. Matériel fourni, places limitées.",
    image:
      'https://images.pexels.com/photos/6212899/pexels-photo-6212899.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    id: '9',
    title: 'Spectacle — Tambours du Gabon',
    category: 'Danse',
    city: 'Port-Gentil',
    venue: 'Théâtre Municipal',
    date: '2026-10-02',
    dateLabel: '2 Octobre 2026',
    time: '20:00',
    price: '8 000 FCFA',
    description:
      "Un spectacle grandiose réunissant 30 percussionnistes autour des tambours sacrés. Une expérience sonore et visuelle qui traverse les générations.",
    image:
      'https://images.pexels.com/photos/2026360/pexels-photo-2026360.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export const culturePillars = [
  {
    icon: 'Music',
    title: 'Musique & Rythmes',
    text: "Du ndombolo au folklore Mpongwe, la musique gabonaise vibre au carrefour de l'Afrique centrale.",
  },
  {
    icon: 'Palette',
    title: 'Arts Visuels',
    text: "Sculpture, peinture et arts contemporains : une scène créative en pleine effervescence.",
  },
  {
    icon: 'Sparkles',
    title: 'Traditions Vivantes',
    text: "Masques, Bwiti, contes et rituels : un patrimoine immatériel transmis de génération en génération.",
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Saveurs Gabonaises',
    text: "Une cuisine riche de produits locaux : manioc, poisson fumé, nyembwe et fruits tropicaux.",
  },
];

export const stats = [
  { value: '9', label: 'Événements à venir' },
  { value: '6', label: 'Villes partenaires' },
  { value: '40+', label: 'Artistes & créateurs' },
  { value: '12K', label: 'Spectateurs attendus' },
];
