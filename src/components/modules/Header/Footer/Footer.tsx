import LinkIcon from "@/components/elements/LinkIcon/LinkIcon";
import { Icons } from "@/components/elements/Icon/Icon";
import styles from "./Footer.module.css";
import Flex from "@/components/elements/Flex/Flex";
import BoldSpan from "@/components/elements/BoldSpan/BoldSpan";
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
				<div>
					<BoldSpan>Redes sociales</BoldSpan>
					<div>
						<LinkIcon
							href='https://github.com/cocahuana'
							icon={Icons.GITHUB}
							alt='GitHub'
							target='_blank'
						/>
						<LinkIcon
							href='https://linkedin.com/in/ezequiel-dominguez-dev'
							icon={Icons.LINKEDIN}
							alt='Linkedin'
							target='_blank'
						/>
						<LinkIcon
							href='https://www.instagram.com/ezequiel.dominguez__/'
							icon={Icons.INSTAGRAM}
							alt='Instagram'
							target='_blank'
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
