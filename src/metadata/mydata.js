
import { ReactComponent as ReactLogo } from '../common/images/skills/reactjs.svg'
import { ReactComponent as JSLogo } from '../common/images/skills/js.svg'
import { ReactComponent as TSLogo } from '../common/images/skills/ts.svg'
import { ReactComponent as InfyLogo } from '../common/images/infosys-1.svg'
import { ReactComponent as TCSLogo } from '../common/images/tcs.svg'
import { ReactComponent as JavaLogo } from '../common/images/skills/java.svg'
import { ReactComponent as SpringbootLogo } from '../common/images/skills/springboot.svg'
import { ReactComponent as MySQLLogo } from '../common/images/skills/mysql-icon.svg'
import { ReactComponent as AndroidLogo } from '../common/images/skills/android.svg'
import { ReactComponent as AzureDevops } from '../common/images/skills/azuredevops.svg'
import { ReactComponent as SonarQubeLogo } from '../common/images/skills/sonarqube.svg'
import { ReactComponent as JiraLogo } from '../common/images/skills/jira-1.svg'
import { ReactComponent as JenkinsLogo } from '../common/images/skills/jenkins.svg'
import { ReactComponent as IKEALogo } from '../common/images/Ikea_logo.svg'
import { ReactComponent as NIALogo } from '../common/images/New_India_Assurance.svg'
import { ReactComponent as SGRELogo } from '../common/images/Siemens_Gamesa_logo.svg'
import { ReactComponent as JestLogo } from '../common/images/skills/Jest.svg'

