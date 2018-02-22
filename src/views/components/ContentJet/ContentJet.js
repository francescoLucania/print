import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'
// import {Link, BrowserRouter} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import imageOne from '../../../img/image2-1.png';
import imageOneM from '../../../img/image2-1m.png';
import imageTwo from '../../../img/image2-2.png';
import imageTwoM from '../../../img/image2-2m.png';
import imageThree from '../../../img/image2-3.png';
import imageThreeM from '../../../img/image2-3m.png';
import pl1 from '../../../img/pl1.png';
import pl2 from '../../../img/pl2.png';
import pl3 from '../../../img/pl3.png';

import NextPin from '../../../img/next.svg';

const printContent = [

    {
        heading: 'h1',
        title: 'Цветные струйные устройства',
        image: imageOne,
        imageMin: true,
        imageMinUrl: imageOneM,
        description: 'Новые МФУ бизнес-класса созданы на основе технологии InkBenefit, обеспечивающей быстродействие, экономичность и профессиональное качество печати. Поддержка формата A3 позволяет выполнять на профессиональном уровне печать и сканирование важных документов и материалов (например, рекламных буклетов и постеров, годового плана и т. п.). Функция Wi-Fi Direct™ обеспечивает подключение к беспроводной сети для печати со смартфона, планшета,ноутбука или ПК без маршрутизатора.',
        listTypes: [
          
        ],
        shopLink: false,
        shopUrl: '',
        shopLinkLabel: '',
        promoBlock: true,
        optionsButton: false,
        optionsButtonLabel: 'основные характеристики',
        optionsButtonUrl: '#sectionOne',
        pl: true,
        plTitle: 'Большие картриджи - большая экономия',
        plText: 'Сократите расходы на печать за счет использования картриджей повышенной емкости. Печатайте больше документов с меньшими затратами.'
    },

    {
        id: true,
        idName: 'sectionOne',
        idUrl: 'jet#aboutsectionOne',
        heading: 'h2',
        title: 'МФУ MFC-J3530DW',
        image: imageTwo,
        imageMin: true,
        imageMinUrl: imageTwoM,
        description: '',
        listTypes: [
            {printType: 'МФУ с поддержкой A3'},
            {printType: 'Автоматическая двусторонняя печать'},
            {printType: 'Лоток на 250 листов и АПД на 50 листов'},
            {printType: 'Слот для подачи по одному листу на задней панели'},
            {printType: 'Сенсорный ЖК-дисплей 6,8 см'},
            {printType: 'Скорость печати 22 изображения в минуту (черно-белая печать) и 20 изображений в минуту (цветная печать)'},
            {printType: 'Высокоскоростной факс'},
            {printType: 'Время печати первой страницы 6 секунд'}
        ],

        shopLink: true,
        shopUrl: 'https://brother-printers.ru/product/mfu-brother-mfc-j3530-a3-22-strmin-cherno-beloj-20-strmin-cvetnoj-pechati-4800-x-1200-dpi/',
        shopLinkLabel: 'заказать онлайн',
        shopLinkId: 'order1',

        moreLink: false,
        moreUrl: 'https://www.buro247.ru/fashion',
        moreLinkLabel: 'Подробнее'

    },

    {
        heading: 'h2',
        title: 'МФУ MFC-J3930DW',
        image: imageThree,
        imageMin: true,
        imageMinUrl: imageThreeM,
        description: 'Такой же набор функций, плюс:',
        listTypes: [
            {printType: 'МФУ с поддержкой A3'},
            {printType: 'Автоматическая двусторонняя печать, копирование,'},
            {printType: 'сканирование и прием/отправка факсов'},
            {printType: 'Дополнительный нижний лоток на 250 листов'},
            {printType: 'Обходной лоток на 100 листов'},
            {printType: 'Сенсорный ЖК-дисплей 9,3 см'},
            {printType: 'Память 256 Мбайт'},
            {printType: 'Поддержка стандарта NFC'}
        ],
        shopLink: true,
        shopUrl: 'https://brother-printers.ru/product/mfu-brother-mfc-j3930-a3-22-strmin-cherno-beloj-20-strmin-cvetnoj-pechati-4800-x-1200-dpi/',
        shopLinkLabel: 'заказать онлайн',
        shopLinkId: 'order2',

        moreLink: false,
        moreUrl: 'https://brother-printers.ru/product/mfu-brother-mfc-j3530-a3-22-strmin-cherno-beloj-20-strmin-cvetnoj-pechati-4800-x-1200-dpi/',
        moreLinkLabel: 'Подробнее'
    }

];

class ContentJet extends Component {

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

