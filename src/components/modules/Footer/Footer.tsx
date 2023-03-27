import styles from "./Footer.module.css";
import BoldSpan from "@/components/elements/BoldSpan/BoldSpan";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
function Footer() {
	const { footer, firstCol, secondCol, privacySection } = styles;
	return (
		<footer className={footer}>
			<div className={firstCol}>
				<span style={{ paddingBottom: "8px" }}>
					Politica de Privacidad
				</span>
				<span>© 2023 Creado por</span>
				<span>Ezequiel Dominguez</span>
			</div>
			<div className={`${secondCol}`}>
				<div className='flex sm:w-1/3 h-16 lg:w-28 justify-around flex-col items-center '>
					<BoldSpan>Redes sociales</BoldSpan>
					<SocialMediaContainer className='justify-evenly lg:justify-between' />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
