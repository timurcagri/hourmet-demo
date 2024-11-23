import { Restaurant } from "../assets/data";
import React, { useState } from "react";
import { Rating } from '@mui/material';

type DrawerDefaultProps = {
    restaurant: Restaurant;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
 
const DrawerDefault = ({ restaurant, visible, setVisible }: DrawerDefaultProps) => {
    const [currentVideo, setCurrentVideo] = useState(restaurant.videos[0]);
    
    return (
        <div className={`z-[1000] absolute flex right-2 top-6 transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-[calc(100%+8px)]'}`}>
            <div className="w-[370px] bg-white rounded-lg">
                <h1 className="text-center">{restaurant.name}</h1>
                <img src="../../public/close-116.svg" className="w-9 h-9 hover:cursor-pointer" onClick={() => setVisible(false)} />
                <div className="flex justify-center h-[180px]">
                    {visible && <iframe
                        key={currentVideo.id}
                        width="90%"
                        height="180"
                        src={`https://www.youtube.com/embed/${currentVideo.videoId}?start=${currentVideo.timestamp}&autoplay=1`}
                        title={currentVideo.title}
                        className="mx-auto"
                    ></iframe>}
                </div>
                {restaurant.ratings && <div className="block w-[90%] h-[120px] border mx-auto mt-5">
                    <ul>
                        {restaurant.ratings.google && <li>
                            <img src="/google.svg" alt="Google" className="w-5 h-5 inline-block"/>
                            <Rating name="half-rating-read" defaultValue={restaurant.ratings.google} precision={0.5} readOnly />
                        </li>}
                        {restaurant.ratings.tripadvisor && <li>
                            <img src="/tripadvisor.svg" alt="Tripadvisor" className="w-5 h-5 inline-block"/>
                            <Rating name="half-rating-read" defaultValue={restaurant.ratings.tripadvisor} precision={0.5} readOnly />
                        </li>}
                    </ul>
                </div>}
                <div>
                    <ul className="w-[95%] h-[60%] mx-auto my-5 border-2 p-2 rounded-xl overflow-y-auto max-h-[300px]">
                        {restaurant.videos.map((video) => (
                            <li className="relative flex hover:cursor-pointer mt-2 px-1 py-1 before:absolute before:inset-0 before:border-2 before:border-transparent hover:before:border-black" key={video.id} onClick={() => setCurrentVideo(video)}>
                                <img src={video.thumbnailUrl} alt={video.title} className="w-24 min-h-full"/>
                                <div className="ml-3">
                                    <h1>{video.title}</h1>
                                    <p className="text-blue-600">{video.creator}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DrawerDefault;

