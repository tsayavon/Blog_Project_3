import './about.css'

export default function About() {
    return (
        <div className='about'>
            <div className="singlePostWrapper">
                <img src="https://images8.alphacoders.com/123/thumb-1920-1233731.png" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    <h1> Forger Family </h1>
                </h1>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, facere. Iusto excepturi ex quidem atque voluptates officia, voluptatem numquam cupiditate pariatur quam architecto consectetur corporis at maiores nisi facilis illoLorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, facere. Iusto excepturi ex quidem atque voluptates officia, voluptatem numquam cupiditate pariatur quam architecto consectetur corporis at maiores nisi facilis illo. </p>
                <br />
            </div>
            <div className="positionLoid">
                <img src="https://i.ibb.co/fG0h1zj/Screenshot-5.png" alt=""
                    className='imgLoid' />
                <p className='titleLoid'> Loid Forger</p>
            </div>

            <div className="positionAnya">
                <img src="https://otakotaku.com/asset/img/character/2021/10/anya-forger-617ebc1276cb9p.jpg" alt=""
                    className='imgAnya' />
                <p className='titleAnya'> Anya Forger</p>
            </div>

            <div className="positionYor">
                <img src="https://i.ibb.co/vhmzf0K/Screenshot-3.png" alt=""
                    className='imgYor' />
                <p className='titleYor'> Yor Forger</p>
            </div>
        </div>
    )
}