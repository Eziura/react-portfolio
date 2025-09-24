import { faTrash, faSignOutAlt, faEdit, faXmark, faSpinner, faPlusCircle, faEnvelope, faPhone, faLocationPin, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faXmark, faSpinner, faPlusCircle, faEnvelope, faPhone, faLocationPin, faUser, faLock);
}

export default Icons;