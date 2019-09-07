import React, { Component } from "react";

// Graphics
import heart from "../../assets/icons/heart.svg";

// Styles
import "./Languages.scss";

// Data
import data from "../../data/languages.data";

export default class Languages extends Component {
	state = { yPosition: -64, count: 0 };
	componentDidMount() {
		this.setState({
			count: data.length
		});
		let amountPosition, amountCount;
		setInterval(() => {
			if (this.state.count === 0) {
				amountPosition = 80;
				amountCount = 1;
			}
			if (this.state.count === data.length) {
				amountPosition = -80;
				amountCount = -1;
			}
			this.setState({
				yPosition: this.state.yPosition + amountPosition,
				count: this.state.count + amountCount
			});
		}, 2000);
	}
	render() {
		const liStyle = {
			transform: `translate(-30px,${this.state.yPosition}px)`,
			transition: "transform 1s cubic-bezier(0.56, 0.54, 0.62, 1.15)"
		};
		return (
			<div className='Languages'>
				<div className='languageRoller'>
					<img src={heart} alt='heart' height={80} />
					<div className='languagesMain'>
						<ul>
							{data.map((item, index) => {
								return (
									<li style={liStyle} key={index}>
										{item}
									</li>
								);
							})}
						</ul>
					</div>
					<div />
				</div>
			</div>
		);
	}
}
