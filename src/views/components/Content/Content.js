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
        title: 'Цветные лазерные устройства',
        image: imageOne,
        description: 'Высокоскоростные принтеры и МФУ позволяют существенно повысить эффективность и продуктивность работы. С помощью расширенных функций сканирования и удобного автоподатчика документов на 80 листов можно легко и быстро сканировать документы в облачное хранилище или в сетевую папку. Одним нажатием кнопки вы можете персонализировать сенсорный дисплей для ускорения работы, а тонер-картриджи повышенной емкости позволяют не тратить много времени на замену тонера. По мере роста рабочей нагрузки в офисе вы можете адаптировать эти принтеры, увеличивая объем загрузки бумаги путем добавления лотков.',
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
        title: 'МФУ MFC-L8690CDW ',
        image: imageTwo,
        description: 'Беспроводное цветное лазерное МФУ "4 в 1" для удобной печати, сканирования и совместной работы с документами',
        listTypes: [
           
            {printType: 'Скорость цветной и черно-белой печати 31стр/мин'},
            {printType: 'Скорость сканирования 28стр/мин в цветном и черно-белом режимах'},
            {printType: 'Сенсорный экран 9,3 см'},
            {printType: 'Загрузка бумаги до 300 листов'},
            {printType: 'USB-подключение, подключение к беспроводной сети и проводной сети Gigabit Etherne'},
            {printType: 'Тонер-картриджи с ресурсом до 1800 страниц в комплекте'}
        ],
        shopLink: true,
        shopUrl: 'https://brother-printers.ru/product/brother-mfc-l8690cdwmfu-cvetnoe-lazernoe/',
        shopLinkLabel: 'заказать онлайн'
    },

    {
        heading: 'h2',
        title: 'МФУ MFC-L9570CDW ',
        image: imageThree,
        description: 'Цветное лазероне мфу с большим ЖК-дисплеем и расширенными функциями безопасности',
        listTypes: [
            
            {printType: 'Скорость цветной и черно-белой печати до 31 страницы в минуту'},
            {printType: 'Скорость сканирования до 50 страниц в минуту (100 изображений в минуту)'},
            {printType: 'Загрузка бумаги до 300 листов'},
            {printType: 'Сенсорный дисплей 17,6 см'},
            {printType: 'USB-подключение, подключение к беспроводной сети и проводной сети Gigabit Ethernet'},
            {printType: 'Поддержка стандарта NFC (для мобильной печати и аутентификации карт)'},
            {printType: 'Черный и цветные тонер-картриджи (C, M, Y) с ресурсом до 6500 страниц* в комплекте'}
        ],
        shopLink: true,
        shopUrl: 'https://brother-printers.ru/product/brother-mfc-l9570cdw-mfu-cvetnoe-lazernoe/',
        shopLinkLabel: 'заказать онлайн'
    },

    {
        heading: 'h2',
        title: 'МФУ DCP-L8410CDW ',
        image: imageFour,
        description: 'Беспроводное цветное лазерное МФУ "3 в 1" для удобной печати, сканирования и совместной работы с документами',
        listTypes: [
            {printType: 'Скорость цветной и черно-белой печати 31стр/мин'},
            {printType: 'Скорость сканирования 28стр/мин в цветном и черно-белом режимах  '},
            {printType: 'Сенсорный экран 9,3 см'},
            {printType: 'Загрузка бумаги до 300 листов'},
            {printType: 'USB-подключение, подключение к беспроводной сети и проводной сети Gigabit Etherne'},
            {printType: 'Черный тонер-картридж с ресурсом до 3000 страниц и цветные'},
            
            {printType: 'Тонер-картриджи с ресурсом до 1800 страниц в комплекте'}

        ],

        shopLink: true,
        shopUrl: 'https://brother-printers.ru/product/brother-dcp-l8410cdw-mfu-cvetnoe-lazernoe/',
        shopLinkLabel: 'заказать онлайн',
    },

    {
        heading: 'h2',
        title: 'Принтер HL-L8260CDW ',
        image: imageFive,
        description: 'Простой и удобный беспроводной, цветной, лазерный принтер',
        listTypes: [
            {printType: 'Скорость цветной и черно-белой печати до 31 страницы в минуту'},
            {printType: 'ЖК-дисплей (2 строки текста)'},
            {printType: 'Загрузка бумаги до 300 листов'},
            {printType: 'USB-подключение, подключение к беспроводной сети и проводной сети Gigabit Ethernet'},
            {printType: 'Черный тонер-картридж с ресурсом до 3000 страниц и цветные'},
            {printType: 'Тонер-картриджи с ресурсом 1800 страниц в комплекте'},

        ],
        shopLink: true,
        shopUrl: 'https://brother-printers.ru/product/brother-hl-l8260cdw-printer-cvetnoj-svetodiodnyj/',
        shopLinkLabel: 'заказать онлайн'
    },

    {
        heading: 'h2',
        title: 'Принтер HL-L9310CDW ',
        image: imageSix,
        description: 'Профессиональный цветной лазерный принтер с дополнительными лотками',
        listTypes: [
            {printType: 'Скорость цветной и черно-белой печати до 31 страницы в минуту'},
            {printType: 'Сенсорный дисплей 6,8 см'},
            {printType: 'Загрузка бумаги до 300 листов'},
            {printType: 'USB-подключение, подключение к беспроводной сети и проводной сети Gigabit Ethernet'},
            {printType: 'Поддержка стандарта NFC (для мобильной печати и аутентификации карт)'},
            {printType: 'Черный и цветные тонер-картриджи (C, M, Y) с ресурсом до 6500 страниц в комплекте'},
            {printType: '3 дополнительных нижних лотка на 250 листов / 2 дополнительных нижних лотка на 500 листов / многолотковое устройство (приобретаются отдельно)'},
            {printType: 'Цветной лазерный принтер Brother HL-L9310CDW удостоен престижной награды ≪Выдающийся принтер≫ независимой тестовой лаборатории Buyers Lab (BLI).'}


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
                                                <h6>Сенсорный дисплей</h6><p>Цветной сенсорный дисплей, размер до 17,6 см.</p>
                                            </ReactTooltip>
                                        </a>

                                        <a className="tooltip-link" data-title="Защита ваших документов" type="light"  data-tip data-for='tooltip-2' data-delay-show='200' data-type="2">
                                            <ReactTooltip className="tooltip tooltip--type-2" id="tooltip-2" place="bottom" type="light" effect="solid">
                                                <h6>Автоматическая подача документов</h6><p>Автоподатчик документов емкостью до 80 листов и скоростью сканирования до 100 изобр./мин.</p>
                                            </ReactTooltip>

                                        </a>

                                        <a className="tooltip-link" data-title="Печать без проблем" type="light"  data-tip data-for='tooltip-3' data-delay-show='200' data-type="3">
                                            <ReactTooltip className="tooltip tooltip--type-3" id="tooltip-3" place="bottom" type="light" effect="solid">
                                                <h6>Встроенные средства авторизации»</h6><p>Встроенный NFC-считыватель для моделей MFC-L9570CDW и HL-L9310CDW.</p>
                                            </ReactTooltip>
                                        </a>

                                        <a className="tooltip-link" data-title="Надежная работа" type="light"  data-tip data-for='tooltip-4' data-delay-show='200' data-type="4">
                                            <ReactTooltip className="tooltip tooltip--type-4" id="tooltip-4" place="bottom" type="light" effect="solid">
                                                <h6>Богатый функционал и выбор подключения</h6><p>Печать, копирование, цветное сканирование, факс (для MFC-L9570CDW) . Поддержка всех распространенных стандартов мобильной печати и сканирования. Интерфейсы USB 2.0, Gbit Ethernet, Wi-Fi, Wi-Fi Direct, NFC.</p>
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
                                Перейти в раздел <b>Струйных<span>&nbsp;</span>принтеров</b>
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