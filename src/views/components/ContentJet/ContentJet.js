import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip'

import {Link} from 'react-router-dom';

import Site_header from '../Site_header/Site_header';
import Site_footer from '../Site_footer/Site_footer';

import imageOne from '../../../img/image2-1.png';
import imageTwo from '../../../img/image2-2.png';
import imageThree from '../../../img/image2-3.png';

import NextPin from '../../../img/next.svg';

const printContent = [

    {
        heading: 'h1',
        title: 'Струйные',
        image: imageOne,
        description: 'Новые МФУ бизнес-класса созданы на основе технологии InkBenefit, обеспечивающей быстродействие, экономичность и профессиональное качество печати. Эти МФУ имеют расширенные возможности подключения и широкий набор функций для эффективной работы в рабочей среде предприятия. Поддержка формата A3 позволяет выполнять на профессиональном уровне печать и сканирование важных документов и материалов (например, рекламных буклетов и постеров, годового плана и т. п.). Функция Wi-Fi Direct™ обеспечивает подключение к беспроводной сети для печати со смартфона, планшета,ноутбука или ПК без маршрутизатора.',
        listTypes: [
            {printType: 'Автоматическая двусторонняя печать в формате А4. '},
            {printType: 'Печать напрямую с USB-накопителя. '},
            {printType:'Автоподатчик на 50 листов.'}
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
        heading: 'h2',
        title: 'MFC-J3530DW',
        image: imageTwo,
        description: 'Отличное качество и большие объемы печати идеально подходит для Вашего офиса, наше цветное лазерное МФУ имеет ряд возможностей, включая встроенную мобильную печать и сканирования, а также двустороннюю печать.',
        listTypes: [
            {printType: 'МФУ с поддержкой A3'},
            {printType: 'Автоматическая двусторонняя печать'},
            {printType: 'Лоток на 250 листов и АПД на 50 листов'},
            {printType: 'Слот для подачи по одному листу на задней панели'},
            {printType: 'Сенсорный ЖК-дисплей 6,8 см'},
            {printType: 'Скорость печати 22 изображений в минуту (черно-белая печать) и 20 изображений в минуту (цветная печать)'},
            {printType: 'Высокоскоростной факс'},
            {printType: 'Время печати первой страницы 6 секунд'}
        ],

        shopLink: true,
        shopUrl: 'https://www.buro247.ru/fashion',
        shopLinkLabel: 'заказать онлайн',

        moreLink: true,
        moreUrl: 'https://www.buro247.ru/fashion',
        moreLinkLabel: 'Подробнее'

    },

    {
        heading: 'h2',
        title: 'MFC-J3930DW',
        image: imageThree,
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
        shopUrl: 'https://www.buro247.ru/fashion',
        shopLinkLabel: 'заказать онлайн',

        moreLink: true,
        moreUrl: 'https://www.buro247.ru/fashion',
        moreLinkLabel: 'Подробнее'
    }

];

const tooltipContentType1 = '<h6>Привет</h6>';

class ContentJet extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (



            <div className="content">
                <Site_header/>

                {printContent.map((item, index)=>

                    <section className="section-box" key={index}>
                        <div className="container">
                            <article  className={item.promoBlock ? 'content-grid content-grid--promo' : 'content-grid'}>

                                <div className="content-grid__header content-grid__header--not-top-gutter is-xs">

                                    {item.heading === 'h1' ? <h1>{String(item.title)}</h1> : <h2>{item.title}</h2>}

                                </div>

                                <div className="content-grid__image">
                                    <img src={item.image} alt={item.title} />

                                    <div className={item.promoBlock ? "tooltip-box" : "tooltip-box is-not"}>



                                        <a className="tooltip-link" data-title="Удобство использования" type="light"  data-tip data-for='tooltip-1' data-delay-show='200' data-type="1">
                                            <ReactTooltip className="tooltip tooltip--type-1" id="tooltip-1" place="left" type="light" effect="solid">
                                                <h6>Удобство использования</h6><p>Удобная панель управления</p>
                                            </ReactTooltip>
                                        </a>


                                        <a className="tooltip-link" data-title="Защита ваших документов" type="light"  data-tip data-for='tooltip-2' data-delay-show='200' data-type="2">
                                            <ReactTooltip className="tooltip tooltip--type-2" id="tooltip-2" place="bottom" type="light" effect="solid">
                                                <h6>Защита ваших документов</h6><p>Защита ваших документов от разных угроз</p>
                                            </ReactTooltip>

                                        </a>

                                        <a className="tooltip-link" data-title="Печать без проблем" type="light"  data-tip data-for='tooltip-3' data-delay-show='200' data-type="3">
                                            <ReactTooltip className="tooltip tooltip--type-3" id="tooltip-3" place="bottom" type="light" effect="solid">
                                                <h6>Печать без проблем</h6><p>Забудьте о замятии бумаги</p>
                                            </ReactTooltip>
                                        </a>


                                        <a className="tooltip-link" data-title="Надежная работа" type="light"  data-tip data-for='tooltip-4' data-delay-show='200' data-type="4">
                                            <ReactTooltip className="tooltip tooltip--type-4" id="tooltip-4" place="bottom" type="light" effect="solid">
                                                <h6>Надежная работа</h6><p>Надежная и стабильная работа без замятий бумаги и зависаний</p>
                                            </ReactTooltip>
                                        </a>


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
                                    {item.shopLink ? <div className="content-grid__button-box"><a className="button" href={item.shopUrl} target="_blank">{item.shopLinkLabel}</a> {item.moreLink ? <a className="button button--next-more" href={item.moreUrl} target="_blank">{item.moreLinkLabel}</a> : ''}</div> : '' }

                                </div>

                                {item.optionsButton ? <div className="content-grid__option-box"><a className="button" href={item.optionsButtonUrl} target="_blank">{item.optionsButtonLabel}</a></div> : ''}
                            </article>
                        </div>
                    </section>
                )}

                <div className="bottom-navigate">
                    <div className="container">
                        <div className="bottom-navigate__navigate">
                            <Link to="/Laser" className="bottom-navigate__next-link">
                                <span>
                                Перейти на раздел <b>Лазерных<span>&nbsp;</span>принтеров</b>
                                </span>
                            </Link>

                            <Link to="/Laser" className="button button--transparent button--next button--transparent-alternative">
                                <img src={NextPin} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>

                <Site_footer/>

            </div>



        )
    }
}

export default ContentJet;