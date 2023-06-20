import './style.css'

export const Footer = () => {

    const element = document.createElement("footer")
    element.innerHTML = `
      <div class="container">
        <p class="footer__text">
          Cvičná aplikace pro výuku JavaScriptu.
        </p>
      </div>  
    `
    return element
}