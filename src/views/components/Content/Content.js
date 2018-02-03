import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imageOne from '../../../img/image1.png';
import imageTwo from '../../../img/image2.png';
import imageThree from '../../../img/image3.png';
import imageFour from '../../../img/image4.png';
import imageFive from '../../../img/image5.png';
import imageSix from '../../../img/image6.png';

const printContent = [

    {
        heading: 'h1',
        title: 'Лазерные',
        image: imageOne,
        description: 'Отличное качество и большие объемы печати идеально подходит для Вашего офиса, наше цветное лазерное МФУ имеет ряд возможностей, включая встроенную мобильную печать и сканирования, а также двустороннюю печать. Более разумный способ ведения бизнеса. Повысьте эффективность и производительность труда на рабочем месте.',
        listTypes: [
            {printType: 'Настраиваемый сенсорный экран с ярлыками для быстрого доступа к функциям.'},
            {printType: 'Яркие изображения благодаря новой технологии тонера.'},
            {printType:'Экономия времени благодаря тонер-картриджам повышенной ёмкости.'}
        ],
        shopLink: false,
        shopUrl: '',
        shopLinkLabel: ''
    },

    {
        heading: 'h2',
        title: 'Brother MFC-L8690CDW Беспроводное цветное лазерное\u00A0МФУ',
        image: imageTwo,
        description: 'Отличное качество и большие объемы печати идеально подходит для Вашего офиса, наше цветное лазерное МФУ имеет ряд возможностей, включая встроенную мобильную печать и сканирования, а также двустороннюю печать.',
        listTypes: [
            {printType: 'Профессиональное цветное лазерное МФУ'},
            {printType: 'Высокая скорость 31стр/мин в цветном и черно-белом режимах'},
            {printType: '8стр/мин (56из/мин) скорость сканирования в цветном и черно-белом режимах  '},
            {printType: 'Сенсорный экран 9,3 см'},
            {printType: 'Емкость стандартных лотков 300 листов'},
            {printType: 'USB, беспроводная и проводная Гигабитная сети'},
            {printType: 'До 3 000 стр. черный и 1 800 стр. голубой, пурпурный и желтый тонеры в комплекте'}
        ],
        shopLink: true,
        shopUrl: 'https://www.buro247.ru/fashion',
        shopLinkLabel: 'заказать онлайн'
    },

    {
        heading: 'h2',
        title: 'Brother MFC-L9570CDW Беспроводное цветное лазерное\u00A0МФУ',
        image: imageThree,
        description: 'Профессиональное все-в-одном многофункциональное цветное лазерное устройство, с расширенными функциями обработки бумаги и двусторонней печатью. Улучшайте производительность с NFC и большим сенсорным экраном.',
        listTypes: [
            {printType: 'Беспроводное цветное лазерное МФУ'},
            {printType: 'Высокая скорость 31стр/мин в цветном и черно-белом режимах'},
            {printType: 'Скорость 2-стороннего сканирования100из/мин в цветном и черно-белом режимах'},
            {printType: 'Сенсорный экран 17,6 см'},
            {printType: 'USB, беспроводная и проводная Гигабитная сети'},
            {printType: 'NFC (для мобильной печати и идентификации пользователей)'},
            {printType: 'До 6,500 страниц черный, голубой, пурпурный и желтый тонеры'}
        ],
        shopLink: true,
        shopUrl: 'https://www.buro247.ru/fashion',
        shopLinkLabel: 'заказать онлайн'
    },

    {
        heading: 'h2',
        title: 'Brother MFC-L8690CDW Беспроводное цветное лазерное\u00A0МФУ',
        image: imageFour,
        description: 'Идеально подходит для малых и больших офисов, наше профессиональное цветное лазерное МФУ с возможностью печати, копирования и сканирования, беспроводной двухсторонней печатью, с расширенными функциями безопасности',
        listTypes: [
            {printType: 'Профессиональное цветное лазерное МФУ'},
            {printType: 'Высокая скорость 31стр/мин в цветном и черно-белом режимах'},
            {printType: '28стр/мин (56из/мин) скорость сканирования в цветном и черно-белом режимах'},
            {printType: 'Сенсорный экран 9,3 см'},
            {printType: 'Емкость стандартных лотков 300 листов'},
            {printType: 'USB, беспроводная и проводная Гигабитная сети'},
            {printType: 'До 3 000 стр. черный и 1 800 стр. голубой, пурпурный и желтый тонеры в комплекте'}

        ],
        shopLink: true,
        shopUrl: 'https://www.buro247.ru/fashion',
        shopLinkLabel: 'заказать онлайн'
    },

    {
        heading: 'h2',
        title: 'Brother HL-L8260CDW Беспроводной цветной лазерный принтер',
        image: imageFive,
        description: 'Высокая скорость печати и профессиональное качество результатов, наш цветной лазерный принтер имеет целый ряд функций, включая возможности беспроводной и двусторонней печати. Это надежный, безопасный и простой в использовании принтер.',
        listTypes: [
            {printType: 'Высокая скорость 31стр/мин в цветном и черно-белом режимах '},
            {printType: 'Автоматическая 2-сторонняя печать'},
            {printType: 'Емкость стандартных лотков 300 листов '},
            {printType: 'USB, беспроводная и проводная Гигабитная iPrint&Scan, Google Cloud Print & Apple Airprint'},
            {printType: 'До 3 000 стр. черный и 1 800 стр. голубой, пурпурный и желтый тонеры в комплекте'}

        ],
        shopLink: true,
        shopUrl: 'https://www.buro247.ru/fashion',
        shopLinkLabel: 'заказать онлайн'
    },

    {
        heading: 'h2',
        title: 'Brother HL-L9310CDW Беспроводной цветной лазерный принтер',
        image: imageSix,
        description: 'Созданный для высоких офисных потребностей, HL-L9310CDW цветной лазерный принтер с беспроводной двусторонней печатью, надежный и удобный в использовании.',
        listTypes: [
            {printType: 'Высокая скорость 31стр/мин в цветном и черно-белом режимах'},
            {printType: 'Сенсорный экран 6,8 см'},
            {printType: 'Емкость стандартных лотков 300 листов'},
            {printType: 'USB, беспроводная и проводная Гигабитная сети'},
            {printType: 'NFC (для мобильной печати и идентификации пользователей)'},
            {printType: 'До 6,500 черный, голубой, пурпурный и желтый тонеры в комплекте'},


        ],
        shopLink: true,
        shopUrl: 'https://www.buro247.ru/fashion',
        shopLinkLabel: 'заказать онлайн'
    }

];

console.log(printContent[0].listTypes);

class Content extends Component {


    render() {
        return (

            <div className="content">

                {printContent.map((item, index)=>

                    <section className="section-box" key={index}>
                        <div className="container">
                            <article className="content-grid">

                                <div className="content-grid__image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="content-grid__description wysiwyg">
                                    <div className="content-grid__header">

                                        {item.heading === 'h1' ? <h1>{item.title}</h1> : <h2>{item.title}</h2>}


                                    </div>

                                    <p>{item.description}</p>
                                    <ul>
                                        {item.listTypes.map((item, index)=>
                                            <li key={index}>{item.printType}</li>
                                        )}
                                    </ul>
                                    {item.shopLink ? <div className="content-grid__button-box"><a className="button" href={item.shopUrl} target="_blank">{item.shopLinkLabel}</a></div> : ''}
                                </div>
                            </article>
                        </div>
                    </section>
                )}

            </div>



        )
    }
}

export default Content;