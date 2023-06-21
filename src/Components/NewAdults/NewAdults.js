import React from 'react'
import cn from 'classnames'
import { SvgIcon } from './../../Svgs/Svg'
import img1 from '../../assets/img/newAdults/Rectangle 17.png'
import img2 from '../../assets/img/newAdults/Rectangle 18.png'
import img3 from '../../assets/img/newAdults/Rectangle 19.png'
import img4 from '../../assets/img/newAdults/Rectangle 20.png'
import img5 from '../../assets/img/newAdults/Rectangle 21.png'
import img6 from '../../assets/img/newAdults/Rectangle 22.png'

export const NewAdults = () => {
	return (
		<div className={cn('new-adults-s', 'bg-brown')}>
			<img src={img1} alt='img1' className='img-pos img1' />
			<img src={img2} alt='img2' className='img-pos img2' />
			<img src={img5} alt='img3' className='img-pos img3' />
			<img src={img6} alt='img4' className='img-pos img4' />
			<img src={img3} alt='img5' className='img-pos img5' />
			<img src={img4} alt='img6' className='img-pos img6' />
			<div className='container'>
				<h2 className='big'>
					Доєднуйся до нового покоління <br /> талановитих і відданих своїй
					справі <br /> педагогів!
				</h2>
				<a href='/contacts'>
					<SvgIcon type='circle-with-arrow' />
					<span className='dn-480'>Заповнити форму зворотнього звʼязку</span>
					<span className='db-480'>Форма зворотнього звʼязку</span>
				</a>
			</div>
		</div>
	)
}
