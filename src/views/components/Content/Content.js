import React, { Component } from 'react';
import PropTypes from 'prop-types';

import imageOne from '../../../img/image1.png';
import imageTwo from '../../../img/image2.png';

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
                                    <img src={item.image} alt="francesco lucania front-end" />
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