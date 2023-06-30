import styles from './Banner.css'
import Nav from './Nav'

export default function Banner() {
    return (


        <section>
            <Nav />

            <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-perfil img-fluid" src="./assets/img/vn.jpeg" alt="Minha foto" />
                <h3>Vinicius Duarte</h3>
                <span className='slogan'>Desenvolvedor web</span>
            </div>

        </section>
    )
}