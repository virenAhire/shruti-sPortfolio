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
        title: 'Portfolio Management',
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
        title: 'Mutual fund portfolio construction',
        company_name: '',
        icon: wt_logo,
        iconBg: '#383E56',
        date: 'March 2022 - Present',
        points: [
            'Demonstrated a meticulous approach to building portfolios.',
            'Integrated a deep understanding of diverse asset classes, market dynamics, and risk management principles',
            'Demonstrated a proactive approach to managing and mitigating risks associated with investment opportunities.',
            'Ensured portfolios are well-balanced and resilient to market volatility.',
        ],
    },
    {
        title: 'Stock trading',
        company_name: '',
        icon: updeed_logo,
        iconBg: '#E6DEDD',
        date: 'April 2022 - Present',
        points: [
            'Proficient in utilizing financial tools for fundamental and technical analyses.',
            'Commits to staying updated on market news, economic indicators, and global events.',
            'Integrates fundamental and technical analyses for a balanced approach.',
            'Demonstrates a commitment to continuous improvement and staying informed for strategic decision-making',
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
            'Shruti brings a unique blend of theoretical expertise and practical insight to the financial landscape. Her meticulous research and analytical proficiency make her a trusted advisor for navigating complex market trends.',
        name: 'Shruti Tripathi',
        designation: '',
        company: '',
        image: '/assets/tripathi.jpg',
    },
    {
        testimonial:
            "Shruti's expertise in mutual fund management is truly commendable. Her strategic approach to analyzing market trends and making informed decisions reflects a profound understanding of the nuances within the mutual fund landscape.",
        name: 'Anisha',
        designation: '',
        company: '',
        image: '/assets/anagha.jpg',
    },
    {
        testimonial:
            " Shruti's grounded approach to trading, coupled with a keen eye for emerging trends, reflects a deep understanding of financial markets. Shruti is not only proficient in using financial tools but also committed to continuous improvement.",
        name: 'Anagha Khandelwal',
        designation: '',
        company: '',
        image: '/assets/anisha.jpg',
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
