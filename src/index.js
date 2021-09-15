import "./styles.css";

const onClickAdd = () => {
  //input-Textの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromDeleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = text;
  //console.log(li);

  //ボタン（完了）作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押下された削除の親要素DIVを未完了リストから削除
    deleteFromDeleteList(completeButton.parentNode);

    //完了リストに追加する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement(li);
    li.innerText = text;
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  backButton.addEventListener("click", () => {
    //
    const deleteTarget = backButton.parentNode;
    document.getElementById("complete-list").removeChild(deleteTarget);

    const text = backButton.parentNode.firstChild.innerText;
    createIncompleteList(text);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押下された削除の親要素DIVを未完了リストから削除
    deleteFromDeleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //console.log(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
  //console.log(li1);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
