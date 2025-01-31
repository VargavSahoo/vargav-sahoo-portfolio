import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVargav extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "experience": <Experience />
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vargav" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vargav' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vargav' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div
  id="experience"
  tabIndex="0"
  onFocus={this.changeScreen}
  className={
    (this.state.active_screen === "experience"
      ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
      : " hover:bg-gray-50 hover:bg-opacity-5 ") +
    " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
  }
>
  <img className="w-3 md:w-4" alt="vargav experience" src="./themes/Yaru/status/experience.svg" />
  <span className="ml-1 md:ml-2 text-gray-50">Experience</span>
</div>

                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vargav' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vargav's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/vargavsahoo/button" title="Sponsor vargavsahoo" width={"100%"} height={"100%"} ></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default Aboutvargav;

export const displayAboutvargav = () => {
    return <Aboutvargav />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Vargav Sahoo Logo" />
            </div>
            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Vargav Sahoo</span>,</div>
                <div className="font-normal ml-1">I'm a <span className="text-blue-600 font-bold">DevOps Engineer!</span></div>
            </div>
            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">I have **2 years of experience** in **AWS, CI/CD, Terraform, and automation**, optimizing **cloud infrastructure**.</li>
                <li className="mt-3 list-building">I love **building scalable and automated systems** that enhance operational efficiency.</li>
                <li className="mt-3 list-time">When I’m not automating deployments, I enjoy **reading books, solving DevOps challenges, and exploring new cloud technologies.**</li>
                <li className="mt-3 list-star">I also have a strong interest in **monitoring, observability, and Kubernetes orchestration!**</li>
            </ul>
        </>
    )
}

