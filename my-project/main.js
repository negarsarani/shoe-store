import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './src/styles/style.css';
import App from './src/App';
import axios from 'axios';
import { settingSwipper } from './src/layout';
const main = document.getElementById('app');main.appendChild(App());
settingSwipper()


