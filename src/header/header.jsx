import Palochka from '../icons/palochka.svg'
import './header.css'
const Header = () => {
	return (
		<header className="Header">
			<div className='flexContainer'>
			<a href=''>MENU</a>
				<div ><img className='Header__img' src={Palochka} alt='#'></img></div> 
			<div>VITALIY GETMAN</div>
				<div><img className='Header__img'  src={Palochka} alt='#'></img></div> 
			<a href=''>CONTACT</a>
			</div>
		</header>
	);
}

export default Header