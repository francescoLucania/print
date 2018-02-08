import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'
// import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import imageOne from '../../../img/image1.png';
import imageTwo from '../../../img/image2.png';
import imageThree from '../../../img/image3.png';
import imageFour from '../../../img/image4.png';
import imageFive from '../../../img/image5.png';
import imageSix from '../../../img/image6.png';

import NextPin from '../../../img/next.svg';

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
        shopLinkLabel: '',
        promoBlock: true,
        optionsButton: true,
        optionsButtonLabel: 'основные характеристики',
        optionsButtonUrl: 'https://www.brother.ru/printers/all-printers'
    },

    {
        id: true,
        idName: 'sectionOne',
        idUrl: 'laser#aboutsectionOne',
        heading: 'h2',
        title: 'Brother MFC-L8690CDW Беспроводное цветное лазерное\u00A0МФУ',
        image: imageTwo,
        description: 'Отличное качество и большие объемы печати идеально подходит для Вашего офиса, наше цветное лазерное МФУ имеет ряд возможностей, включая встроенную мобильную печать и сканирования, а также двустороннюю печать.',
        listTypes: [
            {printType: 'Профессиональное цветное лазерное МФУ'},
            {printType: 'Высокая скорость 28стр/мин в цветном и черно-белом режимах'},
            {printType: '8стр/мин (56из/мин) скорость сканирования в цветном и черно-белом режимах  '},
            {printType: 'Сенсорный экран 9,3 см'},
            {printType: 'Емкость стандартных лотков 300 листов'},
            {printType: 'USB, беспроводная и проводная Гигабитная сети'},
            {printType: 'До 3 000 стр. черный и 1 800 стр. голубой, пурпурный и желтый тонеры в комплекте'}
        ],
        shopLink: true,
        shopUrl: 'https://brother-printers.ru/product/brother-mfc-l8690cdwmfu-cvetnoe-lazernoe/',
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
        shopUrl: 'https://brother-printers.ru/product/brother-mfc-l9570cdw-mfu-cvetnoe-lazernoe/',
        shopLinkLabel: 'заказать онлайн'
    },

    {
        heading: 'h2',
        title: 'Brother DCP-L8410CDW Беспроводное цветное лазерное\u00A0МФУ',
        image: imageFour,
        description: 'Идеально подходит для малых и больших офисов, наше профессиональное цветное лазерное МФУ с возможностью печати, копирования и сканирования, беспроводной двухсторонней печатью, с расширенными функциями безопасности.',
        listTypes: [
            {printType: 'Высокая скорость 31стр/мин в цветном и черно-белом режимах'},
            {printType: '28 из/мин скорость сканирования в цветном и черно-белом режимах'},
            {printType: 'Сенсорный экран 9,3 см'},
            {printType: 'Емкость стандартных лотков 300 листов'},
            {printType: 'USB, беспроводная и проводная Гигабитная сети'},
            {printType: 'До 3 000 стр. черный и 1 800 стр. голубой, пурпурный и желтый тонеры в комплекте'}


        ],

        shopLink: true,
        shopUrl: 'https://brother-printers.ru/product/brother-dcp-l8410cdw-mfu-cvetnoe-lazernoe/',
        shopLinkLabel: 'заказать онлайн',
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
        shopUrl: 'https://brother-printers.ru/product/brother-hl-l8260cdw-printer-cvetnoj-svetodiodnyj/',
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
        shopUrl: 'https://brother-printers.ru/product/brother-hl-l9310cdw-printer-cvetnoj-svetodiodnyj/',
        shopLinkLabel: 'заказать онлайн'
    }

];

class Content extends Component {

    componentDidMount() {
        document.getElementById('back').classList.remove('is-hidden');
        document.getElementById('back-mobile').classList.remove('is-hidden');
        document.getElementById('site-footer').classList.add('is-bottom-gutter');
        window.scrollTo(0, 0);
        // window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }

    render() {
        return (

            <div className="content">

                {printContent.map((item, index)=>

                    <section className="section-box" key={index}>
                        {item.id ? <div id={item.idName} className="section-anchor"></div> : ''}
                        <div className="container">
                            <article  className={item.promoBlock ? 'content-grid content-grid--promo' : 'content-grid'}>

                                <div className="content-grid__header is-xs">

                                    {item.heading === 'h1' ? <h1>{String(item.title)}</h1> : <h2>{item.title}</h2>}

                                </div>

                                <div className="content-grid__image">
                                    <img src={item.image} alt={item.title} />

                                    <div className={item.promoBlock ? "tooltip-box" : "tooltip-box is-not"}>



                                        <a className="tooltip-link" data-title="Удобство использования" type="light"  data-tip data-for='tooltip-1' data-delay-show='200' data-type="1">
                                            <ReactTooltip className="tooltip tooltip--type-1" id="tooltip-1" place="left" type="light" effect="solid">
                                                <h6>Непрерывная эффективность</h6><p>Высокая скорость печати и сканирования.</p>
                                            </ReactTooltip>
                                        </a>

                                        <a className="tooltip-link" data-title="Защита ваших документов" type="light"  data-tip data-for='tooltip-2' data-delay-show='200' data-type="2">
                                            <ReactTooltip className="tooltip tooltip--type-2" id="tooltip-2" place="bottom" type="light" effect="solid">
                                                <h6>Сокращение расходов</h6><p>Яркие изображения благодаря новой технологии тонера.</p>
                                            </ReactTooltip>

                                        </a>

                                        <a className="tooltip-link" data-title="Печать без проблем" type="light"  data-tip data-for='tooltip-3' data-delay-show='200' data-type="3">
                                            <ReactTooltip className="tooltip tooltip--type-3" id="tooltip-3" place="bottom" type="light" effect="solid">
                                                <h6>Печать без проблем</h6><p>Соответствие самым высоким требованиям</p>
                                            </ReactTooltip>
                                        </a>

                                        <a className="tooltip-link" data-title="Надежная работа" type="light"  data-tip data-for='tooltip-4' data-delay-show='200' data-type="4">
                                            <ReactTooltip className="tooltip tooltip--type-4" id="tooltip-4" place="bottom" type="light" effect="solid">
                                                <h6>Контроль устройтсва</h6><p>Ограничение доступа к устройству</p>
                                            </ReactTooltip>
                                        </a>


                                    </div>


                                </div>
                                <div className="content-grid__description wysiwyg">
                                    <div className="content-grid__header is-sm">

                                        {item.heading === 'h1' ? <h1>{String(item.title)}</h1> : <h2>{item.title}</h2>}

                                    </div>

                                    <p>{item.description}</p>
                                    <ul>
                                        {item.listTypes.map((item, index)=>
                                            <li key={index}>{item.printType}</li>
                                        )}
                                    </ul>
                                    {item.shopLink ? <div className="content-grid__button-box"><a className="button" href={item.shopUrl} target="_blank">{item.shopLinkLabel}</a></div> : ''}
                                </div>
                                {item.optionsButton ? <div className="content-grid__option-box"><Link className="button" to='laser/#sectionOne'>{item.optionsButtonLabel}</Link></div> : ''}
                            </article>
                        </div>
                    </section>
                )}

                <div className="bottom-navigate">
                    <div className="container">
                        <div className="bottom-navigate__navigate">
                            <Link to="/jet" className="bottom-navigate__next-link">
                                <span>
                                Перейти на раздел <b>Струйных<span>&nbsp;</span>принтеров</b>
                                </span>
                            </Link>

                            <Link to="/jet" className="button button--transparent button--next button--transparent-alternative">
                                <img src={NextPin} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Content;