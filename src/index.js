import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  /** テキストボックスを空にする */

  // liタグ生成
  const li = document.createElement("li");

  // // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // // li要素子要素にdivタグを設定
  li.appendChild(div);
  console.log(li);

  // // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;
  console.log(p);

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  console.log(completeButton);
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  console.log(deleteButton);
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    const parentTarget = deleteButton.parentNode;
    const deleteTarget = parentTarget.parentNode;
    console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
