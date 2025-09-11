
import {initializeApp} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import {getMessaging} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjTC-rkc4hweFxljmq_whWKMsj9KCzuVs",
  authDomain: "pwa-notificao.firebaseapp.com",
  projectId: "pwa-notificao",
  storageBucket: "pwa-notificao.firebasestorage.app",
  messagingSenderId: "1048304909005",
  appId: "1:1048304909005:web:8ac0bb3a97cf8563a50784",
  measurementId: "G-DX1QC5PKVZ"
};
const app = initializeApp(firebaseConfig);
const messaging = firebaseConfig.messaging();

messaging.onBackgroundMessage((ms)=>{
  console.log('[firebase-messaging-sw.js] Mensagem recebida', ms);

  const notificaoTitulo = ms.notification.title;
  const notificaoOpcao = {
    body: ms.notification.body,
    icons:"/icon.png"
  }
  self.registration.showNotification(notificaoTitulo,notificaoOpcao);
});