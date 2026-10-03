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

// 입력 행과 미리보기 행을 함께 관리합니다.
function connectRows(button, rows, previews, limit, isStat = false) {
  const template = rows[0].cloneNode(true);
  const previewTemplate = previews[0].cloneNode(true);
  const pairs = new Map();
  const updateButton = () => { button.disabled = pairs.size >= limit; };
  function connect(row, preview) {
    pairs.set(row, preview);
    const inputs = row.querySelectorAll("input");
    inputs[0].addEventListener("input", () => {
      preview.children[0].textContent = inputs[0].value;
    });
    if (isStat) {
      inputs[2].step = 1;
      function updateValue(source) {
        const value = Math.max(0, Math.min(100, Number(source.value) || 0));
        inputs[1].value = value;
        inputs[2].value = value;
        preview.children[2].textContent = value;
        preview.children[1].firstElementChild.style.width = value + "%";
      }
      inputs[1].addEventListener("input", () => updateValue(inputs[1]));
      inputs[2].addEventListener("input", () => updateValue(inputs[2]));
    } else {
      inputs[1].addEventListener("input", () => {
        preview.children[1].textContent = inputs[1].value;
      });
    }
    row.querySelector(".delete").addEventListener("click", () => {
      row.remove();
      preview.remove();
      pairs.delete(row);
      updateButton();
      if (isStat) document.querySelector("#pre-statbox").hidden = pairs.size === 0;
    });
  }
  rows.forEach((row, index) => connect(row, previews[index]));
  button.addEventListener("click", () => {
    if (pairs.size >= limit) return;
    const row = template.cloneNode(true);
    const preview = previewTemplate.cloneNode(true);
    preview.removeAttribute("id");
    preview.classList.add(isStat ? "pre-stat-row" : "pre-detail-row");
    row.querySelectorAll("input").forEach(input => {
      input.value = input.type === "range" || input.type === "number" ? "0" : "";
    });
    preview.children[0].textContent = "";
    if (isStat) {
      preview.children[2].textContent = "0";
      preview.children[1].firstElementChild.style.width = "0%";
      const box = document.querySelector("#pre-statbox");
      box.appendChild(preview);
      box.hidden = false;
    } else {
      preview.children[1].textContent = "";
      document.querySelector(".preview").insertBefore(preview, document.querySelector("#pre-statbox"));
    }
    button.before(row);
    connect(row, preview);
    updateButton();
  });
  updateButton();
}
connectRows(document.querySelector(".add-hobby"),
  [...document.querySelectorAll(".hobby-content, .like-content")],
  [...document.querySelectorAll("#pre-hobby-text, #pre-like-text")], 3);
connectRows(document.querySelector(".add-stat"),
  [...document.querySelectorAll(".status1, .status2, .status3, .status4")],
  [...document.querySelector("#pre-statbox").children], 6, true);

// 왼쪽에서 입력하면 오른쪽으로 반영되도록 세팅
const name = document.querySelector(".name");
const preName = document.querySelector(".pre-name");
name.addEventListener("input", () => {
  preName.textContent = name.value;
});

// mbti에 -, 알파벳 대문자, 소문자만 출력될 수 있도록 제한
const mbti = document.querySelector(".mbti");
mbti.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^A-Za-z-]/g, "");
});
const preMbti = document.querySelector(".pre-mbti");
mbti.addEventListener("input", () => {
  preMbti.textContent = mbti.value;
});
const inAWorld = document.querySelector(".in-a-word");
const preInAWord = document.querySelector(".pre-in-a-word");
inAWorld.addEventListener("input", () => {
  preInAWord.textContent = inAWorld.value;
});

// 특이사항 및 특이사항 설명 프리뷰
const trait = document.querySelector(".trait");
const preTrait = document.querySelector(".pre-trait");
trait.addEventListener("input", () => {
  preTrait.textContent = trait.value;
});

const traitText = document.querySelector(".trait-text");
const preTraitText = document.querySelector(".pre-trait-text");
traitText.addEventListener("input", () => {
  preTraitText.textContent = traitText.value;
});

// 특이사항 12글자까지만 입력할 수 있도록 제한
trait.maxLength = 9;

// 특이사항 설명 40글자까지만 입력할 수 있도록 제한
traitText.maxLength = 40;
