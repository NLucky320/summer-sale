let titleCount = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");

for (const card of cards) {
  card.addEventListener("click", function () {
    const title = card.querySelector("h3").innerText;

    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );

    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = titleCount + "." + title + ":" + price.toFixed(2);

    titleContainer.appendChild(p);
    titleCount++;

    totalPrice = totalPrice + price;

    document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    const finalPrice = document.getElementById("total");
    finalPrice.innerText = totalPrice.toFixed(2);
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const couponElement = document.getElementById("input-field");
  const couponElementValue = couponElement.value;
  const couponCode = couponElementValue.split(" ").join(" ").toUpperCase();
  if (totalPrice >= 200) {
    if (couponCode === "SELL200") {
      const discountPrice = document.getElementById("discountPrice");
      const discountAmount = totalPrice * 0.2;
      discountPrice.innerText = discountAmount.toFixed(2);

      const finalPrice = document.getElementById("total");
      finalPrice.innerText = totalPrice.toFixed(2) - discountAmount.toFixed(2);
      document.getElementById("input-field").value = "";
    } else {
      alert("invalid coupon");
      document.getElementById("input-field").value = "";
    }
  } else {
    alert("please buy more than 200$");
    document.getElementById("input-field").value = "";
  }
});
