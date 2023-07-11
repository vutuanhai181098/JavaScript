let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];

// Cập nhật số lượng total box trong thẻ <span> có class “points”
const totalBox = () => {
    let span = document.querySelector('.points');
    let boxes = document.querySelectorAll('.box');
    span.textContent = boxes.length;
}

// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
const render = (arr, n) => {
    let boxes = document.querySelector('.boxes');
    for(let i = 0; i < n; i++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundColor = arr[i];
        boxes.appendChild(box);
    }
    totalBox();
}
render(colors, 5);

// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
const randomBox = function(arr){
    arr.forEach(box => {
        box.addEventListener('click', () => {
            box.remove();
            totalBox();
        })
    });
}
randomBox(document.querySelectorAll('.box'));


// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors),
// đồng thời số lượng total box cũng tăng lên 5
const moreBox = document.getElementById('btn');
moreBox.addEventListener('click', () => {
    render(colors, 5);
    randomBox(document.querySelectorAll('.box'));
})

