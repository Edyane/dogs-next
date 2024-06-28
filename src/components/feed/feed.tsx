import React, { useState } from 'react';
import { Photo } from '@/actions/photos-get';
import FeedPhotos from "./feed-photos";

export default function Feed({ photos } : { photos: Photo[] }) {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true)

    return (
        <div>
            <FeedPhotos photos={photos} />
        </div>
    )
}