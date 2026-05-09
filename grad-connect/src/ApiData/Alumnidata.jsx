
const alumni = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Aarav Sharma",
    batch: 2020,
    cgpa: 8.9,
    currentPackage: 18,
    company: "Google",
    domain: "Backend Development",
    skills: ["Node.js", "MongoDB", "System Design"]
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Priya Verma",
    batch: 2021,
    cgpa: 9.1,
    currentPackage: 16,
    company: "Microsoft",
    domain: "Machine Learning",
    skills: ["Python", "TensorFlow", "Deep Learning"]
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Rohan Mehta",
    batch: 2019,
    cgpa: 8.5,
    currentPackage: 20  ,
    company: "Amazon",
    domain: "Frontend Development",
    skills: ["React", "JavaScript", "UI Design"]
  },
  {
    id: 4,
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Sneha Kapoor",
    batch: 2022,
    cgpa: 9.0,
    currentPackage: 12,
    company: "Adobe",
    domain: "App Development",
    skills: ["Flutter", "Firebase", "Dart"]
  },
  {
    id: 5,
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Kabir Singh",
    batch: 2020,
    cgpa: 8.7,
    currentPackage: 15,
    company: "Infosys",
    domain: "Web Development",
    skills: ["HTML", "CSS", "React"]
  },
  {
    id: 6,
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Ananya Rao",
    batch: 2021,
    cgpa: 8.8,
    currentPackage: 17,
    company: "Meta",
    domain: "Data Science",
    skills: ["Python", "Pandas", "Machine Learning"]
  },
  {
    id: 7,
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Aditya Jain",
    batch: 2018,
    cgpa: 8.3,
    currentPackage: 14,
    company: "TCS",
    domain: "Cloud Computing",
    skills: ["AWS", "Docker", "Linux"]
  },
  {
    id: 8,
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Neha Gupta",
    batch: 2022,
    cgpa: 9.4,
    currentPackage: 21,
    company: "Netflix",
    domain: "UI/UX Design",
    skills: ["Figma", "Adobe XD", "Wireframing"]
  },
  {
    id: 9,
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Yash Malhotra",
    batch: 2020,
    cgpa: 8.6,
    currentPackage: 13,
    company: "Wipro",
    domain: "Cyber Security",
    skills: ["Networking", "Ethical Hacking", "Linux"]
  },
  {
    id: 10,
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Isha Patel",
    batch: 2019,
    cgpa: 9.2,
    currentPackage: 19,
    company: "Apple",
    domain: "iOS Development",
    skills: ["Swift", "Xcode", "UI Design"]
  },
  {
  id: 11,
  photo: "https://randomuser.me/api/portraits/men/11.jpg",
  name: "Rahul Khanna",
  batch: 2018,
  cgpa: 8.4,
  currentPackage: 11,
  company: "IBM",
  domain: "AI",
  skills: ["Python", "AI", "NLP"]
},

{
  id: 12,
  photo: "https://randomuser.me/api/portraits/women/12.jpg",
  name: "Simran Kaur",
  batch: 2023,
  cgpa: 9.5,
  currentPackage: 22,
  company: "Oracle",
  domain: "Backend Development",
  skills: ["Java", "Spring Boot", "SQL"]
},

{
  id: 13,
  photo: "https://randomuser.me/api/portraits/men/13.jpg",
  name: "Vikram Sethi",
  batch: 2021,
  cgpa: 8.1,
  currentPackage: 10,
  company: "Capgemini",
  domain: "Testing",
  skills: ["Selenium", "Java", "Automation"]
},

{
  id: 14,
  photo: "https://randomuser.me/api/portraits/women/14.jpg",
  name: "Pooja Nair",
  batch: 2020,
  cgpa: 8.9,
  currentPackage: 18,
  company: "Accenture",
  domain: "DevOps",
  skills: ["Docker", "Kubernetes", "AWS"]
},

{
  id: 15,
  photo: "https://randomuser.me/api/portraits/men/15.jpg",
  name: "Arjun Das",
  batch: 2019,
  cgpa: 7.9,
  currentPackage: 9,
  company: "Cognizant",
  domain: "Frontend Development",
  skills: ["React", "CSS", "Bootstrap"]
},

{
  id: 16,
  photo: "https://randomuser.me/api/portraits/women/16.jpg",
  name: "Meera Joshi",
  batch: 2022,
  cgpa: 9.3,
  currentPackage: 24,
  company: "Google",
  domain: "Machine Learning",
  skills: ["TensorFlow", "Python", "NLP"]
},

{
  id: 17,
  photo: "https://randomuser.me/api/portraits/men/17.jpg",
  name: "Kunal Arora",
  batch: 2018,
  cgpa: 8.0,
  currentPackage: 12,
  company: "Dell",
  domain: "Networking",
  skills: ["CCNA", "Linux", "Security"]
},

