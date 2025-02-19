
import { faJs, faNpm, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LABEL = {
REACT : "react",
JS: "js",
NPM: "npm",
SASS: "sass"
}
function Label({type}){

    var content // {text, icon}

    switch (type){
        case LABEL.REACT:
            content = {text : "React", icon:faReact}
            break
            case LABEL.JS:
            content = {text : "JavaScript", icon:faJs}
            break
            case LABEL.NPM:
            content = {text : "npm", icon:faNpm}
            break
            case LABEL.SASS:
            content = {text : "SASS", icon:faSass}
            break
    }

    return (
        <div className="label">
            <span>{content.text}</span><FontAwesomeIcon className="icon" icon={content.icon} />
        </div>
    )

}

export default Label
export {LABEL}