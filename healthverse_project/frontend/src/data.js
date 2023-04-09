import { BiBot } from "react-icons/bi";
import { IoAccessibility } from 'react-icons/io5';
import { SiHelpscout } from "react-icons/si";
import { FcCollaboration } from 'react-icons/fc';
import { SiXdadevelopers } from "react-icons/si";
import { RiMentalHealthFill } from "react-icons/ri";
import { BsFillDatabaseFill } from "react-icons/bs";
import { MdEmergency} from "react-icons/md";


// export const MenuItems = [
//     {
//         title: "Register",
//         path: "/",
//         cName: "dropdown-link",
//       },

//       {
//         title: "Login",
//         path: "/",
//         cName: "dropdown-link",
//       },

//       {
//         title: "My Account",
//         path: "/",
//         cName: "dropdown-link",
//       },

//       {
//         title: "Logout",
//         path: "/",
//         cName: "dropdown-link",
//       },
// ];


export const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/aboutus",
	},

	// {
	// 	name: "Services",
	// 	path: "/services",
	// },
	
	// {
	// 	name: "First Aid",
	// 	path: "/firstaid",
	// },
	{
		name: "Contact",
		path: "/contact",
	},
	
];

export const services = [
	{
		id: 1,
		icon: <BiBot />,
		title: "HealthBot",
		info: "An intelligent and personalized health assistant service that automates healthcare interactions and conversations.",
		path: "/services/111",
	},
	{
		id: 2,
		icon: <RiMentalHealthFill />,
		title: "HealthAcademy",
		info: "Explore a wealth of knowledge on primary healthcare topics with our informative video and article library.",
		path: "/education",
	},
	{
		id: 3,
		icon: <BsFillDatabaseFill />,
		title: "HealthRecord",
		info: "Effortlessly manage and securely store all your healthcare records with our advanced CareRecord service.",
		path: "/services/333",
	},
	{
		id: 4,
		icon: <MdEmergency />,
		title: "USSD HealthConnect",
		info: "Get quick, reliable, and professional emergency response services when you need them most.",
		path: "/services/444",
	},
	
];

export const values = [
	{
		id: 1,
		icon: <IoAccessibility />,
		title: "Accessibility",
		desc: "We make quality primary healthcare accessible to everyone, regardless of location or socio-economic status..",
	},
	{
		id: 2,
		icon: <SiHelpscout />,
		title: "Empowerment",
		desc: "We empower users with the knowledge and resources they need to take control of their own health..",
	},
	{
		id: 3,
		icon: <FcCollaboration />,
		title: "Collaboration",
		desc: "We collaborate closely with healthcare professionals, patients, and local communities to develop efficient and long-lasting solutions that meet their specific needs..",
	},
	{
		id: 4,
		icon: <SiXdadevelopers />,
		title: "Innovation",
		desc: "We leverage the latest technology to create a more accessible and efficient healthcare system for everyone, constantly exploring new ways to improve healthcare outcomes..",
	},
];

export const faqs = [
	{
		id: 1,
		question: "What is primary healthcare?",
		answer: "Primary healthcare is the first point of contact for individuals seeking medical attention. It involves the provision of basic healthcare services, including prevention, diagnosis, treatment, and management of common illnesses and injuries."
		},
		
		{
		id: 2,
		question: "What are the challenges facing primary healthcare in Africa?",
		answer: "Primary healthcare in Africa faces several challenges, including inadequate funding, inadequate infrastructure, shortage of skilled health workers, poor access to medicines and medical supplies, and inadequate health information systems."
		},
		
		{
		id: 3,
		question: "How does your product improve access to primary healthcare in Africa?",
		answer: "Our product provides a digital platform that connects patients with healthcare providers, enabling them to access healthcare services from anywhere at any time. This increases access to healthcare for individuals who may face geographical or financial barriers."
		},
		
		{
		id: 4,
		question: "What types of healthcare services can be accessed through your product?",
		answer: "Our product provides access to a range of primary healthcare services, including consultations with licensed healthcare providers, prescription refills, lab tests, and health education resources."
		},
		
		{
		id: 5,
		question: "Is the information provided through your product secure?",
		answer: "Yes, we take data privacy and security seriously. We employ encryption and other security measures to protect the personal information of our users."
		},
		
		{
		id: 6,
		question: "Can anyone use your product?",
		answer: "Our product is available to anyone with an internet connection and a device capable of accessing our platform. However, our services are currently limited to specific geographic regions within Africa."
		},
		
		{
		id: 7,
		question: "How do I sign up for your product?",
		answer: "You can sign up for our product by downloading our mobile application or visiting our website. Follow the instructions provided to create an account and access our services."
		}
];

