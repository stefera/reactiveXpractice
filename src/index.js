import Rx from "rxjs";
import { Observable } from "rxjs";

const title = document.getElementById("title1");
console.log(title);
let array = [1, 2, 3, 4, 5];
const resultArr = document.getElementById("output");
resultArr.innerHTML = array;

const button = document.getElementById("button");

button.addEventListener("click", (event) => {
  console.log(event, array);
  array.push(array.length + 1);
  resultArr.innerHTML = array;
});

Rx.Observable.fromEvent(button, "click").subscribe((event) =>
  console.log(event.clientX)
);
