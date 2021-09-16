import "./styles.css";

const onClickAdd = () => {
  //input-Textの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = inputText;
  //console.log(li);

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  //console.log(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
  //console.log(li1);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
