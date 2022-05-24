import Palochka from './icons/palochka.svg'
const Header = () => {
	return (
		<header className="Header">
			<div className='flexContainer'>
			<a href=''>MENU</a>
			<div><img  src={Palochka} alt='#'></img></div> 
			<div>VITALIY GETMAN</div>
			<a href=''>CONTACT</a>
			</div>
		</header>
	);
}

export default Header