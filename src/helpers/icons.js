import { faTrash, faSignOutAlt, faEdit, faXmark, faSpinner, faPlusCircle, faEnvelope, faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faEdit, faXmark, faSpinner, faPlusCircle, faEnvelope, faPhone, faLocationPin);
}

export default Icons;