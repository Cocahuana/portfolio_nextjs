import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import { useRouter } from "next/router";
type Props = {
	children: React.ReactNode;
};

function Default({ children }: Props) {
	return (
		<>
			<Header />
			{/*We use pt-10vh to adjust content under the overlapng/fixed navbar*/}
			<div className='h-full w-full pt-[10vh] lg:pt-[8vh]'>
				{children}
			</div>
			<Footer />
		</>
	);
}

export default Default;
