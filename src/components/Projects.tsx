import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { PROJECTS } from "../assets/data/projects";
import Project from "./Project";


const Projects = () => {
	const projects = PROJECTS.map((project, i) => {
		console.log(project);

		return <Project project={project} />;
	});
	return (
		<div className="projects">
			<Heading as="h3" size="xl" noOfLines={1}>
				Projects
			</Heading>
			<Box
				display="grid"
				width={{ md: "80%" }}
				placeItems="center"
				gridTemplateColumns={{ md: "repeat(2, minmax(0, 1fr))" }}
				gridGap={8}
				marginX="auto"
			>
				{projects}
			</Box>
		</div>
	);
};

export default Projects;
