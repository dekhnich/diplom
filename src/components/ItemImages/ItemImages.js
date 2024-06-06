import './ItemImages.css';

export default function ItemImages({ setCurrentImage, setIsFullscreenImg, imgOne, imgSecond, imgThird, imgFourth }) {
    const onClick = (index) => {
        setIsFullscreenImg(true)
        setCurrentImage(index)
    }
    return (
        <div className="item-images">
            <img
                src={imgOne || 'https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg'}
                onClick={() => { onClick(0) }}
                className="img-box first-img"

            ></img>
            {imgSecond &&
                <img
                    src={imgSecond || 'https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg'}
                    onClick={() => { onClick(1) }}
                    className="img-box second-img minimizeImg"

                ></img>
            }
            {imgThird &&
                <img
                    src={imgThird || 'https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg'}
                    onClick={() => { onClick(2) }}
                    className="img-box third-img minimizeImg"
                ></img>
            }
            {imgFourth &&
                <img
                    src={imgFourth || 'https://cdn.keram-market.ru/files/pics/interior/plitka-loft-italon-23660_11.jpg'}
                    onClick={() => { onClick(3) }}
                    className="img-box fourth-img minimizeImg"

                ></img>
            }
        </div>
    )
}