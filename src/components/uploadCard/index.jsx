
import React, { useState, useEffect } from 'react';
import { Image } from 'antd';

function UserImages({ userId }) {
	const [images, setImages] = useState([]);

	useEffect(() => {
		async function fetchImages() {
			try {
				const response = await fetch(`https://api.maaleksho.ir/File/GetImageIdsByFolderId?folderName=Users&subjectId=${userId}`, {
					method: 'GET',
					headers: {
						'accept': 'text/plain'
					}
				});
				const imageUrls = await response.json();
				const images = imageUrls.map((url) => `https://api.maaleksho.ir/${url}`);
				setImages(images);
			} catch (error) {
				console.error(error);
			}
		}
		fetchImages();
	}, [userId]);

	return (
		<div className="grid gap-4 grid-cols-3">
			{images.map((image, index) => (
				<Image key={index} src={image} width={150} height={100} />
			))}
		</div>
	);
}

export default UserImages;