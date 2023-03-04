import '../styles/PackageCard.styles.scss'
import { BsFillCheckCircleFill } from "react-icons/bs";
import CarImage from '../Assets/Images/silverPackage.jpg'
import goldCarImage from '../Assets/Images/goldPackage.jpg'
import platinumCarImage from '../Assets/Images/platinumPackage.jpg'
import platinum from '../Assets/Images/platinum.jpg'
import ReadMore from './ReadeMore';
export default function PackageCards() {
    return (
        <div className="pcontainer">

            <div className="package-card-container">
                <div className="text-container">
                    <h2 className="title" style={{ color: "#c4c4c4" }}>SILVER <span style={{ color: "black" }}>
                        PACKAGE
                    </span>
                    </h2>
                    <p className="killometers">Every 5000 Kms or 3 Months (Recommended)</p>
                    <div className="list-container">
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Engine Oil Replacement</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />A/C Filter Replacement</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Car Scanning</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Wiper Fluid Replacement</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Water Top Up</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Car Wash</span>
                    </div>
                    <ReadMore >
                        <div className="list-container">
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Coolant Refil</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Fuel Filer Checking</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Oil Filter Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Brakes Pad Service</span>

                        </div>
                    </ReadMore>
                </div>
                <div className="image-container">
                    <img src={CarImage} />
                </div>

            </div>
            {/* gold services  */}
            <div className="package-card-container">
                <div className="text-container">
                    <h2 className="title" style={{ color: "#FFD700" }}>GOLD <span style={{ color: "black" }}>
                        PACKAGE
                    </span>
                    </h2>
                    <p className="killometers">Every 10,000 Kms or 6 Months (Recommended)</p>
                    <div className="list-container">
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Complete General Checkup</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />A/C Filter Replacement</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Wheel Alignment & Balancing Inspection</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Wiper Fluid Refill</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Water Top Up</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Inspection
                        </span>
                    </div>
                    <ReadMore >
                        <div className="list-container">
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Coolant Refil</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Fuel Filer Checking</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Oil Filter Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Brakes Pad Service</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Engine Oil Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />A/C Filter Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Car Scanning</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Wiper Fluid Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Water Top Up</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Car Wash</span>
                        </div>
                    </ReadMore>
                </div>
                <div className="image-container">
                    <img src={platinumCarImage} />
                </div>

            </div>
            {/* platinum  services  */}
            <div className="package-card-container">
                <div className="text-container">
                    <h2 className="title" style={{ color: "#636363" }}>PLATINUM <span style={{ color: "black" }}>
                        PACKAGE
                    </span>
                    </h2>
                    <p className="killometers">Every 20,000 Kms or 12 Months (Recommended)</p>
                    <div className="list-container">
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Complete Car Body Wax Polish</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Complete Car Interior DryClean</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Wheel Alignment & Balancing Inspection</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Complete General Checkup</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Water Top Up</span>
                        <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Inspection
                        </span>
                    </div>
                    <ReadMore >
                        <div className="list-container">
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Coolant Refil</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Fuel Filer Checking</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Oil Filter Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Brakes Pad Service</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Engine Oil Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />A/C Filter Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Car Scanning</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Wiper Fluid Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Water Top Up</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Car Wash</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Complete General Checkup</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />A/C Filter Replacement</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Wheel Alignment & Balancing Inspection</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Wiper Fluid Refill</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Water Top Up</span>
                            <span><BsFillCheckCircleFill style={{ color: "lightgreen", marginRight: "5px" }} />Battery Inspection
                            </span>
                        </div>
                    </ReadMore>
                </div>
                <div className="image-container">
                    <img src={platinum} />
                </div>

            </div>

        </div>
    )
}