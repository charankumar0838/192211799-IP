let loginPage = e => {
  e.preventDefault();
  let user = e.target[0];
  let pswd = e.target[1];
  if (user.value === "mohansai14@gmail.com" && pswd.value === "260524") {
    window.location = "./Home.html";
  } else {
    let err = "border:solid 2px red";
    user.style.cssText = err;
    pswd.style.cssText = err;
  }
};
