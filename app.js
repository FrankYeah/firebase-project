const baseURL = 'https://user-system-project.firebaseio.com/data/users.json';


window.onload = function () {
	fetch(baseURL)
	.then((res) => res.json())
	.then(function(data){
        // console.log(data)
	});
}



    ////////////發送好友邀請/////////////////

//     var getRequest =[];
//     $(document).ready(function(){
//     $("#send_friend_request").click(function(){
//         firebase.database().ref('data/users/' + getMail).push().set({
//             friends:{rogertsai917_gmail_com:false}
//           });
//     });
//     });




//  <div>
// <h1>Firebase Realtime Database 取資料</h1>
// <label  id="date"></label><br>
// </div>


        // var limit = database.ref("data/articles");
        // limit.orderByChild("article_tag").equalTo("生活").on("child_added", function(snapshot) {
        // console.log(snapshot.key);
        // });








// // Initialize Firebase
// var config = {
//     apiKey: "AIzaSyBszImtZvM4hAOhXuqVqB7ZCvlYQIkY7V8",
//     authDomain: "user-system-project.firebaseapp.com",
//     databaseURL: "https://user-system-project.firebaseio.com",
//     projectId: "user-system-project",
//     storageBucket: "user-system-project.appspot.com",
//     messagingSenderId: "498400938457"
// };

// firebase.initializeApp(config);
// var provider = new firebase.auth.GoogleAuthProvider(); 
// firebase.auth().signInWithPopup(provider).then(function(result) {      
//     var token         = result.credential.accessToken;      
//     var user          = result.user;      // 使用者資訊
// }).catch(function(error) {
//     // 處理錯誤
//     var errorCode     = error.code;
//     var errorMessage  = error.message;     
//     var email         = error.email;      // 使用者所使用的 Email
//     var credential    = error.credential;      
// });

// firebase.auth().createUserWithEmailAndPassword("test88888@gmail.com", "112233").catch(function(error) {
//     // 處理錯誤區塊
//     var errorCode     = error.code;
//     var errorMessage  = error.message;
// });

// //測試實作

//         /* Handle 建立使用者方法 */
//     var create_error_func = function(error) {
//         var errorCode     = error.code;
//         var errorMessage  = error.message;
//         alert("建立失敗:"+errorMessage);  
//     }
//     var create_success_func = function(error) {
//         alert("建立成功");  
//     }        
    
    
//     /* Handle 使用者登入方法 */
//     var login_error_func = function(error) {
//         var errorCode     = error.code;
//         var errorMessage  = error.message;
//         alert("登入失敗:"+errorMessage);  
//     }
//     var login_success_func = function(error) {
//         alert("登入成功");  
//     }          
    
//     $(document).ready(function(){
//         /* 建立使用者 */
//         $("#create_user").click(function(){
//             var email       = $('#create_email').val();
//             var password    = $('#create_password').val(); 
//             firebase.auth().createUserWithEmailAndPassword(email,password).then(create_success_func).catch(create_error_func);
//         });
        
//         /* 登入使用者 */
//         $("#login_user").click(function(){
//             var email       = $('#login_email').val();
//             var password    = $('#login_password').val(); 
//             firebase.auth().signInWithEmailAndPassword(email, password).then(login_success_func).catch(login_error_func);
//         });            
//     }); 
    

//     <div>
//     <h3>建立使用者帳號</h3>
//     <input type="text" id="ex_create_email"     placeholder="Email"/>
//     <input type="text" id="ex_create_password"  placeholder="密碼"/>
//     <button id="ex_create_user">建立</button>

//     <h3>登入使用者帳號</h3>
//     <input type="text" id="login_email"     placeholder="Email"/>
//     <input type="text" id="login_password"  placeholder="密碼"/>
//     <button id="login_user">登入</button> 
//     </div>