function Education() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        Synergy Institute of Technology
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">2016 - 2020</div>
                    <div className="text-sm md:text-base">B.Tech in Computer Science</div>
                </li>
                <li className="list-disc mt-5">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">
                        St. Joseph’s School
                    </div>
                    <div className="text-sm text-gray-400 mt-0.5">2016</div>
                    <div className="text-sm md:text-base">12th Standard</div>
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full"></div>
            </div>
            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    I've worked extensively with **Cloud Platforms, Infrastructure as Code, and DevOps Tools**.
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    My **expertise** includes **AWS, Terraform, Kubernetes, CI/CD, Ansible, Docker, and Jenkins!**
                </li>
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Here are the technologies I use frequently:
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                <div className="text-sm text-center md:text-base w-1/2 font-bold">Cloud & DevOps</div>
                <div className="text-sm text-center md:text-base w-1/2 font-bold">Scripting & Tools</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                <div className="px-2 w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/AWS-%23FF9900?style=flat&logo=amazonaws&logoColor=white" alt="AWS" />
                        <img className="m-1" src="https://img.shields.io/badge/Terraform-%23623CE4?style=flat&logo=terraform&logoColor=white" alt="Terraform" />
                        <img className="m-1" src="https://img.shields.io/badge/Kubernetes-%23326CE5?style=flat&logo=kubernetes&logoColor=white" alt="Kubernetes" />
                        <img className="m-1" src="https://img.shields.io/badge/Docker-%230db7ed?style=flat&logo=docker&logoColor=white" alt="Docker" />
                        <img className="m-1" src="https://img.shields.io/badge/Ansible-%23EE0000?style=flat&logo=ansible&logoColor=white" alt="Ansible" />
                        <img className="m-1" src="https://img.shields.io/badge/Jenkins-%23D24939?style=flat&logo=jenkins&logoColor=white" alt="Jenkins" />
                        <img className="m-1" src="https://img.shields.io/badge/Git-%23F05032?style=flat&logo=git&logoColor=white" alt="Git" />
                        <img className="m-1" src="https://img.shields.io/badge/GitHub-%23181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
                    </div>
                </div>
                <div className="px-2 flex flex-wrap items-start w-1/2">
                    <div className="flex flex-wrap justify-center items-start w-full mt-2">
                        <img className="m-1" src="https://img.shields.io/badge/Python-%233776AB?style=flat&logo=python&logoColor=white" alt="Python" />
                        <img className="m-1" src="https://img.shields.io/badge/Bash-%234EAA25?style=flat&logo=gnubash&logoColor=white" alt="Bash Scripting" />
                        <img className="m-1" src="https://img.shields.io/badge/Linux-%23FCC624?style=flat&logo=linux&logoColor=black" alt="Linux" />
                        <img className="m-1" src="https://img.shields.io/badge/Prometheus-%23E6522C?style=flat&logo=prometheus&logoColor=white" alt="Prometheus" />
                        <img className="m-1" src="https://img.shields.io/badge/Grafana-%23F46800?style=flat&logo=grafana&logoColor=white" alt="Grafana" />
                        <img className="m-1" src="https://img.shields.io/badge/CloudWatch-%23832BA5?style=flat&logo=amazonaws&logoColor=white" alt="CloudWatch" />
                        <img className="m-1" src="https://img.shields.io/badge/Jira-%230052CC?style=flat&logo=jira&logoColor=white" alt="Jira" />
                    </div>
                </div>
            </div>
            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className="list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className="inline ml-1" src="https://img.shields.io/badge/Linux-%23FCC624?style=plastic&logo=linux&logoColor=black" alt="Linux" /> <span>is my go-to operating system!</span>
                </li>
            </ul>
        </>
    )
}
function Experience() {
    return (
      <>
        <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
          Experience
          <div className="absolute pt-px bg-white mt-px top-full w-full">
            <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
            <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
          </div>
        </div>
  
        {/* Capgemini Section */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-bold leading-tight">
            Capgemini Technology Services India Ltd.
            <span className="ml-2 text-sm text-gray-300">
              (Feb 2022 - Feb 2024)
            </span>
          </h3>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <strong>AWS Infrastructure:</strong> Deployed highly available cloud environments; 
              achieved a 30% reduction in deployment time by leveraging Terraform.
            </li>
            <li>
              <strong>CI/CD Pipelines:</strong> Managed automated pipelines with 
              Jenkins &amp; GitHub Actions, streamlining deployments and minimizing errors.
            </li>
            <li>
              <strong>Kubernetes &amp; Docker:</strong> Optimized containerized workloads 
              for efficiency and scalability, reducing deployment times.
            </li>
            <li>
              <strong>Ansible Automation:</strong> Automated repetitive tasks, 
              increasing operational efficiency by 20%.
            </li>
            <li>
              <strong>Monitoring Solutions:</strong> Implemented Prometheus &amp; Grafana, 
              reducing downtime by 15% via proactive performance management.
            </li>
            <li>
              Collaborated with developers to integrate best practices for code deployment 
              and infrastructure management.
            </li>
          </ul>
        </div>
  
        {/* Tech Mahindra Section */}
        <div>
          <h3 className="text-lg md:text-xl font-bold leading-tight">
            Tech Mahindra Ltd.
            <span className="ml-2 text-sm text-gray-300">
              (Sep 2020 - Mar 2021)
            </span>
          </h3>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              Provided technical support &amp; troubleshooting for enterprise customers, 
              enhancing customer satisfaction.
            </li>
            <li>
              Employed systematic problem-solving strategies, reducing repeat queries by 
              offering clear, concise resolutions.
            </li>
            <li>
              Contributed to improved customer service metrics by sharing insights and 
              strategies on recurring challenges.
            </li>
            <li>
              Maintained up-to-date knowledge of products &amp; support tools, 
              ensuring efficient customer support.
            </li>
            <li>
              Collaborated with cross-functional teams to enhance service quality, 
              demonstrating strong teamwork and communication skills.
            </li>
          </ul>
        </div>
      </>
    );
  }
  function Projects() {

    // 1. Define your project data here
    const project_list = [
        {
            name: "CI/CD Pipeline Setup for Java Application Deployment",
            date: "Feb 2024 - Apr 2024",
            link: "https://github.com/your-repo/java-ci-cd",
            description: [
                "Developed a complete CI/CD pipeline for a Java application using Jenkins, Maven, Docker & Ansible.",
                "Configured Jenkins pipeline as code for continuous integration and deployment.",
                "Implemented containerization with Docker and orchestrated deployments on Kubernetes."
            ],
            domains: ["jenkins", "maven", "docker", "ansible", "kubernetes"]
        },
        {
            name: "Deploying a Multi-Tier Website Using AWS EC2",
            date: "May 2024 - Aug 2024",
            link: "https://github.com/your-repo/aws-multi-tier",
            description: [
                "Built a scalable multi-tier website architecture with EC2, Auto Scaling, and RDS.",
                "Configured security groups, networking, and traffic rules between EC2 & RDS.",
                "Optimized resource utilization to support high traffic and cost efficiency."
            ],
            domains: ["aws ec2", "rds", "auto scaling", "security groups"]
        }
    ];

    // 2. Define tag colors for each domain/technology
    const tag_colors = {
        "jenkins": "red-500",
        "maven": "purple-500",
        "docker": "blue-500",
        "ansible": "red-600",
        "kubernetes": "blue-400",
        "aws ec2": "yellow-500",
        "rds": "indigo-500",
        "auto scaling": "green-500",
        "security groups": "gray-500",
    };

    return (
        <>
            {/* Heading */}
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {/* You can remove this if you don't need the sponsor iframe */}
            {/* <iframe
                src="https://github.com/sponsors/vivek9patel/card"
                title="Sponsor me"
                className='my-4 w-5/6 md:w-3/4'
            /> */}

            {/* Project Cards */}
            {project_list.map((project, index) => {
                // Pull out last segment of the GitHub URL for the star iframe
                const projectNameFromLink = project.link.split('/');
                const projectName = projectNameFromLink[projectNameFromLink.length - 1];

                return (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full flex-col px-4"
                    >
                        <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                            {/* Project Title + GitHub Stars */}
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <div className="text-base md:text-lg mr-2">
                                        {project.name}
                                    </div>
                                    {/* GitHub Star button iframe – remove or edit if you want */}
                                    <iframe
                                        src={`https://ghbtns.com/github-btn.html?user=your-username&repo=${projectName}&type=star&count=true`}
                                        frameBorder="0"
                                        scrolling="0"
                                        width="150"
                                        height="20"
                                        title={`${project.name.toLowerCase()}-star`}
                                    ></iframe>
                                </div>
                                <div className="text-gray-300 font-light text-sm">
                                    {project.date}
                                </div>
                            </div>

                            {/* Description */}
                            <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                {project.description.map((desc, idx) => (
                                    <li
                                        key={idx}
                                        className="list-disc mt-1 text-gray-100"
                                    >
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            {/* Domain/Tech Tags */}
                            <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                {project.domains?.map((domain, i) => {
                                    // Use tag_colors or default to a gray label
                                    const color = tag_colors[domain] || "gray-400";
                                    return (
                                        <span
                                            key={i}
                                            className={`px-1.5 py-0.5 w-max border border-${color} text-${color} m-1 rounded-full`}
                                        >
                                            {domain}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </a>
                );
            })}
        </>
    );
}

export default Projects;

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/vargav-sahoo-Resume.pdf" title="vargav sahoo resume" frameBorder="0"></iframe>
    )
}