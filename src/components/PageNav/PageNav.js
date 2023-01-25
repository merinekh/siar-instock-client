import { Link, useLocation } from 'react-router-dom';
import { NavigationItems } from '../../const';

function PageNav(){
  const location = useLocation();
  const setClassName = (url) =>
    location.pathname.includes(url)
      ? 'page-navigation__item page-navigation__item--current'
      : 'page-navigation__item';


  return (
    <ul className="page-navigation">
      {NavigationItems.map(({ url, text }) => 
         (
          <li key={url} className={setClassName(url)}>
            {location.pathname === url
              ?
              <span className="page-navigation__link">
                {text}
              </span>
              :
              <Link className="page-navigation__link" to={url}>
                {text}
              </Link>}
          </li>)
      )}
    </ul>
  );
}

export default PageNav;