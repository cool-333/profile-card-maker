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
  ptHsl.textContent = hexToHsl(ptPicker.value);
  document.documentElement.style.setProperty("--background", ptPicker.value);
});

// 포인트 컬러피커 움직이면 HSL 출력
const ptHsl = document.querySelector("#pt-color-hsl");
function hexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h;
  let s;
  let l = (max + min) / 2;
  if (max === min) {
    h = 0;
    s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else {
      h = (r - g) / d + 4;
    }
    h = h * 60;
  }
  return `${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
}
ptPicker.addEventListener("input", () => {
  ptHsl.textContent = hexToHsl(ptPicker.value);
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
  bgHsl.textContent = bgHexToHsl(bgPicker.value);

  document.documentElement.style.setProperty("--darknavy", bgPicker.value);
});

// 배경 컬러피커 움직이면 HSL 출력
const bgHsl = document.querySelector("#bg-color-hsl");
// 함수 이름을 bgHexToHsl로 변경
function bgHexToHsl(hex) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h;
  let s;
  let l = (max + min) / 2;
  if (max === min) {
    h = 0;
    s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else {
      h = (r - g) / d + 4;
    }
    h = h * 60;
  }
  return `${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
}
bgPicker.addEventListener("input", () => {
  bgHsl.textContent = bgHexToHsl(bgPicker.value);
});

// 다크블루 프리뷰 클릭하면 포인트, 배경 컬러 변경
const blueBt = document.querySelector("#bt-blue");
blueBt.addEventListener("click", () => {
  ptPicker.value = "#38bdf8";
  bgPicker.value = "#1e293b";
  ptHex.textContent = ptPicker.value;
  bgHex.textContent = bgPicker.value;
  ptRgb.textContent = `${parseInt(ptPicker.value.slice(1, 3), 16)}, ${parseInt(ptPicker.value.slice(3, 5), 16)}, ${parseInt(ptPicker.value.slice(5, 7), 16)}`;
  bgRgb.textContent = `${parseInt(bgPicker.value.slice(1, 3), 16)}, ${parseInt(bgPicker.value.slice(3, 5), 16)}, ${parseInt(bgPicker.value.slice(5, 7), 16)}`;
  ptHsl.textContent = hexToHsl(ptPicker.value);
  bgHsl.textContent = bgHexToHsl(bgPicker.value);
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
  ptHsl.textContent = hexToHsl(ptPicker.value);
  bgHsl.textContent = bgHexToHsl(bgPicker.value);
  document.documentElement.style.setProperty("--background", ptPicker.value);
  document.documentElement.style.setProperty("--darknavy", bgPicker.value);
});

// 코랄 핑크 프리뷰 클릭하면 포인트, 배경 컬러 변경
const pinkBt = document.querySelector("#bt-pink");
pinkBt.addEventListener("click", () => {
  ptPicker.value = "#FFAAAA";
  bgPicker.value = "#3B181C";
  ptHex.textContent = ptPicker.value;
  bgHex.textContent = bgPicker.value;
  ptRgb.textContent = `${parseInt(ptPicker.value.slice(1, 3), 16)}, ${parseInt(ptPicker.value.slice(3, 5), 16)}, ${parseInt(ptPicker.value.slice(5, 7), 16)}`;
  bgRgb.textContent = `${parseInt(bgPicker.value.slice(1, 3), 16)}, ${parseInt(bgPicker.value.slice(3, 5), 16)}, ${parseInt(bgPicker.value.slice(5, 7), 16)}`;
  document.documentElement.style.setProperty("--background", ptPicker.value);
  document.documentElement.style.setProperty("--darknavy", bgPicker.value);
  ptHsl.textContent = hexToHsl(ptPicker.value);
  bgHsl.textContent = bgHexToHsl(bgPicker.value);
  document.documentElement.style.setProperty("--background", ptPicker.value);
  document.documentElement.style.setProperty("--darknavy", bgPicker.value);
});

