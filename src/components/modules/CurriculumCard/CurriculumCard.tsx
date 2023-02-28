import Card from "@/components/elements/Card/Card";

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
		<div className='bg-white h-96'>
			<Card>
				<div className='w-full h-full flex'>
					<div className='flex  w-1/2'>
						<div className='flex flex-col w-full gap-2.5 p-10 pt-20'>
							<h3 className='text-xl text-[color:var(--primary-bg)]'>
								{date}
							</h3>
							<p className='text-lg'>{role}</p>
							<p className='text-sm'>{companyName}</p>
							<p className='text-sm'>{companyLocation}</p>
						</div>
					</div>
					<div className='flex items-center w-1/2 pr-4 pt-6 h-full'>
						<div className='flex flex-col w-full h-auto justify-between gap-4'>
							<p className='text-lg'>{p1}</p>
							<p className='text-lg'>{p2}</p>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default CurriculumCard;
