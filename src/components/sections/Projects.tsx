import { Text, useColorModeValue, Wrap } from "@chakra-ui/react";
import React from "react";
import { Link } from "../Link";
import ProjectCard from "../ProjectCard";

export const Projects = () => {
  const cards: {
    project: string;
    dates: string;
    buttons: { label: string; href: string; icon: string }[];
    image: string;
    bullets: string[];
  }[] = [
    {
      project: "Portfolio Website",
      dates: "Aug 2021 \u2013 Present",
      buttons: [
        {
          label: "GitHub",
          href: "https://github.com/neelshah400/neelshah",
          icon: "akar-icons:github-fill",
        },
        {
          label: "Website",
          href: "https://www.neelshah.dev/",
          icon: "akar-icons:globe",
        },
      ],
      image: "/favicon.png",
      bullets: [
        "Created and deployed a responsive, mobile-friendly portfolio website showcasing my skills, education, experience, and projects",
        "Built the site using React/Next.js (TypeScript), implementing a component-based approach for easy updates via edits to JSON data",
      ],
    },
    {
      project: "MenuMuse",
      dates: "May 2024 \u2013 Present",
      buttons: [
        {
          label: "Website",
          href: "https://menumuse.neelshah.dev/",
          icon: "akar-icons:globe",
        },
      ],
      image: "/menumuse.png",
      bullets: [
        "Created an AI-powered restaurant search chatbot that you can chat with using natural language to search for restaurants, ask questions, summarize reviews, and more",
        "Built the site using React/Next.js (TypeScript) for the frontend/backend, Google's Gemini 1.5 Flash for the model, the Google Maps Platform Places API for restaurant information, and Redis for saving chat history",
      ],
    },
    {
      project: "NBA Playoff Predictions",
      dates: "Jan 2023 \u2013 May 2023",
      buttons: [
        {
          label: "GitHub",
          href: "https://github.com/neelshah400/NBA-Playoff-Predictions",
          icon: "akar-icons:github-fill",
        },
        {
          label: "Website",
          href: "https://nba.neelshah.dev",
          icon: "akar-icons:globe",
        },
      ],
      image: "/nba.jpg",
      bullets: [
        "Analyzed the factors influencing teams’ playoff success using Python, going through each step of the data science pipeline",
        "Accurately predicted the number of playoff games a given team would win by leveraging regular season data to train 8 different machine learning models, with the best (a decision tree) achieving a mean deviation of less than 2.5 games",
        "Performed an exhaustive grid search with 5-fold cross-validation to find the optimal parameters for each model",
      ],
    },
  ];

  return (
    <>
      <Text fontSize="lg">
        A few of my projects are shown below. To see more, check out my&nbsp;
        <Link
          href="https://github.com/neelshah400/"
          target="_blank"
          color={useColorModeValue("purple.600", "purple.400")}
        >
          GitHub profile
        </Link>
        .
      </Text>
      <Wrap mt={5} spacing={5} align="center">
        {cards.map((card, index) => (
          <ProjectCard key={index} {...card} />
        ))}
      </Wrap>
    </>
  );
};
