import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    wt_logo,
    unschool_logo,
    updeed_logo,
} from '../assets';

export const navLinks = [
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'work',
        title: 'Work',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
];

const services = [
    {
        title: 'Financial Analysis',
        icon: web,
    },
    {
        title: 'Investment Management',
        icon: mobile,
    },
    {
        title: 'Data Analysis',
        icon: backend,
    },
    {
        title: 'Market Research',
        icon: creator,
    },
];

const technologies = [
    {
        name: 'HTML 5',
        icon: html,
    },
    {
        name: 'CSS 3',
        icon: css,
    },
    {
        name: 'JavaScript',
        icon: javascript,
    },
    {
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'Redux Toolkit',
        icon: redux,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
    },
    {
        name: 'Node JS',
        icon: nodejs,
    },
    {
        name: 'MongoDB',
        icon: mongodb,
    },
    {
        name: 'Three JS',
        icon: threejs,
    },
    {
        name: 'git',
        icon: git,
    },
    {
        name: 'figma',
        icon: figma,
    },
    {
        name: 'docker',
        icon: docker,
    },
];

const experiences = [
    {
        title: 'Content Writer',
        company_name: 'Web Technologies Private Ltd. ',
        icon: wt_logo,
        iconBg: '#383E56',
        date: 'March 2021 - August 2021',
        points: [
            'Successfully produced high-quality, engaging, and SEO-optimized content for various digital platforms.',
            'Conducted in-depth research on a wide range of topics related to web technologies, staying up-to-date with industry trends.',
            "Collaborated with the marketing team to develop and execute content strategies aligned with the company's goals and target audience.",
            'Meticulously reviewed and edited content to maintain high standards of grammar, style, and clarity, ensuring a consistent and professional brand voice.',
        ],
    },
    {
        title: 'Intern',
        company_name: 'Updeed',
        icon: updeed_logo,
        iconBg: '#E6DEDD',
        date: 'April 2021 - May 2021',
        points: [
            'Developed and executed successful user acquisition strategies to increase app downloads and engagement.',
            'Conducted comprehensive market research to identify target demographics and user segments, enabling precise targeting and messaging.',
            'Implemented user engagement campaigns, in-app features, and notifications to enhance user retention and drive higher app usage.',
            'Gathered user feedback and insights, collaborating with the development team to implement user-requested features and improvements.',
        ],
    },
    {
        title: 'Portfolio Management Intern',
        company_name: 'Unschool',
        icon: unschool_logo,
        iconBg: '#383E56',
        date: 'February 2021 - Feb 2021',
        points: [
            'Conducted comprehensive analysis of investment portfolios, evaluating asset allocation, risk exposure, and performance to provide actionable insights for optimization.',
            'Stayed up-to-date with financial markets and investment trends, assisting in the identification of potential investment opportunities and risks.',
            "Collaborated with senior portfolio managers to develop and implement asset allocation strategies that aligned with clients' financial goals and risk tolerance.",
            'Assisted in the assessment of portfolio risk by analyzing individual securities and overall portfolio metrics, helping to ensure risk mitigation strategies were in place.',
        ],
    },
    {
        title: 'Personal Financial Planning ',
        company_name: 'Unschool',
        icon: unschool_logo,
        iconBg: '#E6DEDD',
        date: 'November 2020 - November 2020',
        points: [
            'Conducted one-on-one consultations with clients to understand their financial goals, needs, and objectives.',
            "Assessed clients'current financial situations, including income, expenses, assets, and liabilities, to create a comprehensive financial profile.",
            'Collaborated with clients to establish clear financial goals, such as retirement planning, debt reduction, education funding, and wealth accumulation.',
            "Performed in-depth financial analysis to identify areas for improvement and opportunities for optimizing clients' financial well-being.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
];

const projects = [
    {
        name: 'Car Rent',
        description:
            'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: carrent,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Job IT',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Trip Guide',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: tripguide,
        source_code_link: 'https://github.com/',
    },
];

export { services, technologies, experiences, testimonials, projects };