{
  id: 18,
  photo: "https://randomuser.me/api/portraits/women/18.jpg",
  name: "Ritika Sen",
  batch: 2021,
  cgpa: 8.7,
  currentPackage: 15,
  company: "Paytm",
  domain: "App Development",
  skills: ["Flutter", "Firebase", "REST API"]
},

{
  id: 19,
  photo: "https://randomuser.me/api/portraits/men/19.jpg",
  name: "Harsh Vardhan",
  batch: 2020,
  cgpa: 8.2,
  currentPackage: 13,
  company: "Zoho",
  domain: "Backend Development",
  skills: ["Node.js", "Express", "MySQL"]
},

{
  id: 20,
  photo: "https://randomuser.me/api/portraits/women/20.jpg",
  name: "Nidhi Bansal",
  batch: 2019,
  cgpa: 9.0,
  currentPackage: 20,
  company: "Adobe",
  domain: "UI/UX Design",
  skills: ["Figma", "Photoshop", "UI Design"]
},

{
  id: 21,
  photo: "https://randomuser.me/api/portraits/men/21.jpg",
  name: "Dev Malhotra",
  batch: 2021,
  cgpa: 8.4,
  currentPackage: 17,
  company: "Uber",
  domain: "Backend Development",
  skills: ["Node.js", "Redis", "PostgreSQL"]
},

{
  id: 22,
  photo: "https://randomuser.me/api/portraits/women/22.jpg",
  name: "Aditi Sharma",
  batch: 2020,
  cgpa: 9.2,
  currentPackage: 23,
  company: "Google",
  domain: "AI Research",
  skills: ["Python", "PyTorch", "Computer Vision"]
},

{
  id: 23,
  photo: "https://randomuser.me/api/portraits/men/23.jpg",
  name: "Sarthak Jain",
  batch: 2019,
  cgpa: 8.1,
  currentPackage: 12,
  company: "Infosys",
  domain: "Cyber Security",
  skills: ["Ethical Hacking", "Linux", "Networking"]
},

{
  id: 24,
  photo: "https://randomuser.me/api/portraits/women/24.jpg",
  name: "Riya Kapoor",
  batch: 2022,
  cgpa: 9.0,
  currentPackage: 18,
  company: "Adobe",
  domain: "UI/UX Design",
  skills: ["Figma", "Adobe XD", "Prototyping"]
},

{
  id: 25,
  photo: "https://randomuser.me/api/portraits/men/25.jpg",
  name: "Manav Verma",
  batch: 2021,
  cgpa: 7.9,
  currentPackage: 11,
  company: "TCS",
  domain: "Cloud Computing",
  skills: ["AWS", "Docker", "Kubernetes"]
},

{
  id: 26,
  photo: "https://randomuser.me/api/portraits/women/26.jpg",
  name: "Kriti Nanda",
  batch: 2023,
  cgpa: 9.5,
  currentPackage: 27,
  company: "Microsoft",
  domain: "Machine Learning",
  skills: ["TensorFlow", "Deep Learning", "Python"]
},

{
  id: 27,
  photo: "https://randomuser.me/api/portraits/men/27.jpg",
  name: "Aryan Khurana",
  batch: 2020,
  cgpa: 8.6,
  currentPackage: 15,
  company: "Paytm",
  domain: "App Development",
  skills: ["Flutter", "Firebase", "REST API"]
},

{
  id: 28,
  photo: "https://randomuser.me/api/portraits/women/28.jpg",
  name: "Naina Sethi",
  batch: 2018,
  cgpa: 8.8,
  currentPackage: 19,
  company: "Amazon",
  domain: "Data Science",
  skills: ["Pandas", "SQL", "Machine Learning"]
},

{
  id: 29,
  photo: "https://randomuser.me/api/portraits/men/29.jpg",
  name: "Lakshya Arora",
  batch: 2022,
  cgpa: 8.0,
  currentPackage: 13,
  company: "Wipro",
  domain: "Frontend Development",
  skills: ["React", "Tailwind CSS", "JavaScript"]
},

{
  id: 30,
  photo: "https://randomuser.me/api/portraits/women/30.jpg",
  name: "Tanisha Mehra",
  batch: 2021,
  cgpa: 9.3,
  currentPackage: 25,
  company: "Netflix",
  domain: "DevOps",
  skills: ["CI/CD", "Docker", "AWS"]
},

{
  id: 31,
  photo: "https://randomuser.me/api/portraits/men/31.jpg",
  name: "Rajat Kapoor",
  batch: 2019,
  cgpa: 8.2,
  currentPackage: 14,
  company: "Intel",
  domain: "Embedded Systems",
  skills: ["C++", "Arduino", "IoT"]
},

