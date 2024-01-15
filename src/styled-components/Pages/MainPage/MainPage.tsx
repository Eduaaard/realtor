import React from "react";
import { StyledMainPage } from "./MainPage.style";
import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
        <StyledMainPage>
            <header className="header">
                <h1>Онлайн магазин</h1>
            </header>
            
            <nav>
                <Link to={`/`}>Главная</Link> 
                <Link to={`/Product`}>Каталог</Link> 
                <a href="#">Контакты</a>
            </nav>
            git commit -m "first commit"
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