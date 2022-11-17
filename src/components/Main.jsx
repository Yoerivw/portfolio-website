import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
	return (
		<div id='home' className='w-full h-screen text-center snap-center'>
			<div className='m-w-[1240px] w-full mx-auto p-2 h-screen flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-600'>
						Let&apos;s build something together
					</p>
					<h1 className='py-4 text-gray-700'>
						Hi, I&apos;m <span className='text-[#5651e5]'>Yoeri</span>
					</h1>
					<h1 className='py-2 text-gray-700'>A front-end Web Developer</h1>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
						I&apos;m focussed on building responsive front-end web applications
						I&apos;ve always had a passion for technology and computers and
						decided to learn how to make simple websites which turned into some
						freelance gigs.
					</p>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto'></p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaLinkedinIn />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaGithub />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<AiOutlineMail />
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
