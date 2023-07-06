/* Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
    Đặt màu văn bản thành #777
    Đặt kích thước phông chữ thành 2rem
    Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
*/

const para = document.createElement("p");
para.id = "text";
para.style.color = "#777";
para.style.fontSize = "2rem";
para.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."
document.body.prepend(para);

/*
Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
*/

const liList = document.querySelectorAll("ul:first-of-type > li");
for(let i = 0; i < liList.length; i++){
    liList[i].style.color = "blue";
}

/*
Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
<ul id="list">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
   <li>Item 5</li>
   <li>Item 6</li>
   <li>Item 7</li>
</ul>
Sử dụng javascript để thực hiện những công việc sau
    1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
    2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
    3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
    4. Remove thẻ <li> 4
    5.Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
*/
const ul = document.getElementById("list");
const liList2 = document.querySelectorAll("#list li");
for (let i = 0; i < 3; i++) {
    const item = document.createElement("li");
    item.textContent = `Item ${liList2.length + i + 1}`;
    ul.appendChild(item);
}

liList2[0].style.color = "red";
liList2[2].style.backgroundColor = "blue";
ul.removeChild(liList2[3]);

const newLi = document.createElement("li");
newLi.textContent = "Đây là thẻ li mới thay thế cho thẻ <li> 4."
ul.insertBefore(newLi, liList2[4]);






