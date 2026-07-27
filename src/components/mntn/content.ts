import { mntnImages, type MntnImage } from './assets';

export interface GuideSectionContent {
  /** Zero-padded index rendered as the oversized watermark numeral. */
  number: string;
  /** Anchor id — also drives the hero's scroll progress rail. */
  id: string;
  eyebrow: string;
  /** Split across lines exactly as in the design. */
  title: string[];
  body: string;
  image: MntnImage;
  /** `true` puts the image first on large screens (the 02 row). */
  reversed: boolean;
}

export const navLinks = [
  { label: 'Equipment', href: '#equipment' },
  { label: 'About us', href: '#about' },
  { label: 'Blog', href: '#blog' },
] as const;

export const guideSections: GuideSectionContent[] = [
  {
    number: '01',
    id: 'get-started',
    eyebrow: 'Get Started',
    title: ['What level of hiker', 'are you?'],
    body: 'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you — novice, moderate, advanced moderate, expert, or expert backpacker?',
    image: mntnImages.ridgeTrail,
    reversed: false,
  },
  {
    number: '02',
    id: 'hiking-essentials',
    eyebrow: 'Hiking Essentials',
    title: ['Picking the right', 'Hiking Gear!'],
    body: "The nice thing about beginning hiking is that you don't really need any special gear, you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe if they get sweaty or wet.",
    image: mntnImages.hikingGear,
    reversed: true,
  },
  {
    number: '03',
    id: 'map-and-timing',
    eyebrow: 'Where you go is the key',
    title: ['Understand Your', 'Map & Timing'],
    body: "To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction.",
    image: mntnImages.mapCompass,
    reversed: false,
  },
];

export const footerColumns = [
  {
    heading: 'More on The Blog',
    links: [
      { label: 'About MNTN', href: '#about' },
      { label: 'Contributors & Writers', href: '#contributors' },
      { label: 'Write For Us', href: '#write-for-us' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Privacy Policy', href: '#privacy' },
    ],
  },
  {
    heading: 'More on MNTN',
    links: [
      { label: 'The Team', href: '#team' },
      { label: 'Jobs', href: '#jobs' },
      { label: 'Press', href: '#press' },
    ],
  },
] as const;
