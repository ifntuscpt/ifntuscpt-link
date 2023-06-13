import React, { useState } from 'react';
import './App.css';
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { SiIssuu } from "react-icons/si";
import TextLoop from "react-text-loop";
import Typist from 'react-typist';

function App() {
	const config_cursor = {
		show: true,
		blink: true,
		element: '🔧',
		hideWhenDone: true,
	}

	const [darkmode, setdarkmode] = useState(false);

	return (
		<div>
			<div className={`card ${darkmode ? 'dark' : ''}`}>
				<div className="toggle-btn" onClick={() => setdarkmode(!darkmode)}></div>
				<div className="dark-mode"></div>
				<div className="card_body">
					<div className="profile text-center ">
						<img src="/profile.png" className="avatar" alt="avatar" />
						<div className="bg_content rd_12 p_8">
							<h1>Ifentius Ciputra</h1>
							<p className='mt-16'>Information Technology Student</p>
							<Typist cursor={config_cursor}>
							at Udayana University
							</Typist>
						</div>

						<div className="bg_content rd_12 p_8 mt-16">
							Familiar with{' '}
							<TextLoop interval={800}>
								<span className='higthlight'>Laravel</span>
								<span className='higthlight'>Android Studio</span>
								<span className='higthlight'>React JS</span>
								<span className='higthlight'>Mysql</span>
								<span className='higthlight'>UI/UX</span>
							</TextLoop>
						</div>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="mailto:95.ifentiusciputra@gmail.com">
							<MdOutgoingMail />
							<span>Have a Cool Project?</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://drive.google.com/file/d/11lATY6vCpSmTL4P_BmEziWIA3nCTq_ov/view">
							<FaGoogleDrive />
							<span>UI/UX Portofolio</span>
						</a>
					</div>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://issuu.com/ifntuscpt/docs/uiux_grapich_designer_portfolio-ife_c8441f8618f0f7">
							<SiIssuu />
							<span>Additional Portfolio</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://www.linkedin.com/in/ifntuscpt">
							<BsLinkedin />
							<span>Linkedin</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://www.instagram.com/ui.fent">
							<BsInstagram />
							<span>Instagram</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://github.com/ifntuscpt">
							<FaGithub />
							<span>Github</span>
						</a>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://open.spotify.com/show/0T9XaW7xTjxEjqIiBtqC99?si=cca279f6a8434023">
							<BsSpotify />
							<span>My Podcast</span>
						</a>
					</div>
					<div className="mt-16">
						<a className="btn_action bg_content" href="https://www.youtube.com/channel/UCgdd7PsyYjzIO927jWOhcSQ">
							<FiYoutube />
							<span>Youtube</span>
						</a>
					</div>
				</div>
			</div>
			{/* <ParticlesBg type="random" bg={true} /> */}
		</div>
	);
}

export default App;
