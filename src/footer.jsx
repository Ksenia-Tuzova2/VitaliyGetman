import './footer.css'
import Insta from './icons/insta.svg'
import Vk from './icons/vk.svg'
import Telega from './icons/telega.svg'
import Be from './icons/behance.svg'
import Phone from './icons/phone.svg'
import Mail from './icons/mail.svg'

const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='Footer__FlexContainer'>
			<div>
				<div><img src={Insta}></img>insta</div>
					<div><img src={Vk} href='#'></img>insta</div>
			</div>
			<div>
					<div><img src={Telega} href='#'></img>insta</div>
					<div><img src={Be} href='#'></img>insta</div>
			</div>
			<div>
					<div><img src={Phone} href='#'></img>insta</div>
					<div><img src={Mail} href='#'></img>insta</div>
			</div>
			</div>
		</footer>
	);
}
export default Footer