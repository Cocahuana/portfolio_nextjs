import styles from "./Footer.module.css";
import Flex from "@/components/elements/Flex/Flex";
import BoldSpan from "@/components/elements/BoldSpan/BoldSpan";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
function Footer() {
	const { footer, firstCol, secondCol, privacySection } = styles;
	return (
		<footer className={footer}>
			<div className={firstCol}>
				<span style={{ marginBottom: "8px" }}>
					Politica de Privacidad{" "}
				</span>
				<span>© 2023 Creado por</span>
				<span>Ezequiel Dominguez</span>
			</div>
			<div className={secondCol}>
				<div className='flex w-1/2 sm:w-1/3 h-16 lg:w-28 justify-around flex-col items-center'>
					<BoldSpan>Redes sociales</BoldSpan>
					<SocialMediaContainer />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
