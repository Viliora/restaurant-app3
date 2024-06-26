/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import gsap from 'gsap';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import FooterToolsInitiator from './utils/footer-tools-initiator';
import CONFIG from './globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

FooterToolsInitiator.init({
  subscribeButton: document.querySelector('#subscribePushNotification'),
  unsubscribeButton: document.querySelector('#unsubscribePushNotification'),
});

gsap.from('.hero-title', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power4.out',
  delay: 0.5,
});

gsap.from('.hero-subtitle', {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power4.out',
  delay: 0.7,
});