export const testimonials = [
	{
		id: 1,
		name: "Kwame Owusu",
		quote:
		"HealthVerse has transformed the way I manage my health. With just a few clicks, I can access all my medical records and schedule appointments with my doctor. This product has made healthcare more convenient and accessible for me. I highly recommend HealthVerse to anyone who wants to take charge of their health!",
		job: "Entrepreneur",
		avatar: require("./images/avatar1.jpg"),
		},
		
		{
		id: 2,
		name: "Gifty Mensah",
		quote:
		"HealthVerse is a lifesaver! I used to struggle with managing my medications, but with HealthVerse, I get timely reminders to take my medication, and I can easily track my progress. This product has made a significant impact on my health, and I am grateful to the HealthVerse team for creating such an amazing solution.",
		job: "Teacher",
		avatar: require("./images/avatar2.jpg"),
		},
		
		{
		id: 3,
		name: "Yaw Ansah",
		quote:
		"HealthVerse has revolutionized access to healthcare in our community. With this product, people can easily book appointments with healthcare providers and get timely reminders. HealthVerse is an excellent example of how technology can transform healthcare, and I am excited to see the positive impact it will have on the lives of many people.",
		job: "Medical Practitioner",
		avatar: require("./images/avatar3.jpg"),
		},
		{
			id: 4,
			name: "Esi Adu",
			quote:
			"HealthVerse is a must-have for anyone who values their health. This product has made it easy for me to track my progress and communicate with my doctor. The platform is user-friendly, and the customer support team is always available to help. I highly recommend HealthVerse to anyone who wants to take control of their health!",
			job: "Banker",
			avatar: require("./images/avatar4.jpg"),
			},
			
			{
			id: 5,
			name: "Yaw Frimpong",
			quote:
			"HealthVerse is the future of healthcare! As a healthcare provider, I have seen how this product has transformed the way we deliver healthcare services. HealthVerse has made it easier for us to communicate with our patients and monitor their progress remotely. This product is truly a game-changer in the healthcare industry.",
			job: "Medical Practitioner",
			avatar: require("./images/avatar5.jpg"),
			},
];

