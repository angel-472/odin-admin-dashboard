const avatarImg = document.getElementById("small-avatar");
changeAvatar();

//different avatar every day
function changeAvatar(){
  let date = new Date();
  let seed = Math.ceil(date.getDate() + date.getMonth() * 1234);
  avatarImg.src = 'https://api.dicebear.com/5.x/bottts-neutral/svg?seed=' + seed;
}
