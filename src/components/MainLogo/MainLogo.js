import { Link } from 'react-router-dom'
import mainLogo from '../../assets/logos/InStock-Logo_1x.png'
import { AppRoute } from '../../const'

function MainLogo() {
  return (
    <Link className='main-logo' to={AppRoute.HOME}>
        <img className='main-logo__image'
        src={mainLogo}
        alt='logo go to home page'
        />
    </Link>
  )
}

export default MainLogo