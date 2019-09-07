import React from "react";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import Projects from "../../components/Projects/Projects";
import Spinner from "../../components/Spinner/Spinner";
import SocialBox from "../../components/SocialBox/SocialBox";

import "./Home.scss";

class Home extends React.Component {
	state = { hasLoaded: false };
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				hasLoaded: true
			});
		}, 900);
	}
	render() {
		const { hasLoaded } = this.state;
		return (
			<>
				{hasLoaded ? (
					<div className='Home'>
						<Header />
						<section>
							<>
								<Profile />
								<Projects />
							</>
							<>
								<SocialBox />
							</>
						</section>
					</div>
				) : (
					<Spinner />
				)}
			</>
		);
	}
}

export default Home;
