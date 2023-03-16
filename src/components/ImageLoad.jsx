import { useState } from "react"
import { CircularProgress } from "@mui/material"
import '../styles/ImageLoad.styles.scss'
export default function ImageLoad(props) {
    const [isLoaded, setIsLoaded] = useState(false)
    const handleLoad = () => setIsLoaded(true)
    return (
        <div className="load-image-container">
            {!isLoaded && <CircularProgress />}
            <img
                src={props.src}
                onLoad={handleLoad}
                style={{ display: isLoaded ? 'block' : 'none' }}
                alt={props.alt}
            />
        </div>
    )
}