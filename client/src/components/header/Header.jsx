import "./header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitle">
                <span className="headerTitleSm"> Spy X</span>
                <span className="headerTitleLg"> Family</span>
            </div>
            <img className="headerImg" src="https://i.pinimg.com/originals/58/d1/c5/58d1c54252fcfda94625df488971cc9e.jpg" alt="" />
        </div>
    );
}