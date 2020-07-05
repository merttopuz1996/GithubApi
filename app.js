//elementleri seçicez

 const githubForm = document.getElementById("github-form");
 const nameInput = document.getElementById("githubname");
 const clearLastUsers = document.getElementById("clear-last-users");
 const lastUsers = document.getElementById("last-users");
 const github = new Github();
  const ui = new UI();

 eventListeners();



 function eventListeners(){
  githubForm.addEventListener("submit",getData);
  clearLastUsers.addEventListener("click",clearAllSearch);  
  document.addEventListener("DOMContentLoaded",getAllSearched);



 }
function getData(e){
   let username = nameInput.value.trim();
   if(username === ""){
  alert("lütfen isim gir");

   }
   else{
       //fonk asycn olduğu için promise ile response yakalıcaz
      github.getGithubData(username)
      .then(response =>{
   if(response.user.message === "Not Found"){
       ui.showError("Kullanıcı bulunamadı");
   }
   else{
       //ui.addsearchd: ilk başta böyle bir veri olmadığı için
       //arayüze eklicek sonra storage e bakmalı alta koyarsan hata alır
       ui.addSearchedUserToUI(username);
       Storage.addSearchedUserToStorage(username);
       ui.showUserInfo(response.user);
       ui.showRepoInfo(response.repo);
       ui.trueJoin("Giriş başarılı");
   }


      })
      .catch(err => ui.showError(err));

   }


     ui.clearInput();//input temizleme
    e.preventDefault();
}

function clearAllSearch(){
 //tüm arananları temize
if(confirm("emin misiniz")){
    //silme işlemleri
    Storage.clearAllSearchedUsersFromStorage();//storagedan temizlicek
    ui.clearAllSearchedFromUI();
}

}
function getAllSearched(){
 //arananları storagedan al ve ui a ekle
    let users = Storage.getSearchUsersFromStorage();
  //farklı şekilde oluşturarark yaptık 
  let result="";
  //array üzerined her bir user ı almak için gezinicez
     users.forEach(user =>{
         //aldığımız değerleri li ile yazmamız gerekiyor
         //    <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
     result +=` <li class="list-group-item">${user}</li>`;

     });
     lastUsers.innerHTML =result;
}

 