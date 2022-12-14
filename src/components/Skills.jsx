import React from "react";
import html from "../../public/skill-icons/html.png";
import css from "../../public/skill-icons/css.png";
import github from "../../public/skill-icons/github.png";
import javascript from "../../public/skill-icons/javascript.png";
import nextjs from "../../public/skill-icons/nextjs.png";
import php from "../../public/skill-icons/php.png";
import prisma from "../../public/skill-icons/prisma.png";
import react from "../../public/skill-icons/react.png";
import sql from "../../public/skill-icons/sql-server.png";
import tailwind from "../../public/skill-icons/tailwind.png";
import wp from "../../public/skill-icons/wordpress.png";
import { CgScrollV } from "react-icons/cg";

const Skills = () => {
	return (
		<div id='skills' className='w-full h-screen p-2 snap-start'>
			<div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
				{/* <div className='invisible md:visible px-1 cursor-pointer hover:scale-110 ease-in duration-300 w-max mx-auto'>
					<CgScrollV size={48} />
				</div> */}
				<p className='text-lg sm:text-xl tracking-widest uppercase text-[#5651e5'>
					Skills
				</p>
				<h2 className='py-4'>What I can do</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-12 gap-y-4 sm:gap-x-6 sm:gap-y-6 md:gap-8'>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={html}
									alt='/'
									className='w-[24px] h-[24px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>HTML</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={css}
									alt='/'
									className='w-[24px] h-[24px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>CSS</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={javascript}
									alt='/'
									className='w-[24px] h-[24px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>JavaScript</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={react}
									alt='/'
									className='w-[24px] h-[24px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>React</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={tailwind}
									alt='/'
									className='w-[24px] h-[24px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>Tailwind</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={github}
									alt='/'
									className='w-[24px] h-[24px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>Github</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={php}
									alt='/'
									className='w-[24px] h-[24px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>PHP</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={wp}
									alt='/'
									className='w-[24px] h-[24px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>WordPress</p>
							</div>
						</div>
					</div>
				</div>
				<h2 className='pt-10 py-6'>What I'm tinkering with</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-8'>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={nextjs}
									alt='/'
									className='w-[32px] h-[32px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>NextJs</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={prisma}
									alt='/'
									className='w-[32px] h-[32px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>Prisma</p>
							</div>
						</div>
					</div>
					<div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
						<div className='grid grid-cols-2 gap-0 md:gap-4 justify-center items-center'>
							<div className='m-auto'>
								<img
									src={sql}
									alt='/'
									className='w-[32px] h-[32px] md:w-[64px] md:h-[64px]'
								/>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<p>SQL</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
