
class Github{
    
    constructor(){
 this.url = "https://api.github.com/users/";

}
 async getGithubData(username){
//username name ınputu alıcak
//ilk başta username i eklememiz gerekiyor sonra json ı almamız gerekiyor
    const responseUser = await fetch(this.url + username); //response onbjesi dönücek,
    const responseRepo = await fetch(this.url + username + "/repos");//bilgilerimizi alıcaz
    //resole olduğunda response objemizden verilerimizi json ile alıcaz
  const userData = await responseUser.json();
  const repoData = await responseRepo.json();
    //obje olarak dönücez appte kullanmak için
  return {
      user:userData,
      repo:repoData
  }
}
     
}
//veri alma işlemleri 