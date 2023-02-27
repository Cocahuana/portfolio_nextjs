import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
type Props = {
	children: React.ReactNode;
};

const Default = ({ children }: Props) => (
	<div>
		<Header />
		{children}
		<Footer />
	</div>
);

export default Default;
