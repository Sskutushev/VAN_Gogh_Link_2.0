import React from 'react';

// Import assets
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import featureIcon from '../assets/icons/Frame 167.svg';

const AboutSection = () => {
    return (
        <section className="about">
            <div className="container">
                <h2 className="section-title">О КОМПАНИИ</h2>
                <div className="about__content">
                    {/* Image Gallery */}
                    <div className="about__gallery">
                        <div className="about__gallery-item about__gallery-item--large">
                            <img src={image1} alt="About image 1" />
                        </div>
                        <div className="about__gallery-item about__gallery-item--small-1">
                            <img src={image2} alt="About image 2" />
                        </div>
                        <div className="about__gallery-item about__gallery-item--small-2">
                            <img src={image3} alt="About image 3" />
                        </div>
                    </div>
                    {/* Text Description */}
                    <div className="about__description">
                        <p className="about__lead">Компания «SPARTSPRO» специализируется на поставках лифтового
                            оборудования, комплектующих и запчастей для лифтов и эскалаторов ведущих мировых и
                            российских производителей.</p>
                        <ul className="about__features">
                            <li className="about__feature-item">
                                <img src={featureIcon} alt="Feature icon" />
                                <span>Гарантия качества – работаем только с проверенными производителями.</span>
                            </li>
                            <li className="about__feature-item">
                                <img src={featureIcon} alt="Feature icon" />
                                <span>Собственный склад – более 30 000 наименований в наличии для оперативных
                                    отгрузок.</span>
                            </li>
                            <li className="about__feature-item">
                                <img src={featureIcon} alt="Feature icon" />
                                <span>Соблюдение сроков – приоритет компании: быстрая обработка заказов и доставка без
                                    задержек.</span>
                            </li>
                        </ul>
                        <p>Мы обеспечиваем бесперебойные поставки для ваших проектов. Оставьте заявку – и получите
                            коммерческое предложение в кратчайшие сроки!</p>
                        <div className="about__footer">
                            <button className="btn">Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;