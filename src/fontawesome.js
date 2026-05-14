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
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons/faShieldHalved'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons/faUserPlus'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons/faUserMinus'
import { faUserXmark } from '@fortawesome/free-solid-svg-icons/faUserXmark'
library.add(
    faCube,
    faUser,
    faShieldHalved,
    faCircleNotch,
    faUserPlus,
    faUserMinus,
    faUserXmark
)

// Regular
// import { faSave } from '@fortawesome/free-regular-svg-icons/faSave'
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
// library.add(faSave, farHeart)

// Export
export { FontAwesomeIcon, FontAwesomeLayers }