// 포인트컬러/배경컬러 처음 세팅된 상태에서 HSL 바로 출력된 상태로 보이도록 하는 코드
// 1. 초기 기본값 세팅을 위한 함수 생성
function updateColorValues(
  picker,
  hexSpan,
  rgbSpan,
  hslSpan,
  isBackground = false,
) {
  const hex = picker.value;
  hexSpan.textContent = hex;
  // RGB 계산
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  rgbSpan.textContent = `${r}, ${g}, ${b}`;

  // HSL 계산 (포인트/배경 함수 재사용)
  if (isBackground) {
    hslSpan.textContent = bgHexToHsl(hex);
  } else {
    hslSpan.textContent = hexToHsl(hex);
  }
}
// 2. 페이지가 켜지자마자 기본값 세팅 함수 실행
updateColorValues(ptPicker, ptHex, ptRgb, ptHsl, false);
updateColorValues(bgPicker, bgHex, bgRgb, bgHsl, true);
// 처음 켤 때 실행
updateColorValues(ptPicker, ptHex, ptRgb, ptHsl, false);
updateColorValues(bgPicker, bgHex, bgRgb, bgHsl, true);

// 윗쪽 항목 추가. 위아래 항목 삭제
const addHobby = document.querySelector(".add-hobby");
addHobby.addEventListener("click", () => {
  const newContent = document.createElement("div");
  newContent.classList.add("hobby-content");

  const addInput = document.createElement("input");
  const addInputText = document.createElement("input");
  const addDeleteBt = document.createElement("button");
  newContent.appendChild(addInput);
  newContent.appendChild(addInputText);
  newContent.appendChild(addDeleteBt);
  addInput.maxLength = 6;
  addInput.placeholder = "항목";
  addInputText.maxLength = 20;
  addInputText.placeholder = "내용";
  addDeleteBt.textContent = "삭제";

  newContent.appendChild(addInput);
  newContent.appendChild(addInputText);
  newContent.appendChild(addDeleteBt);
  addHobby.parentElement.insertBefore(newContent, addHobby);
  addInput.classList.add("inputbox", "hobby");
  addInputText.classList.add("inputbox", "hobby-text");
  addDeleteBt.classList.add("delete");

  const deleteBts = document.querySelectorAll(".delete");
  deleteBts.forEach((deleteBt) => {
    deleteBt.addEventListener("click", () => {
      deleteBt.parentElement.remove();
    });
  });
});

const addStat = document.querySelector(".add-stat");
addStat.addEventListener("click", () => {
  const newStat = document.createElement("div");
  newStat.classList.add("status1");
  const newStatInput = document.createElement("input");
  const newStatInputText = document.createElement("input");
  const newStatInputValue = document.createElement("input");
  const newStatDeleteBt = document.createElement("button");
  newStatInput.classList.add("inputbox", "stat1");
  newStatInputText.classList.add("inputbox", "stat1-value");
  newStatInputValue.classList.add("slider1");
  newStatDeleteBt.classList.add("delete");
  newStatInput.maxLength = 4;
  newStatInput.placeholder = "항목";
  newStatInputText.type = "number";
  newStatInputText.min = 0;
  newStatInputText.max = 100;
  newStatInputText.maxLength = 3;
  newStatInputText.placeholder = "수치";
  newStatDeleteBt.textContent = "삭제";
  newStatInputValue.type = "range";
  newStatInputValue.min = 0;
  newStatInputValue.max = 100;
  newStatInputValue.value = 0;
  newStatInputValue.step = 10;
  newStat.appendChild(newStatInput);
  newStat.appendChild(newStatInputText);
  newStat.appendChild(newStatInputValue);
  newStat.appendChild(newStatDeleteBt);
  addStat.parentElement.insertBefore(newStat, addStat);

  newStat.appendChild(newStatInput);
  newStat.appendChild(newStatInputText);
  newStat.appendChild(newStatInputValue);
  newStat.appendChild(newStatDeleteBt);
  addStat.parentElement.insertBefore(newStat, addStat);
  newStatDeleteBt.addEventListener("click", () => {
    newStat.remove();
  });
});

// 왼쪽에서 입력하면 오른쪽으로 반영되도록 세팅
const name = document.querySelector(".name");
const preName = document.querySelector(".pre-name");
name.addEventListener("input", () => {
  preName.textContent = name.value;
});
const mbti = document.querySelector(".mbti");
const preMbti = document.querySelector(".pre-mbti");
mbti.addEventListener("input", () => {
  preMbti.textContent = mbti.value;
});
const inAWorld = document.querySelector(".in-a-word");
const preInAWord = document.querySelector(".pre-in-a-word");
inAWorld.addEventListener("input", () => {
  preInAWord.textContent = inAWorld.value;
});

