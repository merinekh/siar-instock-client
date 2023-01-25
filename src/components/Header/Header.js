import MainLogo from "../MainLogo/MainLogo";
import PageNav from '../PageNav/PageNav';

function Header() {
    
  return (
    <header className="page-header container">
      <div className="page-header__logo">
        <MainLogo />
      </div>

     <PageNav/>
    
    </header>

   
  );
}

export default Header;
