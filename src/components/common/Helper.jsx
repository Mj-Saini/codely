import { Facebook, Instagram, Pin, Twitter } from 'lucide-react'


import solutionIcon1 from '../../assets/image/png/soution_icon1.png'
import solutionIcon2 from '../../assets/image/png/soution_icon2.png'
import solutionIcon3 from '../../assets/image/png/soution_icon3.png'


import solutionService1 from '../../assets/image/svg/solution_1.svg';
import solutionService2 from '../../assets/image/svg/solution_2.svg';
import solutionService3 from '../../assets/image/svg/solution_3.svg';

// communicationImages

import communication2 from '../../assets/image/png/cominication-data-02.png'
import communication3 from '../../assets/image/png/cominication-data-03.png'

import secureData from '../../assets/image/svg/Secure-data.svg'
import fullyFunctional from '../../assets/image/svg/Fully-functional.svg'
import liveChat from '../../assets/image/svg/Live-chat.svg'
import support247 from '../../assets/image/svg/24-7-Support.svg'

import powerfullSolution1 from '../../assets/image/png/Powerful-solution-01.png'
import powerfullSolution2 from '../../assets/image/png/Powerful-solution-02.png'
import powerfullSolution3 from '../../assets/image/png/Powerful-solution-03.png'
import powerfullSolution4 from '../../assets/image/png/Powerful-solution-04.png'
import powerfullSolution5 from '../../assets/image/png/Powerful-solution-05.png'
import powerfullSolution6 from '../../assets/image/png/Powerful-solution-06.png'
import powerfullSolution7 from '../../assets/image/png/Powerful-solution-07.png'
import powerfullSolution8 from '../../assets/image/png/Powerful-solution-08.png'
import powerfullSolution9 from '../../assets/image/png/Powerful-solution-09.png'

import platformImg from '../../assets/image/png/platforms_01.png'

import testimonialImg from '../../assets/image/png/testimonial-01.png'
import slackLogo from '../../assets/image/png/slack.png'
import freeTrial from '../../assets/image/png/Free-Trial-01.svg'
import unlimited from '../../assets/image/png/unlimited.png'
import premium from '../../assets/image/svg/Premium.svg'

import interfaceOverviewImg from '../../assets/image/png/Interface-overview-01.png'
import blog1 from '../../assets/image/png/story-01.png'

import contact1 from '../../assets/image/png/contact_01.png'
import contact2 from '../../assets/image/png/contact_02.png'
import contact3 from '../../assets/image/png/contact_03.png'
import logo from '../../assets/image/png/Logo.png'

import mailIcon from '../../assets/image/png/mail.png'
import locationIcon from '../../assets/image/png/location.png'
import phoneIcon from '../../assets/image/png/phone.png'

import googleLogo from '../../assets/image/png/google.png'

import teamImg from '../../assets/image/png/team_01.png'
import userProfile from '../../assets/image/png/service_coustomer_01.png'

import blogListImg from '../../assets/image/png/blog-list_01.png'
import profileImg from '../../assets/image/png/testi_01.png'

import serviceImg1 from '../../assets/image/png/service-1.svg'
import serviceImg2 from '../../assets/image/png/service-2.svg'
import serviceImg3 from '../../assets/image/png/service-3.svg'
import serviceImg4 from '../../assets/image/png/service-4.svg'
import serviceImg5 from '../../assets/image/png/service-5.svg'
import serviceImg6 from '../../assets/image/png/service-6.svg'

