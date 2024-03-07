import "./Home.css"
import Hall from './image/Hall.jpeg';
export default function Home(){
    return (
        <>
            <div className="homepage">
                <p1>
                    <img  src={Hall} alt="Hall" />

                </p1>
                <div className="ctn-button">
                    <b1>
                        <btt className="btt">
                            <a href="/Room"> ห้องของน้องแมว</a>
                        </btt>
                    </b1>
                    <b2>
                        <btt className="btt">
                            <a href="/Booking"> จองเลย </a>
                        </btt>
                    </b2>
                    <b3>
                        <btt className="btt">
                            <a href="/LiveStream"> ดูโถงโรงแรม </a>
                        </btt>
                    </b3>
                </div>
            </div>
        </>
    )
}
