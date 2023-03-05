import LinkIcon from "@/components/elements/LinkIcon/LinkIcon";
import { Icons } from "@/components/elements/Icon/Icon";

type Props = {
	justify?: string;
	items?: string;
	gap?: string;
	className?: string;
};
function SocialMediaContainer({ justify, items, gap, className }: Props) {
	const styles = ` ${
		justify ? justify : "justify-between"
	} ${items} ${gap} ${className}`;
	return (
		<div className={`flex w-full  ${styles}`}>
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
	);
}

export default SocialMediaContainer;
