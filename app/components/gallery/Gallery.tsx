'use client'

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface ImageProps {
    id: string;
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

interface GalleryProps {
    images: ImageProps[];
    gridClasses?: string;
}

const Gallery = ({
    images,
    gridClasses
}: GalleryProps) => {

    const firstImage = images.length > 0 ? images[0] : {
        id: "1",
        src: "/no-image.png",
        alt: "No image here!",
        width: 1440,
        height: 900
    };

    const [selectedImage, setSelectdImage] = useState(firstImage);

    const handleSelectImage = (image: ImageProps) => {
        setSelectdImage(image);
    }

    return (
        <div className={clsx(
            "rounded-lg shadow-sm bg-white dark:bg-gray-700",
            gridClasses,
        )}>
            <div
                className={clsx(
                    "group relative p-1 md:p-5",
                )}
            >
                <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={selectedImage.width ?? 1440}
                    height={selectedImage.height ?? 900}
                    className='rounded-lg overflow-clip border-2 border-gray-200 dark:border-gray-400'
                />

                <div className="absolute bottom-1 left-1 md:bottom-7 md:left-7">
                    <p className="text-white text-xs md:text-sm px-2 py-1 rounded-full bg-gray-500/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {selectedImage.alt}
                    </p>
                </div>
            </div>
            <div className="p-2 overflow-x-auto flex flex-row items-center gap-5">
                {images.map((image, index) => (
                    <button
                        onClick={() => {
                            handleSelectImage(image);
                        }}
                        type="button"
                        key={image.id}
                        className={clsx(
                            "cursor-pointer overflow-hidden rounded-lg w-[150px] border-2",
                            "shrink-0",
                            "transition-all duration-300",
                            {
                                "border-blue-500 dark:border-blue-300 shadow-sm": selectedImage.id === image.id,
                                "border-gray-200 dark:border-gray-400": selectedImage.id !== image.id
                            }
                        )}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={2880}
                            height={1800}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Gallery;