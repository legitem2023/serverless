import { ReadInventory } from '@/graphql/ClientQuery/ReadInventory';
import { useQuery } from '@apollo/client';
import React from 'react'
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';

const Gallery:React.FC = () => {
    const {data:Products,loading,error} = useQuery(ReadInventory);
    if(loading) return 
    const GalleryImages = Products.ReadInventory.map((item:any)=>{
        return {
            "original":item.thumbnail,
            "thumbnail":item.thumbnail
        }
    })

      return <ImageGallery items={GalleryImages} thumbnailPosition="right"/>;

}

export default Gallery