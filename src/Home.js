import React from 'react'
import "./home.css"
function Home() {
    return (
        <div className="home">
        <div className="home__banner">
            <h1>Cristobal <b>Maldonado</b></h1>
        </div>
        <div className="home__subBanner">
            <p>Analista Programador | Inacap Valparaiso | Desarrollo Web</p>
        </div>
        <div className="home__content">
            <div id="proyectos" className="home__content__title">
                <h2>Proyectos</h2>
            </div>
            <div className="home__content_clusters">
                <div className="/">
                    <a href="/">
                     <h3>Proyecto 1</h3>
                    </a>
                </div>
                <div className="/">
                    <a href="/">
                     <h3>Proyecto 2</h3>
                    </a>
                </div>
                <div className="/">
                    <a href="/">
                     <h3>Proyecto 3</h3>
                    </a>
                </div>
                <div className="/">
                    <a href="/">
                     <h3>Proyecto 4</h3>
                    </a>
                </div>
                <div className="/">
                    <a href="/">
                     <h3>Proyecto 5</h3>
                    </a>
                </div>
                <div className="/">
                    <a href="/">
                     <h3>Proyecto 6</h3>
                    </a>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Home
