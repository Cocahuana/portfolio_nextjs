import Card from "@/components/elements/Card/Card";
import BlueTitle from "@/components/elements/BlueTitle/BlueTitle";
type Props = {
	date: string;
	role: string;
	companyName: string;
	companyLocation: string;
	p1: string;
	p2: string;
};

function CurriculumCard({
	date,
	role,
	companyName,
	companyLocation,
	p1,
	p2,
}: Props) {
	return (
		<div className='bg-white h-auto lg:h-96'>
			<Card className='w-full h-full flex flex-col lg:flex-row p-6 lg:p-0 gap-6 lg:gap-0'>
				<div className='flex w-full lg:w-1/2 '>
					<div className='flex flex-col w-full gap-2.5 lg:p-10 lg:pt-20'>
						<BlueTitle titleText={date} />
						<p className='text-lg'>{role}</p>
						<p className='text-sm'>{companyName}</p>
						<p className='text-sm'>{companyLocation}</p>
					</div>
				</div>
				<div className='flex items-center w-full lg:w-1/2 lg:pr-4 lg:pt-6 h-full gap2.5 lg:gap-0'>
					<div className='flex flex-col w-full h-auto justify-between gap-4'>
						<p className='text-lg'>{p1}</p>
						<p className='text-lg'>{p2}</p>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default CurriculumCard;
