// Vue font awesome
import {
    FontAwesomeIcon,
    FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Brands
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'
import { faPaypal } from '@fortawesome/free-brands-svg-icons/faPaypal'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft'
import { faKoFi } from '@fortawesome/free-brands-svg-icons/faKoFi'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faDiscord, faPaypal, faYoutube, faMicrosoft, faKoFi, faGithub)

// Solid
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes'
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { faFileImage } from '@fortawesome/free-solid-svg-icons/faFileImage'
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons/faCreditCard'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faDownload } from '@fortawesome/free-solid-svg-icons/faDownload'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons/faToggleOff'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons/faToggleOn'
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle'
import { faCertificate } from '@fortawesome/free-solid-svg-icons/faCertificate'
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages'
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons/faShieldHalved'
library.add(
    faTimes,
    faCube,
    faUser,
    faUsers,
    faFileImage,
    faUpload,
    faCircleNotch,
    faCreditCard,
    faCheck,
    faDownload,
    faHome,
    faToggleOff,
    faToggleOn,
    faSearch,
    faCheckCircle,
    faTimesCircle,
    faExternalLinkAlt,
    faExclamationTriangle,
    faCertificate,
    faImages,
    faEdit,
    faTrashAlt,
    faHeart,
    faShieldHalved
)

// Regular
import { faSave } from '@fortawesome/free-regular-svg-icons/faSave'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
library.add(faSave, farHeart)

// Export
export { FontAwesomeIcon, FontAwesomeLayers }
