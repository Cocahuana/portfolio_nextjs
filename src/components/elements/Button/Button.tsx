import styles from "./Button.module.css";
import Link from "next/link";
type Props = {
	text: string;
	active: boolean;
	href: string;
	target?: string;
};

function Button({ text, active, href, target }: Props) {
	return (
		<>
			{active === true ? (
				<Link href={href} target={target}>
					<button
						className={[styles.button, styles.active].join(" ")}
					>
						<span className={styles.button__text}>
							{text.toUpperCase()}
						</span>
					</button>
				</Link>
			) : (
				<Link href={href} target={target}>
					<button
						className={[styles.button, styles.passive].join(" ")}
					>
						<span className={styles.button__text}>
							{text.toUpperCase()}
						</span>
					</button>
				</Link>
			)}
		</>
	);
}

export default Button;
