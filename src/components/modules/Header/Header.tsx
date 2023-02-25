import Icon, { Icons } from "@/components/elements/Icon/Icon";
const styles = {
	header: "background-color: red",
	socials: "background-color: teal",
};
const Header = () => (
	<header className={styles.header}>
		<span className={styles.socials} data-cy={"header-socials"}>
			<a
				href={"https://github.com/cocahuana"}
				rel='noreferrer noopener'
				target={"_blank"}
			>
				<Icon icon={Icons.GITHUB} alt={"GitHub"} />
			</a>
			<a
				href={"https://www.instagram.com/ezequiel.dominguez__/"}
				rel='noreferrer noopener'
				target={"_blank"}
			>
				<Icon icon={Icons.INSTAGRAM} alt='Instagram' />
			</a>
			<a
				href={"https://linkedin.com/in/ezequiel-dominguez-dev"}
				rel='noreferrer noopener'
				target={"_blank"}
			>
				<Icon icon={Icons.LINKEDIN} alt='Linkedin' />
			</a>
		</span>
	</header>
);

export default Header;
