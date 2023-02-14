// when click apply button use coupon code then you can discount price Event Listener
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {
   // discount Price and wrong code show text select
   const discountPrice = document.getElementById("discountPrice");
   const wrongCouponText = document.getElementById("wrong-code");

   // price
   const price = document.getElementById("price");
   const priceValue = price.innerText;

   // coupon code input Field value
   const coupon = document.getElementById("coupon");
   const couponValue = coupon.value;
   coupon.value = "";
   // input coupon code validation check and 30% discount price condition

   if (couponValue === "DISC30") {
      const disCountPresent = 30 / 100;
      const disCountPriceTotal = priceValue - (priceValue * disCountPresent)
      discountPrice.innerText = "Please Pay: " + disCountPriceTotal;
      wrongCouponText.innerText = "";
   } else if (couponValue === "") {
      alert("Please enter a Coupon Code");
   } else {
      discountPrice.innerText = "";
      wrongCouponText.innerText = "Your Coupon code in not Valid"
   }

})