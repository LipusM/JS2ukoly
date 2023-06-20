import './style.scss'

/* import { Navigation } from '../../components/Navigation/index.js' */
import { ContactForm } from './ContactForm/index.js'

export const ContactPage = () => {

    const element = document.createElement("main")

    /* element.append(Navigation()) */
    element.innerHTML += `
    <div id="contactInfo">
        <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.238670614287!2d14.424218376950314!3d50.08181817152416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ed30d58c83%3A0x31bac9b91ab53afb!2zVsOhY2xhdnNrw6kgbsOhbS4sIDExMCAwMCBQcmFoYSAx!5e0!3m2!1scs!2scz!4v1686077841329!5m2!1scs!2scz" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div id="contactForm">
            
        </div>
    </div>
    `
    element.querySelector("#contactForm").append(ContactForm())

    return element
}