                    <section  className="section-box" key={index}>
                        {item.id ? <div id={item.idName} className="section-anchor"></div> : ''}
                        <div className="container">
                            <article  className={item.promoBlock ? 'content-grid content-grid--promo' : 'content-grid'}>

                                <div className="content-grid__header content-grid__header--not-top-gutter is-xs">

                                    {item.heading === 'h1' ? <h1>{String(item.title)}</h1> : <h2>{item.title}</h2>}

                                </div>

                                <div className="content-grid__image">
                                    {item.imageMin ? <img className="is-xs" src={item.imageMinUrl} alt={item.title} /> : ''}
                                    <img src={item.image} alt={item.title} />

                                    <div className={item.promoBlock ? "tooltip-box" : "tooltip-box is-not"}>

                                        <button className="tooltip-link" data-title="Сенсорный дисплей" type="light"  data-tip data-for='tooltip-1' data-delay-show='200' data-type="5">
                                            <ReactTooltip className="tooltip tooltip--type-1" id="tooltip-1" place="left" type="light" effect="solid">
                                                <h6>Сенсорный дисплей</h6><p>Цветной сенсорный дисплей, до 9,3 см.</p>
                                            </ReactTooltip>
                                        </button>


                                        <button className="tooltip-link" data-title="Автоматическая подача документов" type="light"  data-tip data-for='tooltip-2' data-delay-show='200' data-type="6">
                                            <ReactTooltip className="tooltip tooltip--type-2" id="tooltip-2" place="bottom" type="light" effect="solid">
                                                <h6>Автоматическая подача документов</h6><p>Автоподатчик документов на 50 листов с функциями сортировки (MFC-J3530DW) и двухстороннего сканирования (MFC-J3930DW)</p>
                                            </ReactTooltip>

                                        </button>

                                        <button className="tooltip-link" data-title="Встроенные средства авторизации" type="light"  data-tip data-for='tooltip-3' data-delay-show='200' data-type="7">
                                            <ReactTooltip className="tooltip tooltip--type-3" id="tooltip-3" place="bottom" type="light" effect="solid">
                                                <h6>Встроенные средства авторизации</h6><p>Встроенный NFC-считыватель для модели MFC-J3930DW.</p>
                                            </ReactTooltip>
                                        </button>


                                        <button className="tooltip-link" data-title="Богатый функционал и выбор подключения" type="light"  data-tip data-for='tooltip-4' data-delay-show='200' data-type="8">
                                            <ReactTooltip className="tooltip tooltip--type-4" id="tooltip-4" place="bottom" type="light" effect="solid">
                                                <h6>Богатый функционал и выбор подключения</h6><p>Печать, копирование, цветное сканирование, факс. Поддержка всех распространенных стандартов мобильной печати и сканирования. Интерфейсы USB 2.0, Ethernet, Wi-Fi, Wi-Fi Direct.</p>
                                            </ReactTooltip>
                                        </button>

                                    </div>


                                </div>
                                <div className="content-grid__description wysiwyg">
                                    <div className="content-grid__header content-grid__header--not-top-gutter is-sm">

                                        {item.heading === 'h1' ? <h1>{String(item.title)}</h1> : <h2>{item.title}</h2>}

                                    </div>

                                    <p>{item.description}</p>
                                    <ul>
                                        {item.listTypes.map((item, index)=>
                                            <li key={index}>{item.printType}</li>
                                        )}
                                    </ul>

                                    {item.pl ? <div><h2 className="content-grid__blue-title">{item.plTitle}</h2><p>{item.plText}</p><div className="content-grid__article-grid"><img src={pl1} alt="img1" /><img src={pl2}  alt="img2"/><img src={pl3}  alt="img3"/></div></div> : ''}

                                    {item.shopLink ? <div className="content-grid__button-box"><a className="button" id={item.shopLinkId} href={item.shopUrl} target="_blank">{item.shopLinkLabel}</a> {item.moreLink ? <a className="button button--next-more" href={item.moreUrl} target="_blank">{item.moreLinkLabel}</a> : ''}</div> : '' }

                                </div>

                                {item.optionsButton ? <div className="content-grid__option-box"><Link className="button" to='jet/#sectionOne'>{item.optionsButtonLabel}</Link></div> : ''}
                            </article>
                        </div>
                    </section>
                )}

                <div className="bottom-navigate">
                    <div className="container">
                        <div className="bottom-navigate__navigate">
                            <Link to="/laser" className="bottom-navigate__next-link">
                                <span>
                                Перейти в раздел <b>Цветных лазерных<span>&nbsp;</span>устройств</b>
                                </span>
                            </Link>

                            <Link to="/laser" className="button button--transparent button--next button--transparent-alternative">
                                <img src={NextPin} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentJet;