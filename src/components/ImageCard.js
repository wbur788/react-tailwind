import React from 'react'

const ImageCard = ({ image }) => {
    console.log(image)

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={image.urls.full} alt={image.alt_description} className="w-full"/>
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                Photo by {image.user.name}
                </div>
                <ul>
                    <li>
                        <strong>Like: </strong>
                        {image.likes}
                    </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {image.tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    #{tag.title}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ImageCard
