import Cat from './image/catbanner.jpeg';
import'./Booking.css';
export default function Booking(){
    return <book className="book">
        <bt1 className="bt1">
        <h1 className="h1">
        จองผ่านLine@
        </h1>
            <btt className="btt">
                <a href="https://line.me/en/" target="_blank" rel="noopener noreferrer">
                @cococathotel
                </a>
            </btt>
        </bt1>
       
        <img src={Cat} alt="Cat" />
        
    </book>
}
