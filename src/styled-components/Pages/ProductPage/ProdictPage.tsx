import React from "react";
import { StyledProductPage } from "./ProductPage.style";

export const ProductPage = () => {
    return(
        <StyledProductPage>
            <body>
                <header>
                    <h1>Онлайн магазин</h1>
                </header>
    
                    <nav>
                        <a href="#">Главная</a>
                        <a href="#">Каталог</a>
                        <a href="#">Контакты</a>
                    </nav>
                    
                    <main>
                        <div className="product-container">
                            <div className="product-image">
                                <div className="Product Image"></div>
                            </div>
                            <div className="product-info">
                                <h3>Название товара</h3>
                                <p>Описание товара: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tellus ac quam ultrices consequat.</p>
                                <p>Цена: $19.99</p>
                                <button>Добавить в корзину</button>
                            </div>
                        </div>
                        <div className="product-container">
                            <div className="product-image">
                                <div className="Product Image"></div>
                            </div>
                            <div className="product-info">
                                <h3>Название товара</h3>
                                <p>Описание товара: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tellus ac quam ultrices consequat.</p>
                                <p>Цена: $19.99</p>
                                <button>Добавить в корзину</button>
                            </div>
                        </div>
                    </main>
                    
                    <footer>
                        <p>&copy; 2022 Онлайн магазин. Все права защищены.</p>
                    </footer>
                </body>
        </StyledProductPage>
    );
};