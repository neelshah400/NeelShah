import { Wrap } from "@chakra-ui/react";
import ExperienceCard from "../ExperienceCard";

export const Experience = () => {
  const cards: {
    organization: string;
    location: string;
    dates: string;
    role: string;
    image: string;
    bullets: string[];
  }[] = [
    {
      organization: "University of Maryland",
      location: "College Park, MD",
      dates: "Jan 2023 \u2013 May 2024",
      role: "Teaching Assistant",
      image: "/umd.png",
      bullets: [
        "Teaching assistant for CMSC131: Object-Oriented Programming I, an introductory computer science course taught using Java",
        "Conducted weekly office hours, providing guidance to students on class material and project-related questions",
        "Graded quizzes, exams, and projects for style and accuracy, offering constructive feedback to enhance students’ understanding",
      ],
    },
    {
      organization: "Morgan Stanley",
      location: "New York, NY",
      dates: "Jun 2023 \u2013 Aug 2023",
      role: "Technology Summer Analyst",
      image: "/ms.png",
      bullets: [
        "Enabled individuals within Lending Products & Services and other teams to quickly draw meaningful insights from data by developing a versatile machine learning platform for model building, evaluation, and prediction",
        "Developed user-friendly web application using React (TypeScript) for the frontend and Flask/Db2 (Python) for the backend",
        "Supported complex pipelines with preprocessing and feature selection steps as well as hyperparameter tuning via grid search",
        "Led the development of a tool for classifying and extracting information from financial documents using OpenAI’s GPT-4 model during Morgan Stanley’s Generative AI Hackathon",
      ],
    },
    {
      organization: "Capgemini Government Solutions",
      location: "McLean, VA",
      dates: "Jun 2022 \u2013 Aug 2022",
      role: "Technical Intern",
      image: "/capgemini.png",
      bullets: [
        "Improved the efficiency of the Software as a Service (SaaS) capability team by leveraging robotic process automation (RPA) to automate the provisioning of users in Salesforce using data exported weekly from an HR system",
        "Reduced processing time by over 80% and enhanced data accuracy by developing a UiPath attended bot",
        "Presented findings on viability of virtual reality to top executives, following hands-on testing and extensive market research",
      ],
    },
    {
      organization: "Bloomberg",
      location: "Dayton, NJ",
      dates: "Jun 2021 \u2013 Aug 2021",
      role: "Software Engineering Intern",
      image: "/bloomberg.png",
      bullets: [
        "Contributed to the Fleet Automation Services team by developing several features for a web application used to manage machine turnaround (maintenance operations) for a fleet of over 30,000 servers",
        "Provided operators with the ability to set different retry actions per host when rerunning failed jobs, using Angular (TypeScript) for the frontend and Django/PostgreSQL (Python) for the backend",
        "Created reproducible development/build environments for the Angular frontend by containerizing it using Docker",
        "Enhanced data visibility by publishing metrics for maintenance events, actions, and failures to a telemetry system via the Django backend and creating a filterable Grafana dashboard displaying time series graphs of these metrics",
      ],
    },
    {
      organization: "Bloomberg",
      location: "Dayton, NJ",
      dates: "Jul 2020 \u2013 Aug 2020",
      role: "Software Engineering Intern",
      image: "/bloomberg.png",
      bullets: [
        "Assisted the Environment Support Site Reliability Engineering team by providing visibility into data on a fleet of over 30,000 servers, which the team automates machine turnaround (maintenance operations) for",
        "Developed an interactive web application to visualize metrics such as runtime, failure rates, and failure reasons at the host, schedule, and cluster levels, using React (TypeScript) for the frontend and Django/PostgreSQL (Python) for the backend",
      ],
    },
  ];

  return (
    <Wrap spacing={5} align="center">
      {cards.map((card, index) => (
        <ExperienceCard key={index} {...card} />
      ))}
    </Wrap>
  );
};
