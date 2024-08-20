import "./EmptyPage.scss";
import arrow_down from "../../assets/icons/arrow_down.png";

function EmptyPage() {
    return (
        <div>
            <div className="main-area">
                <div className="starting">
                    <h2 className="starting__item">Ready for workout?</h2>
                    <h2 className="starting__item">Let’s start exercise!</h2>
                    <img className="starting__icon" src={arrow_down} alt="arrow down icon" />
                </div>
            </div>
        </div>
    )
}

export default EmptyPage
