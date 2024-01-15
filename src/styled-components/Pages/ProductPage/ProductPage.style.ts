import styled from "styled-components";


export const StyledProductPage = styled.div`
body {
            font-family: Arial, sans-serif;
        }
        
        header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        
        nav {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
        }
        
        nav a {
            display: inline-block;
            margin: 0 10px;
            color: #333;
            text-decoration: none;
        }
        
        main {
            padding: 20px;
        }
        
        .product-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .product-image {
            flex-basis: 50%;
        }
        
        .product-image img {
            width: 100%;
            height: auto;
        }
        
        .product-info {
            flex-basis: 45%;
        }
        
        .product-info h3 {
            margin-top: 0;
        }
        
        footer {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
`