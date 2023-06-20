export const Intro = (props) => {

    const {heading, text} = props
    const intro = "intro"

    return `
    <div class=${intro}>
        <h2>${heading}</h2>
        <p>${text}</p>
    </div>
    `
}