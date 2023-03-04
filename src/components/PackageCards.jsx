import '../styles/PackageCard.styles.scss'
import { BsFillCheckCircleFill } from "react-icons/bs";
import CarImage from '../Assets/Images/silverPackage.jpg'
import ReadMore from './ReadeMore';
export default function PackageCards() {
    return (
        <div className="package-card-container">
            <div className="text-container">
                <h2 className="title">SILVER PACKAGE</h2>
                <p className="killometers">Every 5000 Kms or 3 Months (Recommended)</p>
                <div className="list-container">
                    <span><BsFillCheckCircleFill style={{ color: "lightgreen",marginRight:"5px" }} />Wiper Fluid Replacement</span>
                    <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Battery Water Top Up</span>
                    <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Car Wash</span>
                    <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Interior Vacuuming</span>
                </div>
                <ReadMore >
                    <div className="list-container">
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Wiper Fluid Replacement</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Battery Water Top Up</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Car Wash</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Interior Vacuuming</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Wiper Fluid Replacement</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Battery Water Top Up</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Car Wash</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Interior Vacuuming</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Wiper Fluid Replacement</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Battery Water Top Up</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Car Wash</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen" ,marginRight:"5px" }} />Interior Vacuuming</span>
                    </div>
                </ReadMore>
            </div>
            <div className="image-container">
                <img src={CarImage} />
            </div>

        </div>
    )
}