export const courses = [
	{
		id: 1,
		name: "Silver Package",
		desc: "This package is perfect for beginners who need constant help",
		price: 29.99,
		features: [
			{ feature: "First Feature", available: true },
			{ feature: "Second Feature", available: true },
			{ feature: "Third Feature", available: true },
			{ feature: "Fourth Feature", available: true },
			{ feature: "Fifth Feature", available: true },
			{ feature: "Fifth Feature Plus", available: false },
			{ feature: "Sixth Feature", available: false },
			{ feature: "Seventh Feature", available: false },
			{ feature: "Seventh Feature Plus", available: false },
			{ feature: "Eighth Feature", available: false },
			{ feature: "Ninth Feature", available: false },
			{ feature: "Tenth Feature", available: false },
			{ feature: "Eleventh Feature", available: false }
		],
	},
	{
		id: 2,
		name: "Gold Package",
		desc: "This is the perfect package for beginners who know what their doing",
		price: 49.99,
		features: [
			{ feature: "First Feature", available: true },
			{ feature: "Second Feature", available: true },
			{ feature: "Third Feature", available: true },
			{ feature: "Fourth Feature", available: true },
			{ feature: "Fifth Feature", available: true },
			{ feature: "Fifth Feature Plus", available: true },
			{ feature: "Sixth Feature", available: true },
			{ feature: "Seventh Feature", available: true },
			{ feature: "Seventh Feature Plus", available: true },
			{ feature: "Eighth Feature", available: false },
			{ feature: "Ninth Feature", available: false },
			{ feature: "Tenth Feature", available: false },
			{ feature: "Eleventh Feature", available: false }
		],
	},
	{
		id: 3,
		name: "Platinum Package",
		desc: "This package is perfect for busy people who need home service",
		price: 89.99,
		features: [
			{ feature: "First Feature", available: true },
			{ feature: "Second Feature", available: true },
			{ feature: "Third Feature", available: true },
			{ feature: "Fourth Feature", available: true },
			{ feature: "Fifth Feature", available: true },
			{ feature: "Fifth Feature Plus", available: true },
			{ feature: "Sixth Feature", available: true },
			{ feature: "Seventh Feature", available: true },
			{ feature: "Seventh Feature Plus", available: true },
			{ feature: "Eighth Feature", available: true },
			{ feature: "Ninth Feature", available: true },
			{ feature: "Tenth Feature", available: true },
			{ feature: "Eleventh Feature", available: true }
		],
	},
];

// const Trainer1 = require("./images/trainer1.png");
// const Trainer2 = require("./images/trainer2.jpg");
// const Trainer3 = require("./images/trainer3.jpg");
// const Trainer4 = require("./images/trainer4.jpg");
// const Trainer5 = require("./images/trainer5.jpg");
// const Trainer6 = require("./images/trainer6.jpg");

// export const trainers = [
// 	{
// 		id: 1,
// 		image: Trainer1,
// 		name: "Castro Mbithi",
// 		job: "Founder | Owner | CEO",
// 		socials: [
// 			"https://instagram.com/",
// 			"https://twitter.com/",
// 			"https://facebook.com/",
// 			"https://linkedin.com/",
// 		],
// 	},
// 	{
// 		id: 2,
// 		image: Trainer2,
// 		name: "Daniel vinyo",
// 		job: "Speed Trainer",
// 		socials: [
// 			"https://instagram.com/",
// 			"https://twitter.com/",
// 			"https://facebook.com/",
// 			"https://linkedin.com/",
// 		],
// 	},
// 	{
// 		id: 3,
// 		image: Trainer3,
// 		name: "Edem Quist",
// 		job: "Flexibility Trainer",
// 		socials: [
// 			"https://instagram.com/",
// 			"https://twitter.com/",
// 			"https://facebook.com/",
// 			"https://linkedin.com/",
// 		],
// 	},
// 	{
// 		id: 4,
// 		image: Trainer4,
// 		name: "Shatta Wale",
// 		job: "Body Composition Trainer",
// 		socials: [
// 			"https://instagram.com/",
// 			"https://twitter.com/",
// 			"https://facebook.com/",
// 			"https://linkedin.com/",
// 		],
// 	},
// 	{
// 		id: 5,
// 		image: Trainer5,
// 		name: "Diana Ayi",
// 		job: "Circuit Trainer",
// 		socials: [
// 			"https://instagram.com/",
// 			"https://twitter.com/",
// 			"https://facebook.com/",
// 			"https://linkedin.com/",
// 		],
// 	},
// 	{
// 		id: 6,
// 		image: Trainer6,
// 		name: "Wayne Carter",
// 		job: "Physical Intelligence Trainer",
// 		socials: [
// 			"https://instagram.com/",
// 			"https://twitter.com/",
// 			"https://facebook.com/",
// 			"https://linkedin.com/",
// 		],
// 	},
// ];
