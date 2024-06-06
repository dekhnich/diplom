import { useEffect, useState } from 'react';
import './FullscreenImage.css'
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function FullscreenImage({ currentImage, setCurrentImage, setIsFullscreenImg, img }) {
    const [maxIndexImages, setMaxIndexImages] = useState(0)

    useEffect(() => {
        setMaxIndexImages(img.length - 1)
    }, [])

    const onClickForward = () => {
        if (currentImage + 1 > maxIndexImages) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }

    const onClickBack = () => {
        if (currentImage - 1 < 0) {
            setCurrentImage(maxIndexImages)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }

    return (
        <>

            <div onClick={() => { setIsFullscreenImg(false) }} className='fullscreen-image_section'>
                <IoCloseSharp id='close' onClick={() => { setIsFullscreenImg(false) }} size={50} color='gray' />
            </div>
            <div className="fillscreen-image">
                <img src={img[currentImage] || `https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg`}
                ></img>
            </div>
            <div className="arrows">
                <IoIosArrowBack cursor={'pointer'} onClick={() => { onClickBack() }} id='back' size={50} color='gray' />
                <IoIosArrowForward cursor={'pointer'} onClick={() => { onClickForward() }} id='forward' size={50} color='gray' />
            </div>
        </>
    );
}