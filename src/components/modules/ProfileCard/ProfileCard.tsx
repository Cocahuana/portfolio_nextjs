import Picture, { Shape } from "@/components/elements/Picture/Picture";
import IMG_Professional from "src/assets/images/professional picture.jpeg";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer";
function ProfileCard() {
	return (
		<div className='w-full h-full bg-[color:var(--skin-bg)] flex flex-col items-center leftBottomShadow'>
			<div className='w-full h-full flex flex-col items-center p-12 gap-6'>
				<div className='w-52 h-52'>
					<Picture
						src={IMG_Professional}
						alt='Professional Picture Ezequiel'
						shape={Shape.CIRCLE}
					/>
				</div>
				<div className='text-center'>
					<h3>Ezequiel </h3>
					<h3>Domínguez</h3>
				</div>
				<div className='w-14 h-0.5 bg-[color:var(--primary-bg)]' />
				<p className='text-lg ml-1 font-medium tracking-widest'>
					FULL STACK DEVELOPER
				</p>
			</div>
			<div className='bg-white w-full flex justify-center items-center p-4 '>
				<SocialMediaContainer
					justify='justify-center'
					items='items-center'
					gap='gap-6'
				/>
			</div>
		</div>
	);
}

export default ProfileCard;
