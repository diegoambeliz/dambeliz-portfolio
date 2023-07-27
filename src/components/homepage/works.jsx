import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								 style={{backgroundColor: '#0b38a0'}}
								src="./kelpie.svg"
								alt="kelpie"
								className="work-image"
							/>
							<div className="work-title">Kelpie Solutions</div>
							<div className="work-subtitle">
								Frontend Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
