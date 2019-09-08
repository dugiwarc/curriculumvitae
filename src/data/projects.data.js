import lightencyMobile from "../assets/images/lightency-mobile-mockup.png";
import lightencyDesktop from "../assets/images/lightency-laptop-mockup.png";
import latoFont from "../assets/images/lato-font.png";
import illustrator from "../assets/icons/illustrator.svg";
import react from "../assets/icons/react.svg";
import aftereffects from "../assets/icons/after-effects.svg";

const data = [
	{
		id: 1,
		isReady: true,
		isOnDisplay: true,
		isMobile: true,
		isDesktop: true,
		title: "Lightency",
		description:
			"I was tasked to give the company website a new look and correct some inconsistencies found in the old one",
		imageMobile: lightencyMobile,
		imageDesktop: lightencyDesktop,
		imageMobileCoords: "47,45,72,4,342,7,368,35,370,610,343,658,88,658,48,621",
		imageDesktopCoords:
			"103,70,115,55,716,54,735,69,733,476,802,479,804,494,771,506,69,503,34,491,31,478,103,479",
		colors: ["#202a43", "#ffde00", "#ffffff", "#000000"],
		tools: ["After Effects", "Illustrator", "React"],
		fonts: [
			{
				name: "Lato",
				image: latoFont
			}
		],
		tech: [illustrator, aftereffects, react]
	},
	{
		id: 2,
		isReady: true,
		isOnDisplay: false,
		isMobile: true,
		isDesktop: true,
		title: "Lightency",
		description:
			"I was tasked to give the company website a new look and correct some inconsistencies found in the old one",
		imageMobile: lightencyMobile,
		imageDesktop: lightencyDesktop,
		imageMobileCoords: "47,45,72,4,342,7,368,35,370,610,343,658,88,658,48,621",
		imageDesktopCoords:
			"103,70,115,55,716,54,735,69,733,476,802,479,804,494,771,506,69,503,34,491,31,478,103,479",
		colors: ["#202a43", "#ffde00", "#ffffff", "#000000"],
		tools: ["After Effects", "Illustrator", "React"],
		fonts: [
			{
				name: "Lato",
				image: latoFont
			}
		],
		tech: [illustrator, aftereffects, react]
	}
];

export default data;
