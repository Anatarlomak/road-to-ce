// ===========================================
//  script.js  ·  ใช้ทำให้เว็บโต้ตอบได้
// ===========================================

// 1) หาปุ่มและช่องข้อความจากหน้าเว็บ (ตาม id)
const button = document.getElementById("myButton");
const output = document.getElementById("output");

// 2) ตัวแปรเก็บจำนวนครั้งที่กด
let count = 0;

// 3) เมื่อกดปุ่ม -> บวกค่า แล้วแสดงข้อความ
button.addEventListener("click", function () {
  count = count + 1;
  output.innerText = "คุณกดปุ่มไปแล้ว " + count + " ครั้ง";
});
