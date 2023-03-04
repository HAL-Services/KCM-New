import { useState } from "react"
import '../styles/ReadMore.styles.scss'
export default function ReadMore({children}) {
    const [isRead, setisRead] = useState(false)
    const toggle=() => {
        setisRead(prevState => !prevState)
    }
    return (
        <div className="read-more-component">
            {isRead?children:""}
            <button className="button-41"  style={{color:`${isRead?"coral":"green"}`}}
            onClick={toggle}>{isRead?"Close":"View More"}</button>
        </div>
    )
}