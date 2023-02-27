import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
	href: string;
	label: string;
};
function NavLink({ href, label }: Props) {
	const router = useRouter();
	const currentRoute = router.pathname;
	console.log({ currentRoute, href });
	return (
		<div className='w-24 hover:text-[color:var(--primary-bg)]'>
			<Link href={href}>
				{currentRoute === href ? (
					<p
						className={
							"text-center text-base text-[color:var(--primary-bg)] "
						}
					>
						{label}
					</p>
				) : (
					<p className={"text-center text-base"}>{label}</p>
				)}
			</Link>
		</div>
	);
}

export default NavLink;