export const mydata = {
    sociallinks: {
        linkedin: 'https://www.linkedin.com/in/viswarajvs',
        insta: 'https://www.instagram.com/viswarajvs/',
        fb: 'https://www.facebook.com/viswarajvs',
        phone: '+918129366028',
        email: 'viswarajvs@gmail.com',
        whatsapp: 'https://wa.me/+918129366028'
    },
    profile: {
        name: 'Viswaraj V S',
        bio: 'Specializing in React.js and TypeScript, with strong skills in DevOps practices and a working knowledge of Java Spring Boot. With over 7 years of experience in major companies, known for creating innovative, user-centric interfaces. Excels in cross-team collaboration to deliver exceptional products on time and within budget, focusing on responsive applications that enhance user experiences.'
    },
    skills: [
        {
            name: 'ReactJs',
            exp: '7 years',
            description: '7 years experience',
            logo: ReactLogo,
            proficiency: 100
        },
        {
            name: 'JavaScript',
            exp: '8 years',
            description: '8 years experience',
            logo: JSLogo,
            proficiency: 95
        },
        {
            name: 'Typescript',
            exp: '3 years',
            description: '3 years experience',
            logo: TSLogo,
            proficiency: 80
        },
        {
            name: 'Jest',
            exp: '6 years',
            description: '7 years experience',
            logo: JestLogo,
            proficiency: 100
        },
        {
            name: 'Java',
            exp: '7 years',
            description: '7 years experience',
            logo: JavaLogo,
            proficiency: 70
        },
        {
            name: 'SpringBoot',
            exp: '3 years',
            description: '3 years experience',
            logo: SpringbootLogo,
            proficiency: 70
        },
        {
            name: 'Azure DevOps',
            exp: '4 years',
            description: '4 years experience',
            logo: AzureDevops,
            proficiency: 80
        },
        {
            name: 'Jira',
            exp: '6 years',
            description: '6 years experience',
            logo: JiraLogo,
            proficiency: 80
        },
        {
            name: 'MySQL',
            exp: '5 years',
            description: '5 years experience',
            logo: MySQLLogo,
            proficiency: 60
        },
        {
            name: 'SonarQube',
            exp: '4 years',
            description: '4 years experience',
            logo: SonarQubeLogo,
            proficiency: 80
        },
        {
            name: 'Jenkins',
            exp: '2 years',
            description: '2 years experience',
            logo: JenkinsLogo,
            proficiency: 60
        },
        {
            name: 'Android',
            exp: '2 years',
            description: '2 years experience',
            logo: AndroidLogo,
            proficiency: 60
        },
    ],
    experience: [
        {
            companyname: 'Infosys Pvt. Ltd.',
            startdate: 'Dec-12-2022',
            enddate: null,
            designation: 'Senior Associate Consultant',
            location: 'Trivandrum',
            logo: InfyLogo,
            description: 'Currently working at Infosys as a ReactJS Frontend Developer, leading the frontend team for more than 2 years. Responsible for developing reusable UI components, ensuring high code quality, overseeing deployment processes, and strategic planning for frontend development.'
        },
        {
            companyname: 'Tata Consultancy Services',
            startdate: 'Dec-20-2021',
            enddate: 'Dec-10-2022',
            designation: 'IT Analyst',
            location: 'Trivandrum',
            logo: TCSLogo,
            description: 'Specialized in full-stack development, creating responsive web pages with HTML, CSS, JavaScript, ReactJS, and Redux. Worked on the backend with Java Spring Boot, delivering robust and efficient web applications.'
        },
        {
            companyname: 'Tata Consultancy Services',
            startdate: 'Mar-20-2017',
            enddate: 'Dec-20-2021',
            designation: 'Software Engineer',
            location: 'Kolkata',
            logo: null,
            continueLogo: TCSLogo,
            description: 'Focused on building and maintaining PL/SQL scripts, managing databases, and providing technical support to end-users. Additionally, developed custom tools using Java, Swing, and WPF to enhance user experience and streamline operations.'
        }
    ],
    projects: [
        {
            company: InfyLogo,
            name: 'TowerSelect',
            shortdesc: 'A web-based specialized application used within SGRE Energy for performing cost analysis to optimize design and deployment.',
            role: 'Frontend Developer & Team Lead',
            client: 'Siemens Gamesa',
            techstack: ['ReactJS', 'Azure DevOps', 'Typescript'],
            logo: SGRELogo,
            roles: [
                'Contributed as the frontend lead, responsible for collaborating with Product Owners and Business Analysts to gather new requirements, providing estimations, and overseeing development and deployment support.',
                'Integrated and optimized OpenStreetMap and Google Maps APIs to enhance location-based features and user experience within the project.',
                'Refactored code to improve reusability, reducing development time and costs for future features and enhancements.',
                'Developed multiple proof of concepts (POCs) to demonstrate potential solutions and features to the client, leading to successful implementation and approval.',
                'Worked closely with the client in an Agile environment, participating in sprint planning, daily stand-ups, and regular feedback sessions to ensure alignment and timely delivery of project goals.',
                'Implemented code coverage with Jest and resolved SonarQube issues to ensure comprehensive test coverage and uphold high-quality code standards.',
                'Conducted code reviews, approved pull requests, and maintained thorough documentation to ensure code quality and project clarity.'
            ]
        },
        {
            company: TCSLogo,
            name: 'Partner Portal',
            shortdesc: 'A web-based, responsive online portal and cross-platform mobile application where end users can avail of features like sales declaration, request transactions, and content management.',
            role: 'Full Stack Developer',
            client: 'IKEA',
            techstack: ['ReactJS', 'Java', 'Spring Boot', 'MySQL'],
            logo: IKEALogo,
            roles: [
                'Developed new components, implemented pagination, utilized high-order components (HOCs), and integrated skeleton loading to enhance user experience and performance in the application.',
                'Developed mobile-responsive screens using ReactJS to ensure an optimal user experience across different devices and screen sizes.',
                'Developed a centralized email notification microservice that utilized HTML templates for dynamic and customizable email content.',
                'Managed application state using Redux to ensure predictable and efficient state management.',
                'Developed micro-services that utilized Spring framework along with various frameworks like Spring MVC, Spring Data JPA that provide RESTful APIs that can be consumed by other applications.',
                'Developed JUnit test case for different module with code coverage up to 90%.',
                'Configured SonarLint in IntelliJ IDEA IDE to detect quality and security issues.',
                'Worked with the build tools like Jenkins.',
                'Closely worked with the client in Agile environment.'
            ]
        },
        {
            company: TCSLogo,
            name: 'New India Assurance',
            shortdesc: 'A web-based platform using which customers can buy new policies or renew old ones. Includes core insurance functionalities like underwriting, sales data, data analysis tool, etc.',
            role: 'Support Engineer',
            client: 'Agriculture Insurance Company',
            techstack: ['PL/SQL', 'HP ALM', 'Java', 'Swing'],
            logo: NIALogo,
            roles: [
                'Build, maintain, and enhance scripts in PL/SQL to resolve the most common and account-related issues in insurance transactions.',
                'Providing technical support to end-users for any application-related or data-related issues.',
                'Analyzing and resolving any production-related issues.',
                'Providing customers with step-by-step guidance to resolve technical problems.',
                'Prioritizing technical issues and escalating issues to the technical development team.',
                'Provide prompt and accurate feedback to customers.'
            ]
        }
    ],
    personal: {
        apiKey: 'AIzaSyAQVFNwcOTlO7xSEBApYdsxIt9XgyRVIT8',
        ytlink: 'https://www.youtube.com/@ViswarajVeeyes/featured',
        youtube: [
            { url: 'https://www.youtube.com/embed/VuRHHHaGjfc?si=QgGGT-G9Mp1d2NDy', id: 'VuRHHHaGjfc' },
            { url: 'https://www.youtube.com/embed/bCyQTKUZdp4?si=7GtT6H6BUD-oGvZ3', id: 'bCyQTKUZdp4' },
            {
                url: 'https://www.youtube.com/embed/NVqr0rYRBVo?si=IKwd86QDH5yQO_Ky', id: 'NVqr0rYRBVo'
            },
            {
                url: 'https://www.youtube.com/embed/5CfHPQtl9zE?si=tJGx08q_56mTpH-8', id: '5CfHPQtl9zE'
            }
        ]
    }
}