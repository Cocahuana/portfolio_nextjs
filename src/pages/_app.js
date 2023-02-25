import "@/styles/globals.css";
// import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
	return (
		<ParallaxProvider scrollAxis='vertical'>
			<Component {...pageProps} />
		</ParallaxProvider>
	);
}
