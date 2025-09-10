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

function solicitarPermissao() {
 Notification.requestPermission().then((permissao)=>{
  if(permissao === 'granted'){
    
      console.log("permissao aceita");

      messaging.getToken({vopidKey:"BCPlwECtoEeh3pYIzF1ZY7Z-g6Vyh5AiNCHw0HA6sLfLZwSJBhv8pkT0VtHPBoDIlp1bJO6MhkcxADnNn4br3WM"}).then((ctoken)=>{
        if(ctoken){
          console.log("token do dispositivo OK!");
        }else{
          console.log("token do dispositivo não recebido.");
        }
      }).catch((error)=>{
        console.log("erro ao solicitar token",error);
      });
      }
    });
}
const btn_permissao = document.getElementById("btn-permissao");
btn_permissao.addEventListener("click",solicitarPermissao());