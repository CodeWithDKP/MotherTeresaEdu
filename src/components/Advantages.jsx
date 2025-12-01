import advantagesImgHorizontal from '../images/admissionshala.png';
import advantagesImgVertical from '../images/admissionshala_Mob.png';
function Advantages() {
    return (
        <div className="advantages-img">
            <img
                src={advantagesImgHorizontal}
                alt="advantages"
                className="adv-img adv-img-desktop"
            />

            <img
                src={advantagesImgVertical}
                alt="advantages"
                className="adv-img adv-img-mobile"
            />
        </div>
    )
}

export default Advantages
