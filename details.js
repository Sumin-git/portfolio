
import { FaPaintBrush, FaCode, FaLaptop, FaUserCheck, FaHeadset, FaFlag } from 'react-icons/fa';
import './banner.css';
import { Collections } from '@mui/icons-material';

export const about = {
    item: `I am a passionate full stack web developer with a deep understanding of both frontend and backend technologies. 
    I enjoy creating dynamic, responsive web applications that provide seamless user experiences. 
    My expertise spans across a wide range of technologies including:
  
    - Frontend: HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS
    - Backend: Node.js, Express.js, MySQL, MongoDB, RESTful APIs
    
    I am skilled in building scalable and efficient applications, from crafting pixel-perfect UI components to handling server-side logic and databases. 
    Constantly learning and staying up-to-date with the latest trends and best practices, I aim to build innovative solutions that solve real-world problems.`
  };
  
  
  export const service=[ {
    icon: <FaPaintBrush />,
    title: "Creative Design",
    description: "Leveraging artistic elements and aesthetic principles to craft visually appealing and engaging user experiences."
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    description: "Writing code that is well-structured, readable, and maintainable. It involves following coding best practices."
  },
  {
    icon: <FaLaptop />,
    title: "User Interface",
    description: "Creating intuitive and user-friendly designs that prioritize usability, accessibility, and a seamless user experience."
  },
  {
    icon: <FaUserCheck />,
    title: "User Experience",
    description: "Understanding user behaviors, needs, and preferences to create interfaces that are intuitive, efficient, and enjoyable."
  },
  {
    icon: <FaHeadset />,
    title: "Fast Support",
    description: "Addressing and resolving user-reported issues or inquiries related to the website or application."
  },
  {
    icon: <FaFlag />,
    title: "Branding",
    description: "Creating consistent and cohesive brand experiences through the use of logos, color schemes, typography, and branding assets."
  }
  ];

  export const work=[{
    item:"Let work together on your next project",
    describe: "Colabration is the key! Lets join forces and compine our skills to tackle your next project ith a powerful synergy that guarantees success."    
  }];

  export const testimonials = [
    {
      company: 'Unixone',
      feedback: 'Sumin has been an exceptional developer, showing great dedication and problem-solving skills. His work has significantly improved our project outcomes.',
      author: 'Manager at Unixone'
    },
    {
      company: 'Airtm',
      feedback: 'Working with Sumin was a pleasure. His expertise in full-stack development helped us optimize our application and enhance user experience.',
      author: 'Project Lead at Airtm'
    },
    {
      company: 'Portal',
      feedback: 'Sumin consistently delivered high-quality work on time. He played a key role in our development team and demonstrated excellent communication skills.',
      author: 'CTO at Portal'
    }
  ];

  export const project = {
    videoSrc: '\WhatsApp Video 2024-11-19 at 12.26.50_e2aad6f6.mp4', // Replace with your video path
    title: 'Hospital Management System',
    description: 'A full-stack application that manages hospital operations including patient registration, billing, and scheduling.',
    technologies: [
      { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
    ]
  };
  

//   export const banner=[
//     {
//       src:"\images.jpeg", 
//       para:"Detail information about Banner 1"
//     },
//     {
//       src:"https://uizard.io/static/14f6d8934c3c877b87e07ba591471078/a8e47/ac6597f9ca9857740d4b2b5ee17ddc4557fd083e-1440x835.png", 
//       para:"Detail information about Banner 2"
//     },
//     {
//       src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_4pI3mLqo16X1lzZpM7ErsR1iDVcLziuFHw&s", 
//       para:"Detail information about Banner 3"
//     }
//  ];

export const shopify = {
  videoSrc: '\shopyfy.mp4', // Replace with your video path
  title: 'Shopify Online Marketing',
  description: 'This project uses the MERN stack to create a fully functional e-commerce website with a payment gateway. The site has different views for users and admins, and allows customers to add items to their cart and generate bills.',
  technologies: [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
  ]
};

export const expenseTracker = {
  videoSrc: '\Untitled video - Made with Clipchamp.mp4', // Replace with your video path
  title: 'Expense Tracker Application',
  description: 'This project is built using C#, .NET Framework, and MS SQL. It provides users with an intuitive platform to track their income and expenses. Features include categorizing transactions, generating detailed reports, and managing budgets effectively.',
  technologies: [
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: '.NET Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
    { name: 'MS SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' }
  ]
};

export const banners = [
  { id: 1, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpKJqThXag3gypq_59od0G4F4iuwY4R2fTQ&s', text: 'Expense management involves tracking, organizing, and controlling financial transactions to ensure efficient use of resources. It helps individuals or businesses monitor income and expenses, categorize spending, set budgets, and identify areas for cost-saving.' },
  { id: 2, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9Usxd2QVo_4QPjceOPnkmMr8ulMvaMXX2w&s', text: 'An Expense Tracker is a tool or application designed to help individuals or businesses monitor and manage their financial transactions. It allows users to log and categorize their income and expenses, providing a clear overview of their financial situation.' },
  { id: 3, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ROmrx7qpiUDuxUysQmGYLpKsUxCx1tQIqA&s' , text: 'When designing an Expense Tracking application or dashboard, the goal is to create a user-friendly, intuitive interface that allows users to easily input, view, and analyze their financial transactions.' },
  { id: 4, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFUHE6lehGG-akBGMypUrx-58amQ2-aRRyA&s', text: 'In an Expense Tracker project, the "adding amount" feature allows users to log their financial transactions by inputting income or expense details. Users can specify the amount, select a category (e.g., food, transport, entertainment), and provide a description for better tracking.' },
  { id: 5, imageSrc: 'https://user-images.githubusercontent.com/32844693/66344648-a5ce6a80-e94e-11e9-971c-0c4fe62d59ae.PNG', text: 'It also helps identify spending patterns and trends, making it easier to plan future budgets or financial goals.Together, notifications and time tracking enhance user engagement and improve financial management by ensuring timely updates and organized records of expenses.' },
  { id: 6, imageSrc: 'https://s3.us-west-2.amazonaws.com/public.notion-static.com/template/eae3449f-a309-44d9-8d14-b3f78c86bbf6/desktop.png', text: 'Monitor their financial status at the end of each month by calculating the total income and expenses. It provides a clear picture of whether the user is within their budget or overspending. The monthly balance is calculated by subtracting total expenses from total income for the month, giving the user an insight into their financial health.' },
  { id: 7, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiSUYggfjZljpwXpzmypuYTEZjjYFqr_biw&s', text: 'Visual representation of their financial data, helping them quickly identify spending patterns, trends, and areas where they can improve their budgeting habits. Graphs and charts make it easier to analyze income, expenses, and monthly balance at a glance, offering insights that are often difficult to grasp from raw data alone.' },
  { id: 8, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Xfc4likZzcNZDAHpuxSP9OeMOya4CmLcNQ&s', text: 'Setting up a dashboard for an Expense Tracker project involves creating a clean, user-friendly interface that provides users with an overview of their financial status, including income, expenses, budgets, and graphical representations of their financial health. Below is an outline for setting up a dashboard with key components and features.' },
];
