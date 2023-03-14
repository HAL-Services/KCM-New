import { useState, useRef, useEffect } from 'react'
import MobileBackground from '../../Assets/Images/loadvideo.mp4'
import '../../styles/LandingPageVideo.styles.scss'
import Loader from '../common/Loader';
export default function LandingPageVideo() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [played, setPlayed] = useState(false);
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
        if (videoRef) {
            videoRef.current.play()
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
                src={MobileBackground}
                ref={videoRef}
                className="video"
            />
            {!videoPlaying && (
                <button style={{ display: "none" }} onClick={handlePlayButtonClick}>Play</button>
            )}

        </>
    )
}