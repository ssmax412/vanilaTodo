import "./styles.css";

const onClickAdd = () => {
  // テキストを追加し、消去
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};
// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li生成
  const li = document.createElement("li");

  // Pに入力
  const p = document.createElement("p");
  p.innerText = text;

  // button(完了）生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // // 押された完了ボタンのdivを見完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentElement);

    // 完了リストに追加
    const addTarget = completeButton.parentNode.parentNode;

    // todo内容を取得
    const text = addTarget.firstElementChild.children[0].innerText;
    //div以下を初期化
    addTarget.textContent = null;

    // li生成
    const p = document.createElement("p");
    p.innerText = text;

    // button生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //  押された戻すボタンを完了リストから削除
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = deleteButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // 新しいdivの作成
    const divx = document.createElement("div");
    divx.className = "list-row";

    // 追加していく
    addTarget.appendChild(divx);
    divx.appendChild(p);
    divx.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除）生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // // 押された削除ボタンのdivを見完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentElement);
  });

  // liの中に子要素
  li.appendChild(div);

  // divの中に子要素
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了
  document.getElementById("incomplete-list").appendChild(li);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
