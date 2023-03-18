import { useState, useRef, useEffect } from 'react'

import '../styles/LandingPageVideo.styles.scss'
import Loader from './common/Loader';
export default function LandingPageVideo() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [played, setPlayed] = useState(false);
    const [windowWidth,setWindowWidth]=useState(window.innerWidth)
    const imageUrl=windowWidth>=650?"https://res.cloudinary.com/dfbsvaliu/video/upload/v1679120168/Untitled_smpyqv.mp4":"https://res.cloudinary.com/dfbsvaliu/video/upload/v1678962317/loadvideo_kftr2i_compressed_aezliy.mp4"
    const videoRef = useRef(null)
    function handleVideoLoad() {
        setVideoLoaded(true);
    }

    function handlePlayButtonClick() {
        setVideoPlaying(true);
        const videoElement = document.getElementById('landing-video');
        videoElement.play();
    }
    function handleVideoEnded() {
        setVideoPlaying(false);
        setPlayed(true);
    }
    useEffect(() => {
        const handleWindowResize=()=>{
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",handleWindowResize)
        if (videoRef) {
            videoRef.current.play()
        }
        return ()=>{
            window.removeEventListener("resize",handleWindowResize)
        }
    }, [])
    return (
        <>
            {!videoLoaded && (
                <Loader />
            )}
            <video
                id="landing-video"
                autoPlay
                muted
                playsInline
                onLoadedData={handleVideoLoad}
                onEnded={handleVideoEnded}
                style={{ display: videoLoaded ? 'block' : 'none' }}
                src={imageUrl}
                ref={videoRef}
                className="video"
            />
            {!videoPlaying && (
                <button style={{ display: "none" }} onClick={handlePlayButtonClick}>Play</button>
            )}

        </>
    )
}