// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";



// alert("hello!!----")



// 整个网页任意位置
// document.querySelector("html").addEventListener("click", () => {
//   alert("别戳我，我怕疼！");
// });


// 点击切换图片
const myImage = document.querySelector("img");
// 地址以index.html的位置为主
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images\\371107.jpg") {
    myImage.setAttribute("src", "images\\xiaoke.jpg");
  } else {
    myImage.setAttribute("src", "images\\371107.jpg");
  }
};



//
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};

