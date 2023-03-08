import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
	href: string;
	label: string;
	className?: string;
};
function NavLink({ href, label, className }: Props) {
	const router = useRouter();
	const currentRoute = router.pathname;
	return (
		<div className={` w-24 hover:text-[color:var(--primary-bg)] `}>
			<Link href={href}>
				{currentRoute === href ? (
					<p
						className={`text-center text-base text-[color:var(--primary-bg)] ${className}`}
					>
						{label}
					</p>
				) : (
					<p className={` text-center text-base ${className}`}>
						{label}
					</p>
				)}
			</Link>
		</div>
	);
}

export default NavLink;
