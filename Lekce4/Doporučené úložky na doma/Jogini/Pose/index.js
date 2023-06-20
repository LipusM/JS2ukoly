export const Pose = (props) => {

    const {src} = props
    const pose = "pose"

    return `
    <img class=${pose} src=${src} />
    `
}