{
  id: 32,
  photo: "https://randomuser.me/api/portraits/women/32.jpg",
  name: "Shreya Malhotra",
  batch: 2020,
  cgpa: 9.0,
  currentPackage: "18 LPA",
  company: "Samsung",
  domain: "Android Development",
  skills: ["Kotlin", "Android Studio", "Firebase"]
},

{
  id: 33,
  photo: "https://randomuser.me/api/portraits/men/33.jpg",
  name: "Mohit Saini",
  batch: 2018,
  cgpa: 7.8,
  currentPackage: 10,
  company: "HCL",
  domain: "Cloud Computing",
  skills: ["Azure", "Linux", "Docker"]
},

{
  id: 34,
  photo: "https://randomuser.me/api/portraits/women/34.jpg",
  name: "Palak Arora",
  batch: 2023,
  cgpa: 9.4,
  currentPackage: 28,
  company: "Google",
  domain: "Data Engineering",
  skills: ["BigQuery", "Python", "SQL"]
},

{
  id: 35,
  photo: "https://randomuser.me/api/portraits/men/35.jpg",
  name: "Aman Yadav",
  batch: 2021,
  cgpa: 8.5,
  currentPackage: 16,
  company: "Flipkart",
  domain: "Backend Development",
  skills: ["Java", "Spring Boot", "MySQL"]
},

{
  id: 36,
  photo: "https://randomuser.me/api/portraits/women/36.jpg",
  name: "Tanya Chopra",
  batch: 2019,
  cgpa: 8.9,
  currentPackage: 21,
  company: "Meta",
  domain: "Frontend Development",
  skills: ["React", "Next.js", "Tailwind"]
},

{
  id: 37,
  photo: "https://randomuser.me/api/portraits/men/37.jpg",
  name: "Siddharth Batra",
  batch: 2022,
  cgpa: 8.1,
  currentPackage: 12,
  company: "Accenture",
  domain: "Testing",
  skills: ["Cypress", "Automation", "JavaScript"]
},

{
  id: 38,
  photo: "https://randomuser.me/api/portraits/women/38.jpg",
  name: "Komal Verma",
  batch: 2020,
  cgpa: 9.1,
  currentPackage: 24,
  company: "Apple",
  domain: "iOS Development",
  skills: ["Swift", "UIKit", "Xcode"]
},

{
  id: 39,
  photo: "https://randomuser.me/api/portraits/men/39.jpg",
  name: "Nikhil Chauhan",
  batch: 2018,
  cgpa: 7.7,
  currentPackage: 9,
  company: "Tech Mahindra",
  domain: "Networking",
  skills: ["Routing", "Switching", "CCNA"]
},

{
  id: 40,
  photo: "https://randomuser.me/api/portraits/women/40.jpg",
  name: "Ira Bhatia",
  batch: 2023,
  cgpa: 9.6,
  currentPackage: 30,
  company: "OpenAI",
  domain: "Artificial Intelligence",
  skills: ["LLMs", "Python", "Deep Learning"]
},
{
  id: 41,
  photo: "https://randomuser.me/api/portraits/men/41.jpg",
  name: "Ravi Solanki",
  batch: 2020,
  cgpa: 7.5,
  currentPackage: 6,
  company: "LocalTech Solutions",
  domain: "Web Development",
  skills: ["HTML", "CSS", "JavaScript"]
},

{
  id: 42,
  photo: "https://randomuser.me/api/portraits/women/42.jpg",
  name: "Sakshi Arora",
  batch: 2021,
  cgpa: 8.3,
  currentPackage: 9,
  company: "Infosys",
  domain: "Frontend Development",
  skills: ["React", "Tailwind", "CSS"]
},

{
  id: 43,
  photo: "https://randomuser.me/api/portraits/men/43.jpg",
  name: "Keshav Mittal",
  batch: 2019,
  cgpa: 7.8,
  currentPackage: 5,
  company: "StartupHub",
  domain: "Backend Development",
  skills: ["Node.js", "Express", "MongoDB"]
},

{
  id: 44,
  photo: "https://randomuser.me/api/portraits/women/44.jpg",
  name: "Divya Sharma",
  batch: 2022,
  cgpa: 9.0,
  currentPackage: 18,
  company: "Adobe",
  domain: "UI/UX Design",
  skills: ["Figma", "Adobe XD", "Photoshop"]
},

{
  id: 45,
  photo: "https://randomuser.me/api/portraits/men/45.jpg",
  name: "Naman Gupta",
  batch: 2020,
  cgpa: 8.1,
  currentPackage: 8,
  company: "CodeCraft",
  domain: "Android Development",
  skills: ["Kotlin", "Firebase", "Android Studio"]
},

{
  id: 46,
  photo: "https://randomuser.me/api/portraits/women/46.jpg",
  name: "Ayesha Khan",
  batch: 2021,
  cgpa: 9.2,
  currentPackage: 24,
  company: "Microsoft",
  domain: "Cloud Computing",
  skills: ["Azure", "Docker", "Kubernetes"]
},