const hobby = document.querySelector(".hobby");
const preHobby = document.querySelector(".pre-hobby");
hobby.addEventListener("input", () => {
  preHobby.textContent = hobby.value;
});
const hobbyContent = document.querySelector(".hobby-text");
const preHobbyText = document.querySelector(".pre-hobby-text");
hobbyContent.addEventListener("input", () => {
  preHobbyText.textContent = hobbyContent.value;
});

const like = document.querySelector(".like");
const preLike = document.querySelector(".pre-like");
like.addEventListener("input", () => {
  preLike.textContent = like.value;
});
const likeContent = document.querySelector(".like-text");
const preLikeText = document.querySelector(".pre-like-text");
likeContent.addEventListener("input", () => {
  preLikeText.textContent = likeContent.value;
});

// 슬라이더 값을 슬라이더 수치값과 동일하게 하는 기능 by 도움
const stat1 = document.querySelector(".stat1");
const stat1Value = document.querySelector(".stat1-value");
const slider1 = document.querySelector(".slider1");
const preStat1 = document.querySelector(".pre-stat1");
const preStat1Value = document.querySelector(".pre-stat1-value");
const preSlider1Fill = document.querySelector(".pre-slider1-fill");
// 항목 입력 → 오른쪽 항목
stat1.addEventListener("input", () => {
  preStat1.textContent = stat1.value;
});
// 숫자 입력 → 왼쪽 슬라이더 + 오른쪽 숫자 + 오른쪽 게이지
stat1Value.addEventListener("input", () => {
  slider1.value = stat1Value.value;
  preStat1Value.textContent = stat1Value.value;
  preSlider1Fill.style.width = stat1Value.value + "%";
});
// 왼쪽 슬라이더 → 왼쪽 숫자 + 오른쪽 숫자 + 오른쪽 게이지
slider1.addEventListener("input", () => {
  stat1Value.value = slider1.value;
  preStat1Value.textContent = slider1.value;
  preSlider1Fill.style.width = slider1.value + "%";
});

const stat2 = document.querySelector(".stat2");
const stat2Value = document.querySelector(".stat2-value");
const slider2 = document.querySelector(".slider2");
const preStat2 = document.querySelector(".pre-stat2");
const preStat2Value = document.querySelector(".pre-stat2-value");
const preSlider2Fill = document.querySelector(".pre-slider2-fill");
stat2.addEventListener("input", () => {
  preStat2.textContent = stat2.value;
});
stat2Value.addEventListener("input", () => {
  slider2.value = stat2Value.value;
  preStat2Value.textContent = stat2Value.value;
  preSlider2Fill.style.width = stat2Value.value + "%";
});
slider2.addEventListener("input", () => {
  stat2Value.value = slider2.value;
  preStat2Value.textContent = slider2.value;
  preSlider2Fill.style.width = slider2.value + "%";
});

const stat3 = document.querySelector(".stat3");
const stat3Value = document.querySelector(".stat3-value");
const slider3 = document.querySelector(".slider3");
const preStat3 = document.querySelector(".pre-stat3");
const preStat3Value = document.querySelector(".pre-stat3-value");
const preSlider3Fill = document.querySelector(".pre-slider3-fill");
stat3.addEventListener("input", () => {
  preStat3.textContent = stat3.value;
});
stat3Value.addEventListener("input", () => {
  slider3.value = stat3Value.value;
  preStat3Value.textContent = stat3Value.value;
  preSlider3Fill.style.width = stat3Value.value + "%";
});
slider3.addEventListener("input", () => {
  stat3Value.value = slider3.value;
  preStat3Value.textContent = slider3.value;
  preSlider3Fill.style.width = slider3.value + "%";
});

const stat4 = document.querySelector(".stat4");
const stat4Value = document.querySelector(".stat4-value");
const slider4 = document.querySelector(".slider4");
const preStat4 = document.querySelector(".pre-stat4");
const preStat4Value = document.querySelector(".pre-stat4-value");
const preSlider4Fill = document.querySelector(".pre-slider4-fill");
stat4.addEventListener("input", () => {
  preStat4.textContent = stat4.value;
});
stat4Value.addEventListener("input", () => {
  slider4.value = stat4Value.value;
  preStat4Value.textContent = stat4Value.value;
  preSlider4Fill.style.width = stat4Value.value + "%";
});
slider4.addEventListener("input", () => {
  stat4Value.value = slider4.value;
  preStat4Value.textContent = slider4.value;
  preSlider4Fill.style.width = slider4.value + "%";
});
