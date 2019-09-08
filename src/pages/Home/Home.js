import React from "react";
import Header from "../../components/Header/Header";
import Profile from "../../components/Profile/Profile";
import Projects from "../../components/Projects/Projects";
import Spinner from "../../components/Spinner/Spinner";
import SocialBox from "../../components/SocialBox/SocialBox";
import SidebarNavigator from "../../components/SidebarNavigator/SidebarNavigator";
import Pricing from "../../components/Pricing/Pricing";

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
						<Pricing />
						<section>
							<>
								<Profile />
								<SidebarNavigator />
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
