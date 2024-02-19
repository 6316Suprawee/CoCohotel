import "./Home.css"
import Hall from './image/Hall.jpeg';
export default function Home(){
    return <h1 className="h1">
        <p1>
            <img  style={{ width: 1000, height: 600 }} src={Hall} alt="Hall" />

        </p1>
        <p2>
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
        </p2>
        
        
    </h1>
}
