import './footer.css'
import Insta from '../icons/insta.svg'
import Vk from '../icons/vk.svg'
import Telega from '../icons/telega.svg'
import Be from '../icons/behance.svg'
import Phone from '../icons/phone.svg'
import Mail from '../icons/mail.svg'

const Footer = () => {
	return (
		<footer className='Footer'>
			<div className='Footer__FlexContainer'>
				<div >
					<div className='Footer__elemFlexContainer'><img src={Insta}></img>insta</div>
					<div className='Footer__elemFlexContainer'><img src={Vk} href='#'></img>insta</div>
			</div>
			<div>
					<div className='Footer__elemFlexContainer'><img src={Telega} href='#'></img>insta</div>
					<div className='Footer__elemFlexContainer'><img src={Be} href='#'></img>insta</div>
			</div>
			<div>
					<div className='Footer__elemFlexContainer'><img src={Phone} href='#'></img>insta</div>
					<div className='Footer__elemFlexContainer'><img src={Mail} href='#'></img>insta</div>
			</div>
			</div>
		</footer>
	);
}
export default Footer