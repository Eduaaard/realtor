import React from "react";
import { StyledMainPage } from "./MainPage.style";

export const MainPage = () => {
    return (
        <StyledMainPage>
            <header className="header">
                <h1>Онлайн магазин</h1>
            </header>
            
            <nav>
                <a href="http://localhost:5173/">Главная</a>
                <a href="http://localhost:5173/Product">Каталог</a>
                <a href="#">Контакты</a>
            </nav>
            
            <main>
                <h2>Добро пожаловать в наш магазин!</h2>
                <p>Здесь вы можете найти широкий выбор товаров по доступным ценам.</p>
            </main>
            
            <footer>
                <p>&copy; 2022 Онлайн магазин. Все права защищены.</p>
            </footer>

            
    </StyledMainPage>
    );
};