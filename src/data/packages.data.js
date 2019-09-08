import briefcase from "../assets/icons/briefcase.svg";
import blog from "../assets/icons/blog.svg";
import onlineStore from "../assets/icons/online-store.svg";

const data = [
	{
		name: "Portfolio",
		price: 100,
		types: ["Brochure", "Nonprofit", "Personal", "Portfolio", "Business"],
		hasDatabase: false,
		hasAuthentication: false,
		hasPayment: false,
		has6MonthsSupport: true,
		image: briefcase,
		description: `Get more business and build your professional brand`
	},
	{
		name: "Blog",
		price: 200,
		types: ["Crowdfunding", "Blog"],
		hasDatabase: true,
		hasAuthentication: true,
		hasPayment: false,
		has6MonthsSupport: true,
		image: blog,
		description: `Create your journal and coach your curious readers.`
	},
	{
		name: "E-commerce",
		price: 500,
		types: ["Ecommerce"],
		hasDatabase: true,
		hasAuthentication: true,
		hasPayment: true,
		has6MonthsSupport: true,
		image: onlineStore,
		description: `Have your own store online where you can sell anything you can imagine`
	}
];

export default data;
