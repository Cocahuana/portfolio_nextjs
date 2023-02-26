import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Header/Footer/Footer";
type Props = {
	children: React.ReactNode;
};

const Default = ({ children }: Props) => (
	<div>
		<Header />
		<div>{children}</div>
		<Footer />
	</div>
);

export default Default;
