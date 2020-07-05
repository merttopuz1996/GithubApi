class Storage{
    static getSearchUsersFromStorage(){
//tüm kullanıcıları al
  let users;
  if(localStorage.getItem("searched") === null){
      users =[];
  }
  else
  {
     users =JSON.parse(localStorage.getItem("searched"));

  }
  return users;
    }

  static addSearchedUserToStorage(username){
 //sorgulanmış kullanıcıları storagea ekle ama  önceden varsa ekleme
     let users = this.getSearchUsersFromStorage();
      //indexof ile sorgulama -1 dönerse aynı isim yok demek
       if(users.indexOf(username)=== -1){
       users.push(username);

       }  //değeri ekledik artık güncellememiz gerekiyor
       localStorage.setItem("searched",JSON.stringify(users));
    }
static clearAllSearchedUsersFromStorage(){
   localStorage.removeItem("searched");

}
    
}