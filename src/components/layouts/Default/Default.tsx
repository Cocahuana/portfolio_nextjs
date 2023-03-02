import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import { useRouter } from "next/router";
type Props = {
	children: React.ReactNode;
};

function Default({ children }: Props) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default Default;