// src/constants/navLinks.js
export const navLinksList = [
  { name: 'Home', href: '/', type: 'link' },
  { name: 'About Us', href: '/about-us', type: 'link' },
  { name: 'Testimonial', href: '/testimonials', type: 'link' },
  {
    name: 'Services',
    type: 'dropdown',
    subLinks: [
      { name: 'Service List 1', href: '/services-1' },
      { name: 'Service List 2', href: '/services-2' },
      { name: 'Service Details', href: '/service-detail' },
    ],
  },
  {
    name: 'Blog',
    type: 'dropdown',
    subLinks: [
      { name: 'Blog List', href: '/blog-list' },
      { name: 'Single Blog', href: '/blog-detail' },
    ],
  },
  {
    name: 'Pages',
    type: 'dropdown',
    subLinks: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Sign In', href: '/sign-in' },
      { name: 'Sign Up', href: '/sign-up' },
      { name: 'Error 404', href: '/error' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  { name: 'Contact', href: '/contact-us', type: 'link' },
];


export const solutionsList = [
  {
    icon: solutionIcon1,
    title: 'Analyze datas',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type is setting indus ideas.',
  },
  {
    icon: solutionIcon2,
    title: 'Collaborate securely',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type is setting indus ideas.',
  },
  {
    icon: solutionIcon3,
    title: 'Easy communication',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type is setting indus ideas.',
  },
]

export const floatImages = [
  {
    id: 1,
    cardStyling: 'absolute  translate-y-24 bottom-0 left-0 z-10  animate-float-slow text-start',
   img: communication3,
  },
  {
    id: 2,
    cardStyling: 'text-center animate-float-slower lg:ps-15',
   img: communication3,
  },
  {
    id: 3,
    cardStyling: 'absolute -translate-y-24 top-0 right-0 z-10 text-end',
   img: communication3,
  },
]
export const communicationImages = [
  {
    id: 1,
    img: communication3,
    cardStyling: 'w-[160px] h-[160px] z-10 absolute bottom-0 left-0 animate-float-slow text-start',
  },
  {
    id: 2,
    img: communication2,
    cardStyling: 'text-center h-[400px] w-4/5 animate-float-slower lg:ps-15 ',
  },
  {
    id: 3,
    img: communication3,
    cardStyling: 'w-[160px] h-[160px] z-10 absolute bottom-10 right-0 text-end',
  },
 
]


export const featureList = [
  {
    icon: secureData,
    title: 'Secure data',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Ideas orem Ipsum has been the standard dummy text ever since the when an type setting indus ideas own.',
  },
  {
    icon: fullyFunctional,
    title: 'Fully functional',
    desc: 'Simply dummy text of the printing and type setting industry. Orem Ipsum has been the standard dummy text ever since the when an type setting indus iLorem Ipsum is.',
  },
  {
    icon: liveChat,
    title: 'Live chat',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Orem Ipsum has been the standard dummy text ever since the when an type setting indus ideas own.',
  },
  {
    icon: support247,
    title: '24-7 Support',
    desc: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Orem Ipsum has been the standard dummy text ever since the when an type setting indus ideas own.',
  },
]

export const powerfulSolutionList = [
  {
    contentImg:powerfullSolution1,
  },
  {
    contentImg:powerfullSolution2,
  },
  {
    contentImg:powerfullSolution3,
  },
  {
    contentImg:powerfullSolution4,
  },
  {
    contentImg:powerfullSolution5,
  },
  {
    contentImg:powerfullSolution6,
  },
  {
    contentImg:powerfullSolution7,
  },
  {
    contentImg:powerfullSolution7,
  },
  {
    contentImg:powerfullSolution8,
  },
  {
    contentImg:powerfullSolution9,
  },
]


export const integrationPlatforms = [
  { name: "Mailchimp", img: platformImg, },
  { name: "Google Drive", img: platformImg },
  { name: "Whatsapp", img: platformImg },
  { name: "Google Drive", img: platformImg },
  { name: "Mailchimp", img: platformImg },
  { name: "Dropbox", img: platformImg },
  { name: "Skype", img: platformImg },
  { name: "Wordpress", img: platformImg },
  { name: "Smashing", img: platformImg },
  { name: "Firefox", img: platformImg },
  { name: "Yahoo", img: platformImg },
  { name: "Bing", img: platformImg },
];

export const testimonialsList = [
  {
    img: testimonialImg,
    name: "Shayna John",
    role: "Careative inc",
    review:
      "Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been lorem beenthe standar ddummy Lorem Ipsum is simply mmy text of the print ing and typese tting us orem Ipsum has lorem Ipsum has lorem beenthe standar ddummy."
  },
  {
    img: testimonialImg,
    name: "Wilium Smith",
    role: "Fish Kreativ",
    review:
      "Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been lorem beenthe standar ddummy Lorem Ipsum is simply mmy text of the print ing and typese tting us orem Ipsum has lorem Ipsum has lorem beenthe standar ddummy."
  },
  {
    img: testimonialImg,
    name: "John Doe",
    role: "Digital People",
    review:
      "Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been lorem beenthe standar ddummy Lorem Ipsum is simply mmy text of the print ing and typese tting us orem Ipsum has lorem Ipsum has lorem beenthe standar ddummy."
  }
];

export const companyLogos = [
  slackLogo,
  slackLogo,
  slackLogo,
  slackLogo,
  slackLogo,
];


export const pricingPlans = {
  monthly: [
    {
      name: 'Free Trial',
      subtitle: 'For the basics',
      price: '$0',
      cycle: '/Month',
      dotColor: '#9333EA', // amber
      features: [
        { label: '7 Days free trial', included: true },
        { label: '2 platform of your choice', included: true },
        { label: '10 GB Dedicated Hosting free', included: true },
        { label: 'Unlimited updates', included: false },
        { label: 'Live support', included: false }
      ],
      image: freeTrial,
    },
    {
      name: 'Unlimited',
      subtitle: 'For the professionals',
      price: '$99',
      cycle: '/Month',
      dotColor: '#9333EA', // green
      features: [
        { label: '7 Days free trial', included: true },
        { label: '2 platform of your choice', included: true },
        { label: '10 GB Dedicated Hosting free', included: true },
        { label: 'Unlimited updates', included: true },
        { label: 'Live support', included: true }
      ],
      image: unlimited,
      highlight: true
    },
    {
      name: 'Premium',
      subtitle: 'For small team',
      price: '$55',
      cycle: '/Month',
      dotColor: '#3b82f6', // blue
      features: [
        { label: '7 Days free trial', included: true },
        { label: '2 platform of your choice', included: true },
        { label: '10 GB Dedicated Hosting free', included: true },
        { label: 'Unlimited updates', included: true },
        { label: 'Live support', included: false }
      ],
      image: premium,
    }
  ],
  yearly: [
    {
      name: 'Free Trial',
      subtitle: 'For the basics',
      price: '$0',
      cycle: '/Year',
      dotColor: '#eab308',
      features: [
        { label: '7 Days free trial', included: true },
        { label: '2 platform of your choice', included: true },
        { label: '10 GB Dedicated Hosting free', included: true },
        { label: 'Unlimited updates', included: false },
        { label: 'Live support', included: false }
      ],
      image: freeTrial
    },
    {
      name: 'Unlimited',
      subtitle: 'For the professionals',
      price: '$999',
      cycle: '/Year',
      dotColor: '#009515',
      features: [
        { label: '7 Days free trial', included: true },
        { label: '2 platform of your choice', included: true },
        { label: '10 GB Dedicated Hosting free', included: true },
        { label: 'Unlimited updates', included: true },
        { label: 'Live support', included: true }
      ],
      image: unlimited,
      highlight: true
    },
    {
      name: 'Premium',
      subtitle: 'For small team',
      price: '$555',
      cycle: '/Year',
      dotColor: '#3b82f6',
      features: [
        { label: '7 Days free trial', included: true },
        { label: '2 platform of your choice', included: true },
        { label: '10 GB Dedicated Hosting free', included: true },
        { label: 'Unlimited updates', included: true },
        { label: 'Live support', included: false }
      ],
      image: premium
    }
  ]
};


export const faqData = [
  {
    question: "How can I pay?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    question: "How to setup account?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    question: "What is process to get refund?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
  {
    question: "Is support available 24/7?",
    answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  },
];

export const interfaceData = [
  {
    image: interfaceOverviewImg,
    caption: "Report Page",
  },
  {
    image: interfaceOverviewImg,
    caption: "Dashboard",
  },
  {
    image: interfaceOverviewImg,
    caption: "Report Page",
  },
];


export const blogPosts = [
  {
    id: 1,
    title: "Powerful features make software awesome!",
    date: { day: "23", month: "AUG" },
    image: blog1,
    comments: 36,
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been.",
    link: "/blog-detail",
  },
  {
    id: 2,
    title: "Why software is globally used as best software",
    date: { day: "18", month: "AUG" },
    image: blog1,
    comments: 36,
    excerpt: "Simply dummy text of the printing and typesetting industry lorem Ipsum has Lorem Ipsum is.",
    link: "/blog-detail",
  },
  {
    id: 3,
    title: "Beautiful user interface with bug free code.",
    date: { day: "9", month: "AUG" },
    image: blog1,
    comments: 36,
    excerpt: "Printing and typesetting industry lorem Ipsum has Lorem simply dummy text of the.",
    link: "/blog-detail",
  },
];


export const footerSections = [
  {
    title: null,
    type: 'about',
    content: {
      logo: logo,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      newsletter: true,
    },
  },
  {
    title: 'Useful Links',
    type: 'links',
    content: ['Home', 'About us', 'Services', 'Service Detail', 'Blog'],
  },
  {
    title: 'Help & Support',
    type: 'links',
    content: ['Contact us', 'FAQs', 'How it works', 'Terms & conditions', 'Privacy policy'],
  },
  {
    title: 'Contact us',
    type: 'contact',
    content: [
      {
        icon: contact1,
        label: 'Reach us',
        detail: '599, Vilium Crossing, NJ',
      },
      {
        icon: contact2,
        label: 'Call us',
        detail: '+1-900-123 4567',
        link: 'tel:+1-900-1234567',
      },
      {
        icon: contact3,
        label: 'Email us',
        detail: 'support@example.com',
        link: 'mailto:support@example.com',
      },
    ],
  },
];

export const socialLinks = [
  { icon: <Facebook size={18} />, url: '#' },
  { icon: <Twitter size={18} />, url: '#' },
  { icon: <Instagram size={18} />, url: '#' },
  { icon: <Pin size={18} />, url: '#' },
];

export const contactCards = [
  {
    icon: mailIcon,
    title: 'Chat to sales',
    desc: 'Let’s discuss with our sales team',
    linkText: 'example@gmail.com',
    linkHref: 'mailto:support@example.com',
  },
  {
    icon: locationIcon,
    title: 'Visit our office',
    desc: 'Reach us to our office and meet us',
    linkText: '5687, Business Avenue, New York, USA 5687',
    linkHref: '#',
  },
  {
    icon: phoneIcon,
    title: 'Call us',
    desc: 'Call us directly with sales team',
    linkText: '+1 (888) 553-46-11',
    linkHref: 'tel:+1-900-1234567',
  },
];


export const reviewList = [
  {
    logo: googleLogo,
    rating: '4.9',
    total: '485 Reviews',
  },
  {
    logo: googleLogo,
    rating: '4.8',
    total: '390 Reviews',
  },
  {
    logo: googleLogo,
    rating: '4.6',
    total: '276 Reviews',
  },
];



export const teamMembers = [
  {
    name: 'Riana Joe',
    role: 'CEO & Co-Founder',
    image: teamImg,
  },
  {
    name: 'Shali Jely',
    role: 'Co-Founder',
    image: teamImg,
  },
  {
    name: 'Mark Merbo',
    role: 'Business Developer',
    image: teamImg,
  },
  {
    name: 'Cyrus Mistry',
    role: 'Marketing & Sales',
    image: teamImg,
  },
];


export const testimonialReviewList = [
  {
    text: '“ Quick Support & Great Design!” Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took.',
    name: 'John Doe',
    company: 'Technosoft Pvt Ltd.',
    image: userProfile,
  },
  {
    text: '“ Bug FREE Coding & Easy Documentation!” Printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when orem Ipsum is simply dummy text of the .',
    name: 'Shaily Zill',
    company: 'Envato Corp',
    image: userProfile,
  },
  {
    text: '“ Excellence Team!” Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took.',
    name: 'Sophiya Zaa',
    company: 'Mindwebly',
    image: userProfile,
  },
  {
    text: '“ Appriciate and Recommend Services!!” Printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when orem Ipsum is simply dummy text of the.',
    name: 'Tom Cruzz',
    company: 'Smart Webly',
    image: userProfile,
  },
  {
    text: '“ Quick Support & Great Design!” Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took.',
    name: 'John Doe',
    company: 'Technosoft Pvt Ltd.',
    image: userProfile,
  },
  {
    text: '“ Bug FREE Coding & Easy Documentation!” Printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when orem Ipsum is simply dummy text of the .',
    name: 'Shaily Zill',
    company: 'Envato Corp',
    image: userProfile,
  },
];


export const blogPostsList = [
  {
    date: '12 Dec, 2022',
    title: 'Providing IT solution that diverse business verticals lorem ipsum',
    img: blogListImg,
    author: 'Stephan Joe',
    authorImg: profileImg,
    tag: 'Software',
    description:
      'Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the indu has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and.',
  },
  {
    date: '12 Dec, 2022',
    title: 'Providing IT solution that diverse business verticals lorem ipsum',
    img: blogListImg,
    author: 'Stephan Joe',
    authorImg: profileImg,
    tag: 'development',
    description:
      'Lorem Ipsum is simply dummy text of the printing and types etting industry lorem Ipsum has been the indu has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and.',
  },
  
];

export const recentPosts = [
  {
    title: 'Questions business owner must be able to answer.',
    date: '2 days ago',
    img: blogListImg,
  },
  {
    title: 'Questions business owner must be able to answer.',
    date: '2 days ago',
    img: blogListImg,
  },
  {
    title: 'Questions business owner must be able to answer.',
    date: '2 days ago',
    img: blogListImg,
  },
 
];

export const categories = [
  { name: 'Software', count: 15 },
  { name: 'Technology', count: 12 },
  { name: 'Business', count: 9 },
  { name: 'Web Development', count: 25 },
  { name: 'Android', count: 19 },
  { name: 'iOS', count: 8 },
  { name: 'Watch', count: 13 },
];

export const tags = ['Software', 'Technology', 'Business', 'Development', 'Android', 'iOS', 'Watch'];


export const servicesList = [
  {
    title: 'Software Development',
    desc: 'Lorem Ipsum is simply dummy text ofthe printing and type setting indus ideas orem Ipsum has beenthe.',
    img: serviceImg1,
  },
  {
    title: 'Maintenance',
    desc: 'Lorem Ipsum is simply dummy text ofthe printing and type setting indus ideas orem Ipsum has beenthe.',
    img: serviceImg2,
  },
  {
    title: 'Bug Solving',
    desc: 'Lorem Ipsum is simply dummy text ofthe printing and type setting indus ideas orem Ipsum has beenthe.',
    img: serviceImg3,
  },
  {
    title: 'Customized Solution',
    desc: 'Lorem Ipsum is simply dummy text ofthe printing and type setting indus ideas orem Ipsum has beenthe.',
    img: serviceImg4,
  },
  {
    title: 'UI/UX Design',
    desc: 'Lorem Ipsum is simply dummy text ofthe printing and type setting indus ideas orem Ipsum has beenthe.',
    img: serviceImg5,
  },
  {
    title: '24/7 Free Support',
    desc: 'Lorem Ipsum is simply dummy text ofthe printing and type setting indus ideas orem Ipsum has beenthe.',
    img: serviceImg6,
  },
];


export const WhyChooseLiList = [
  'Lorem Ipsum is simply dummy',
  'Text of the printing and typesetting industry',
  'Ipsum has been the industrys standard',
  ' Dummy text ever since the when'
]

export const ItSolutionList = [
  {
    img:solutionService1,
    heading: "Creative & responsive design",
    subHeading:"Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit.",
  },
  {
    img:solutionService2,
    heading: "Pixel perfect",
    subHeading:"Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit.",
  },
  {
    img:solutionService3,
    heading: "24/7 live support",
    subHeading:"Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit.",
  },

]

export const serviceList = [
  {
    heading: "Carefully designed",
    desc:"Lorem Ipsum is simply dummy text of the printing and typ esetting industry lorem Ipsum has."
  },
  {
    heading: "Seamless Sync",
    desc:"Simply dummy text of the printing and typesetting inustry lorem Ipsum has Lorem dollar summit."
  },
]