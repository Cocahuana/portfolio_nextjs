import styles from "./Button.module.css";
import Link from "next/link";
type Props = {
	text: string;
	active: boolean;
	href?: string;
	target?: string;
	onClick?: any;
	type?: "button" | "submit";
};

function Button({ text, active, href, target, onClick, type }: Props) {
	const activeBtn = (
		<button
			className={[styles.button, styles.active].join(" ")}
			onClick={onClick}
			type={type}
		>
			<span className={styles.button__text}>{text.toUpperCase()}</span>
		</button>
	);

	const pasiveBtn = (
		<button
			className={[styles.button, styles.passive].join(" ")}
			onClick={onClick}
			type={type}
		>
			<span className={styles.button__text}>{text.toUpperCase()}</span>
		</button>
	);

	return (
		<>
			{active === true ? (
				href ? (
					<Link href={href} target={target}>
						{activeBtn}
					</Link>
				) : (
					activeBtn
				)
			) : href ? (
				<Link href={href} target={target}>
					{pasiveBtn}
				</Link>
			) : (
				pasiveBtn
			)}
		</>
	);
}

export default Button;
