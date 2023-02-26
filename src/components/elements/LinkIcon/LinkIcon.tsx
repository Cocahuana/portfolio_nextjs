import Icon, { Icons } from "../Icon/Icon";

type Props = {
	href: string;
	target: string;
	icon: Icons;
	alt: string;
};

function LinkIcon({ href, target, icon, alt }: Props) {
	return (
		<a href={href} rel='noreferrer noopener' target={target}>
			<Icon icon={icon} alt={alt} />
		</a>
	);
}

export default LinkIcon;
