
// ให้ตัวแปร อ้างอิงไปยัง class ใน btn
const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

// ต่อมาจับ event 
btn.addEventListener("click",(e)=>{
    coupon.select() // เมื่อกดปุ่ม มันจะเอาค่า value ที่ทำการจัดเต็ม value ไว้
    coupon.setSelectionRange(0,9999) // คัดลอกข้อความ ที่อยู่ในตัวแปร coupon ที่เก็บ value FLASHSALE2022
    navigator.clipboard.writeText(coupon.value) // copy ข้อความ
    btn.textContent = "คัดลอกคูปองสำเร็จ" // ปุ่มจะเปลี่ยนข้อความ

    // เมื่อกดปุ่มคัดลอกเสร็จจะให้ปุ่มกลับไปเป็นค่าเริ่มต้น 
    // คัดลอกคูปองสำเร็จ => คัดลอก
    // 3 วินาที
    setTimeout(()=>{
        btn.textContent ='คัดลอก'
    },3000)
})