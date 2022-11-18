import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CgScrollV } from "react-icons/cg";

const Main = () => {
	return (
		<div id='home' className='w-full text-center snap-center'>
			<div className='m-w-[1240px] w-full mx-auto p-2 flex flex-col h-screen justify-center items-center space-y-20'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-600'>
						Let&apos;s build something together
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, I&apos;m <span className='text-indigo-500'>Yoeri</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A front-end Web Developer</h1>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
						I&apos;m focused on building responsive front-end web applications
						I&apos;ve always had a passion for technology and computers and
						decided to learn how to make simple websites which turned into some
						freelance gigs.
					</p>

					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<a href='https://www.linkedin.com/in/yoerivw/' target='_blank'>
								<FaLinkedinIn />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<a href='https://github.com/Yoerivw/' target='_blank'>
								<FaGithub />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<a href='mailto:yoerivw@hotmail.com' target='_blank'>
								<AiOutlineMail />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<a
								href='https://www.dropbox.com/s/mpnwmnvr7jjvvvd/Yoeri%20CV.pdf?dl=0'
								target='_blank'>
								<BsFillPersonLinesFill />
							</a>
						</div>
					</div>
				</div>
				{/* <div className='invisible md:visible rounded-full px-1 cursor-pointer hover:scale-110 ease-in duration-300'>
					<CgScrollV size={48} />
				</div> */}
			</div>
		</div>
	);
};

export default Main;
