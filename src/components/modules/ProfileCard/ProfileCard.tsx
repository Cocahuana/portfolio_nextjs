import Picture, { Shape } from "@/components/elements/Picture/Picture";
import IMG_Professional from "src/assets/images/professional picture.jpeg";
function ProfileCard() {
	return (
		<div className='w-full h-full bg-[color:var(--skin-bg)] flex flex-col items-center'>
			<div className='w-52 h-52'>
				<Picture
					src={IMG_Professional}
					alt='Professional Picture Ezequiel'
					shape={Shape.CIRCLE}
				/>
			</div>
		</div>
	);
}

export default ProfileCard;
