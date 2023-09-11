let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

const spanEl = document.querySelector(".points");
const boxes = document.querySelector(".boxes");

// Cập nhật số lượng total box trong thẻ <span> có class “points”
const totalBox = () => {
    let listBoxEl = document.querySelectorAll(".box");
    spanEl.textContent = listBoxEl.length;
};

// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
const render = (arr, n) => {
    for (let i = 0; i < n; i++) {
        let newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.style.backgroundColor = arr[i];
        boxes.appendChild(newBox);
    }
    totalBox();
};
render(colors, 5);

// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
const randomBox = () => {
    let listBoxEl = document.querySelectorAll(".box");
    listBoxEl.forEach((box) => {
        box.addEventListener("click", () => {
            box.remove();
            totalBox();
        });
    });
};
randomBox();

// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors),
// đồng thời số lượng total box cũng tăng lên 5
const moreBox = document.getElementById("btn");
moreBox.addEventListener("click", () => {
    render(colors, 5);
    randomBox(document.querySelectorAll(".box"));
});
