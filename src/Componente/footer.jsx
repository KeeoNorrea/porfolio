import '../css/footer.css'
import { year } from '../js/fecha'
const   Footer = () =>{


    return (
        <article className="contenedorFooter">
           <section>
                <p>© {year} keoJaramillo-dev. Casi todos los derechos reservados</p>
           </section>
        </article>
    )
}

export default Footer