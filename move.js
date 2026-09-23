// 포인트 컬러피커 움직이면 헥스코드 출력
const ptPicker = document.querySelector(".pt-picker");
ptPicker.addEventListener("input", () => {
  console.log(ptPicker.value);
});
const ptHex = document.querySelector("#pt-color-hex");
ptPicker.addEventListener("input", () => {
  ptHex.textContent = ptPicker.value;
});

// 포인트 컬러피커 움직이면 HEX to RGB 출력
const ptRgb = document.querySelector("#pt-color-rgb");
ptPicker.addEventListener("input", () => {
  ptRgb.textContent = `${parseInt(ptPicker.value.slice(1, 3), 16)}, ${parseInt(ptPicker.value.slice(3, 5), 16)}, ${parseInt(ptPicker.value.slice(5, 7), 16)}`;
  document.documentElement.style.setProperty("--background", ptPicker.value);
});

// 배경 컬러피커 움직이면 헥스코드 출력
const bgPicker = document.querySelector(".bg-picker");
bgPicker.addEventListener("input", () => {
  console.log(bgPicker.value);
});
const bgHex = document.querySelector("#bg-color-hex");
bgPicker.addEventListener("input", () => {
  bgHex.textContent = bgPicker.value;
});

// 배경 컬러피커 움직이면 HEX to RGB 출력
const bgRgb = document.querySelector("#bg-color-rgb");
bgPicker.addEventListener("input", () => {
  bgRgb.textContent = `${parseInt(bgPicker.value.slice(1, 3), 16)}, ${parseInt(bgPicker.value.slice(3, 5), 16)}, ${parseInt(bgPicker.value.slice(5, 7), 16)}`;
  document.documentElement.style.setProperty("--darknavy", bgPicker.value);
});

// 다크블루 프리뷰 클릭하면 포인트, 배경 컬러 변경
const blueBt = document.querySelector("#bt-blue");
blueBt.addEventListener("click", () => {
  ptPicker.value = "#38bdf8";
  bgPicker.value = "#0f172a";
  ptHex.textContent = ptPicker.value;
  bgHex.textContent = bgPicker.value;
  ptRgb.textContent = `${parseInt(ptPicker.value.slice(1, 3), 16)}, ${parseInt(ptPicker.value.slice(3, 5), 16)}, ${parseInt(ptPicker.value.slice(5, 7), 16)}`;
  bgRgb.textContent = `${parseInt(bgPicker.value.slice(1, 3), 16)}, ${parseInt(bgPicker.value.slice(3, 5), 16)}, ${parseInt(bgPicker.value.slice(5, 7), 16)}`;
  document.documentElement.style.setProperty("--background", ptPicker.value);
  document.documentElement.style.setProperty("--darknavy", bgPicker.value);
  ptPicker.addEventListener("input", () => {
    document.documentElement.style.setProperty("--background", ptPicker.value);
  });
  bgPicker.addEventListener("input", () => {
    document.documentElement.style.setProperty("--darknavy", bgPicker.value);
  });
});
// 에메랄드 프리뷰 클릭하면 포인트, 배경 컬러 변경
const greenBt = document.querySelector("#bt-green");
greenBt.addEventListener("click", () => {
  ptPicker.value = "#34D198";
  bgPicker.value = "#033629";
  ptHex.textContent = ptPicker.value;
  bgHex.textContent = bgPicker.value;
  ptRgb.textContent = `${parseInt(ptPicker.value.slice(1, 3), 16)}, ${parseInt(ptPicker.value.slice(3, 5), 16)}, ${parseInt(ptPicker.value.slice(5, 7), 16)}`;
  bgRgb.textContent = `${parseInt(bgPicker.value.slice(1, 3), 16)}, ${parseInt(bgPicker.value.slice(3, 5), 16)}, ${parseInt(bgPicker.value.slice(5, 7), 16)}`;
  document.documentElement.style.setProperty("--background", ptPicker.value);
  document.documentElement.style.setProperty("--darknavy", bgPicker.value);
});
// 코랄 핑크 프리뷰 클릭하면 포인트, 배경 컬러 변경
const greenPk = document.querySelector("#bt-pink");
greenPk.addEventListener("click", () => {
  ptPicker.value = "#FFAAAA";
  bgPicker.value = "#3B181C";
  ptHex.textContent = ptPicker.value;
  bgHex.textContent = bgPicker.value;
  ptRgb.textContent = `${parseInt(ptPicker.value.slice(1, 3), 16)}, ${parseInt(ptPicker.value.slice(3, 5), 16)}, ${parseInt(ptPicker.value.slice(5, 7), 16)}`;
  bgRgb.textContent = `${parseInt(bgPicker.value.slice(1, 3), 16)}, ${parseInt(bgPicker.value.slice(3, 5), 16)}, ${parseInt(bgPicker.value.slice(5, 7), 16)}`;
  document.documentElement.style.setProperty("--background", ptPicker.value);
  document.documentElement.style.setProperty("--darknavy", bgPicker.value);
});