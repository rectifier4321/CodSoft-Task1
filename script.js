function changePicture() {
    var img = document.getElementById("profile-pic");
    if (img.src.endsWith("default.jpg")) {
        img.src = "new.jpg";
    } else {
        img.src = "coder.png";
    }
}
