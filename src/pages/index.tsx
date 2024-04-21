import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import handler from "./api/hello";
const inter = Inter({ subsets: ["latin"] });
import Default from "@/components/layouts/Default/Default";
import HomePage from "@/components/templates/HomePage/HomePage";

export default function Home() {
	return (
		<>
			<Head>
				<title>Front-end Developer</title>
				<meta
					name='description'
					content='Ezequiel Dominguez portfolio - Front-end Developer'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Default>
				<HomePage />
			</Default>
		</>
	);
}
