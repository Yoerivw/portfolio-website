import React from "react";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";

function App() {
	return (
		<div className='pt-4 px-8 overflow-y-scroll h-screen scroll-smooth snap-y snap-mandatory'>
			<Main />
			<Projects />
			<Skills />
		</div>
	);
}

export default App;