{
  id: 47,
  photo: "https://randomuser.me/api/portraits/men/47.jpg",
  name: "Harshit Yadav",
  batch: 2018,
  cgpa: 7.4,
  currentPackage: 4,
  company: "TechNova",
  domain: "Testing",
  skills: ["Manual Testing", "Java", "Automation"]
},

{
  id: 48,
  photo: "https://randomuser.me/api/portraits/women/48.jpg",
  name: "Muskan Jain",
  batch: 2023,
  cgpa: 9.4,
  currentPackage: 28,
  company: "Google",
  domain: "Machine Learning",
  skills: ["TensorFlow", "Python", "NLP"]
},

{
  id: 49,
  photo: "https://randomuser.me/api/portraits/men/49.jpg",
  name: "Aman Sethi",
  batch: 2022,
  cgpa: 8.0,
  currentPackage: 7,
  company: "ByteWave",
  domain: "Web Development",
  skills: ["React", "Node.js", "MongoDB"]
},

{
  id: 50,
  photo: "https://randomuser.me/api/portraits/women/50.jpg",
  name: "Ritika Anand",
  batch: 2019,
  cgpa: 8.7,
  currentPackage: 15,
  company: "Paytm",
  domain: "App Development",
  skills: ["Flutter", "Firebase", "REST API"]
},

{
  id: 51,
  photo: "https://randomuser.me/api/portraits/men/51.jpg",
  name: "Pranav Kapoor",
  batch: 2020,
  cgpa: 7.9,
  currentPackage: 6.5,
  company: "WebNest",
  domain: "Frontend Development",
  skills: ["CSS", "JavaScript", "Bootstrap"]
},

{
  id: 52,
  photo: "https://randomuser.me/api/portraits/women/52.jpg",
  name: "Kavya Bansal",
  batch: 2021,
  cgpa: 8.8,
  currentPackage: 20,
  company: "Amazon",
  domain: "Data Science",
  skills: ["Python", "SQL", "Pandas"]
},

{
  id: 53,
  photo: "https://randomuser.me/api/portraits/men/53.jpg",
  name: "Deepak Verma",
  batch: 2018,
  cgpa: 7.2,
  currentPackage: 3.8,
  company: "SoftByte",
  domain: "Support Engineer",
  skills: ["Linux", "Networking", "Troubleshooting"]
},

{
  id: 54,
  photo: "https://randomuser.me/api/portraits/women/54.jpg",
  name: "Pallavi Nair",
  batch: 2023,
  cgpa: 9.1,
  currentPackage: 22,
  company: "Netflix",
  domain: "UI/UX Design",
  skills: ["Figma", "Wireframing", "UX Research"]
},

{
  id: 55,
  photo: "https://randomuser.me/api/portraits/men/55.jpg",
  name: "Shubham Rana",
  batch: 2022,
  cgpa: 8.3,
  currentPackage: 9,
  company: "TCS",
  domain: "Backend Development",
  skills: ["Java", "Spring Boot", "MySQL"]
},

{
  id: 56,
  photo: "https://randomuser.me/api/portraits/women/56.jpg",
  name: "Ishita Malhotra",
  batch: 2021,
  cgpa: 9.0,
  currentPackage: 19,
  company: "Meta",
  domain: "Frontend Development",
  skills: ["React", "Next.js", "Tailwind"]
},

{
  id: 57,
  photo: "https://randomuser.me/api/portraits/men/57.jpg",
  name: "Lokesh Kumar",
  batch: 2019,
  cgpa: 7.6,
  currentPackage: 5.5,
  company: "BrightCode",
  domain: "Android Development",
  skills: ["Java", "Firebase", "Android"]
},

{
  id: 58,
  photo: "https://randomuser.me/api/portraits/women/58.jpg",
  name: "Nehal Arora",
  batch: 2020,
  cgpa: 8.5,
  currentPackage: 14,
  company: "Zoho",
  domain: "Backend Development",
  skills: ["Node.js", "Redis", "MongoDB"]
},

{
  id: 59,
  photo: "https://randomuser.me/api/portraits/men/59.jpg",
  name: "Rohit Meena",
  batch: 2022,
  cgpa: 7.1,
  currentPackage: 4.5,
  company: "MiniSoft",
  domain: "Web Development",
  skills: ["HTML", "CSS", "PHP"]
},

{
  id: 60,
  photo: "https://randomuser.me/api/portraits/women/60.jpg",
  name: "Tanvi Kapoor",
  batch: 2023,
  cgpa: 9.6,
  currentPackage: 32,
  company: "OpenAI",
  domain: "Artificial Intelligence",
  skills: ["LLMs", "Python", "Deep Learning"]
},

  
];

export default alumni;



