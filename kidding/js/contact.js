function changeimg() {
  var img = document.getElementById("object").value;
  var photo = document.getElementById("photo");
  photo.src = "img/"+img+".jpg";
}

function submit_ok(){
  confirm("留言成功");
}