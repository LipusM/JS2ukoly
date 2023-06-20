export const Header = (props) => {

    const {title, links} = props

    return`
    <header>
    <h1 class="site-title">${title}</h1>
    <nav>
      <a href="#">${links[0]}</a>
      <a href="#">${links[1]}</a>
      <a href="#">${links[2]}</a>
      <a href="#">${links[3]}</a>
      <a href="#">${links[4]}</a>
    </nav>
  </header>
    `
}