import React, { useState } from "react";
import html from "../../public/skill-icons/html.png";
import css from "../../public/skill-icons/css.png";
import wp from "../../public/skill-icons/wordpress.png";
import javascript from "../../public/skill-icons/javascript.png";
import { CgScrollV } from "react-icons/cg";

/* const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); */

const Projects = () => {
	const [activeProject, setActiveProject] = useState("brp");
	const [projectText, setProjectText] = useState([
		{
			title: "Bergman Ross & partners",
			text: "Bergman Ross and Partners is a large radiological company.  Their main goal was to create an online booking functionality on their website.  The project included the development the of their entire website, including the booking functionality, as well as the maintenance thereof.",
			link: "www.bergmanross.co.za",

			tools: [
				{ id: 1, name: "WordPress", imageName: wp },
				{ id: 2, name: "HTML", imageName: html },
				{ id: 3, name: "CSS", imageName: css },
				{ id: 4, name: "JS", imageName: javascript },
			],
		},
	]);
	const onJadeClick = async (event) => {
		setActiveProject("jade");

		/* await delay(150); */

		setProjectText([
			{
				title: "Jade Tavern",
				text: "Jade Tavern is a chinese / sushi restaurant in the Southern Suburbs. After the hard lockdown they were in need of an online ordering system. I developed a website for them and integrated a 3rd party tool to handle the ordering functionality.",
				link: "https://www.jadetavern.co.za/",
				tools: [
					{ id: 1, name: "WordPress", imageName: wp },
					{ id: 2, name: "HTML", imageName: html },
					{ id: 3, name: "CSS", imageName: css },
					{ id: 4, name: "JS", imageName: javascript },
				],
			},
		]);
	};

	const onBrpClick = async (event) => {
		setActiveProject("brp");
		/* await delay(150);
		 */
		setProjectText([
			{
				title: "Bergman Ross & partners",
				text: "Bergman Ross and Partners is a large radiological company.  Their main goal was to create an online booking functionality on their website.  The project included the development the of their entire website, including the booking functionality, as well as the maintenance thereof.",
				link: "https://www.bergmanross.co.za/",
				tools: [
					{ id: 1, name: "WordPress", imageName: wp },
					{ id: 2, name: "HTML", imageName: html },
					{ id: 3, name: "CSS", imageName: css },
					{ id: 4, name: "JS", imageName: javascript },
				],
			},
		]);
	};
	const onCwaClick = async (event) => {
		setActiveProject("cwa");
		/* await delay(150); */

		setProjectText([
			{
				title: "CW Attorneys",
				text: "CW Attorneys is an attorney office specializing in immigration. Their main goal was to enable prospective clients to more easily find contact information and service offerings during lockdown. I built out a design and created a GMB for easy directions.",
				link: "https://www.chriswentzelattorneys.co.za/",
				tools: [
					{ id: 1, name: "HTML", imageName: html },
					{ id: 2, name: "CSS", imageName: css },
					{ id: 3, name: "JS", imageName: javascript },
				],
			},
		]);
	};

	const tools = projectText.map((project) => {
		return (
			<>
				<h3 className='text-2xl mb-5 b-5 transition-transform underline'>
					{project.title}
				</h3>
				<p className='transition-opacity max-w-[550px] pb-8 '>{project.text}</p>
				<p className=' font-bold'>Tools Used:</p>
				<div className='flex flex-row space-x-12 mt-4 mb-8 border-l-2 border-l-gray-300 pl-6'>
					{project.tools.map((tool) => {
						return (
							<li key={tool.id} className='text-center list-none'>
								<img
									src={tool.imageName}
									alt='/'
									className='w-[48px] h-[48px]'
								/>

								{tool.name}
							</li>
						);
					})}
				</div>
				<a
					href={project.link}
					target='_blank'
					className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>
					View Site
				</a>
			</>
		);
	});

	return (
		<div
			id='projects'
			className='w-full h-screen snap-start flex items-center text-gray-700 mb-2 flex-col'>
			<div className='max-w-[1240px] w-full p-2 flex flex-col h-screen justify-center items-center space-y-20'>
				<div className='w-full max-w-[1240px]'>
					<h2 className='mb-10'>Websites I've built</h2>

					<div className='flex flex-wrap justify-between relative '>
						<div className="py-[5px] pr-[30px] before:content-[' '] before:w-[60px] before:h-[60px] before:border-r-black before:border-r-2 before:border-t-black before:border-t-2 before:absolute before:left-[130px] before:top-[-2px]">
							<ul className='text-lg leading-loose min-w-[160px]'>
								<li
									key='brp'
									id='brp'
									onClick={onBrpClick}
									className={`${
										activeProject == "brp"
											? "underline rounded p-2 text-indigo-500 transition ease-in-out delay-450"
											: "p-2"
									}`}>
									BRP Radiologists
								</li>
								<li
									key='jade'
									id='jade'
									onClick={onJadeClick}
									className={`${
										activeProject == "jade"
											? "underline p-2 text-indigo-500 rounded-md transition ease-in-out delay-250"
											: "p-2"
									}`}>
									Jade Tavern
								</li>
								<li
									key='cwa'
									id='cwa'
									onClick={onCwaClick}
									className={`${
										activeProject == "cwa"
											? "underline text-indigo-500 rounded-xl p-2 transition ease-in-out delay-50"
											: "p-2"
									}`}>
									CW Attorneys
								</li>
							</ul>
						</div>
						<div className='pt-10 md:pt-0'>{tools}</div>
					</div>
				</div>
				<div className='rounded-full shadow-sm shadow-gray-400 px-1 cursor-pointer hover:scale-110 ease-in duration-300'>
					<CgScrollV size={48} />
				</div>
			</div>
		</div>
	);
};

export default Projects;
