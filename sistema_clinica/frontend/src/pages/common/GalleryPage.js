import { useState, useEffect } from "react";
import image from "../../assets/placeholder.jpg";

function GalleryPage() {
	const [images, setImages] = useState([]);

	useEffect(() => {
		setImages([
			Image("image 1"),
			Image("image 2"),
			Image("image 3"),
			Image("image 4")
		]);
	}, []);

	function Image(description) {
		return (
			<div className="w-full h-auto flex-col mx-6 my-6">
				<div className="h-[95%] w-auto">
					<img src={image} className="h-full w-auto" alt={description} />
				</div>
				<div className="bg-blue-400 h-[5%]">
					<p className="text-center font-inter text-2xl">{description}</p>
				</div>
			</div>
		);
	}

	return (
		<div className="w-full h-full flex flex-row">
			{images.map((image) => {
				return image;
			})}
		</div>
	);
}

export default GalleryPage;
