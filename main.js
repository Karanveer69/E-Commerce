import './style.css';

import products from './api/products.json';
import { showProductsContainer } from './public/homeProductsCards';

showProductsContainer(products);
