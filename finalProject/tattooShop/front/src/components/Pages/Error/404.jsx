import { ButtonLink } from '../../Buttons/Buttons';

import images from './../../../assets/images/error.png'
import './404.scss';

export default function Page404 () {
    return (
        <div className='error__container'>
            <div className='error__images'>
                <img src={images} alt="img" />
            </div>
            <div className='error__content'>
                <h2 className='content__title'>Помилка 404!</h2>
                <div className='content__text'>
                    <p>Ця сторінка не знайдена, ми вже працюємо, щоб її відновити!</p>
                </div>
                <div className='content__buttons'>
                    <ButtonLink  text='Перейти до каталогу' url='/catalog' className='btn hero__btn'/>
                    <ButtonLink  text='Перейти на головну' url='/' className='btn banner__btn'/>
                </div>
            </div> 
        </div>
        
    )
}