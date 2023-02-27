import Image from "next/image";

export enum Shape {
	CIRCLE = "circle",
	SQUARE = "square",
	RECTANGLE = "rectangle",
}

type Props = {
	shape: Shape;
	src: any;
	alt: string;
};

function Picture({ src, alt, shape }: Props) {
	const pictures = {
		circle: (
			<>
				<Image
					// object-fit: cover --> sets how the content of a replaced element, should be resized to fit its container
					className='rounded-full w-full h-full object-cover'
					src={src}
					alt={alt}
				/>
			</>
		),
		square: (
			<>
				<Image
					className='w-full h-full object-cover'
					src={src}
					alt={alt}
				/>
			</>
		),
		rectangle: (
			<>
				<Image
					className='w-full h-full object-cover'
					src={src}
					alt={alt}
				/>
			</>
		),
	};
	return <>{pictures[shape]}</>;
}

export default Picture;
