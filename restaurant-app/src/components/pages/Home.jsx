import { Link } from "react-router-dom"

function Home() {
    return (
        <main className="home">
            <div className="home-definition">
                <h1>RESTAURANT</h1>
                <h2>Sub Title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ex odio ea veniam dolores deleniti repudiandae sint, quidem
                    necessitatibus voluptatem fuga, provident ut? Odio eaque eveniet
                    accusantium quis obcaecati laudantium tempora.</p>

                <Link to="/menu" className="menu-button">Menu</Link>
            </div>
        </main>
    )
}

export default Home