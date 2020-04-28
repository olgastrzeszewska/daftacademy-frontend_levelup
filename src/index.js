import './styles/style.scss';
import {scrollTop} from './js/scroll-top.js';
import {allProducts} from './js/all-products.js';
import {loadDate} from './js/load-date.js';

document.addEventListener('DOMContentLoaded', () => {
    scrollTop();
    allProducts();
    loadDate();
})