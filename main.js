import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];

const cardList = document.querySelector(".card-list");
const select = document.querySelector(".search-area");
const dropDown = document.querySelector(".drop-down");
const searchNum = document.querySelector(".search-num");
dropDown.style.display = "none";
function renderData() {
  console.log(data);

  cardList.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    cardList.innerHTML += `<li class="col-4">
            <div class="card  w-100 shadow-sm position-relative" style="width: 18rem;">
              <div class="bg-primary-300 text-white area-mark position-absolute">
                ${data[i].area}
              </div>
              <img src="${
                data[i].imgUrl
              }" class="card-img-top object-fit-cover" alt="swim-picture">
              <div class="card-body p-4 position-relative d-flex flex-column justify-content-between">
                <div class="bg-primary-400 py-1 px-2 position-absolute point-mark text-white">
                  ${data[i].rate.toFixed(1)}
                </div>
                <h5 class="card-title text-primary-400 fs-4 pb-1 border-bottom border-primary-400 border-2 mb-4">${
                  data[i].name
                }
                </h5>
                <p class="card-text text-secondary pb-4 mb-4">
                  ${data[i].description}
                </p>
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <img class="me-1" src="../assets/images/error-icon.png" alt="error-icon">
                    <span class="fw-medium text-primary-400">剩下最後 ${
                      data[i].group
                    } 組</span>
                  </div>
                  <div class="d-flex align-items-center ">
                    <span class=" fw-medium text-primary-400 me-1">TWD</span>
                    <span class="fw-medium fs-2 text-primary-400">$${data[
                      i
                    ].price.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>`;
  }
}
// 篩選清單點擊後出現
select.addEventListener("click", function (e) {
  dropDown.style.display = "block";
});

let value;

// 篩選資料
dropDown.addEventListener("click", function (e) {
  value = e.target.closest(".drop-down-item").getAttribute("value");
  cardList.innerHTML = "";
  let newData;
  if (value !== "all") {
    newData = data.filter((el) => el.area === value);
  } else if (value === "all") {
    newData = data;
  }
  for (let i = 0; i < newData.length; i++) {
    cardList.innerHTML += `<li class="col-4">
          <div class="card w-100 shadow-sm position-relative" style="width: 18rem;">
            <div class="bg-primary-300 text-white area-mark position-absolute">
              ${newData[i].area}
            </div>
            <img src="${
              newData[i].imgUrl
            }" class="card-img-top" alt="swim-picture">
            <div class="card-body p-4 position-relative d-flex flex-column justify-content-between">
              <div class="bg-primary-400 py-1 px-2 position-absolute point-mark text-white">
                ${newData[i].rate.toFixed(1)}
              </div>
              <h5 class="card-title text-primary-400 fs-4 pb-1 border-bottom border-primary-400 border-2 mb-4">${
                newData[i].name
              }
              </h5>
              <p class="card-text text-secondary pb-4 mb-4">
                ${newData[i].description}
              </p>
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center">
                  <img class="me-1" src="../assets/images/error-icon.png" alt="error-icon">
                  <span class="fw-medium text-primary-400">剩下最後 ${
                    newData[i].group
                  } 組</span>
                </div>
                <div class="d-flex align-items-center ">
                  <span class=" fw-medium text-primary-400 me-1">TWD</span>
                  <span class="fw-medium fs-2 text-primary-400">$${newData[
                    i
                  ].price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </li>`;
  }
  searchNum.textContent = `本次搜尋共 ${newData.length} 筆資料`;
});

// 下拉清單消失（篩選）
document.addEventListener("click", function (e) {
  if (e.target !== select) dropDown.style.display = "none";
});

// ajax 畫面渲染
// let data;
// axios
//   .get(
//     "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json"
//   )
//   .then(function (res) {
//     data = res.data.data;

//     for (let i = 0; i < data.length; i++) {
//       cardList.innerHTML += `<li class="col-4">
//           <div class="card w-100 shadow-sm position-relative" style="width: 18rem;">
//             <div class="bg-primary-300 text-white area-mark position-absolute">
//               ${data[i].area}
//             </div>
//             <img src="${
//               data[i].imgUrl
//             }" class="card-img-top" alt="swim-picture">
//             <div class="card-body p-4 position-relative d-flex flex-column justify-content-between">
//               <div class="bg-primary-400 py-1 px-2 position-absolute point-mark text-white">
//                 ${data[i].rate.toFixed(1)}
//               </div>
//               <h5 class="card-title text-primary-400 fs-4 pb-1 border-bottom border-primary-400 border-2 mb-4">${
//                 data[i].name
//               }
//               </h5>
//               <p class="card-text text-secondary pb-4 mb-4">
//                 ${data[i].description}
//               </p>
//               <div class="d-flex justify-content-between">
//                 <div class="d-flex align-items-center">
//                   <img class="me-1" src="../assets/images/error-icon.png" alt="error-icon">
//                   <span class="fw-medium text-primary-400">剩下最後 ${
//                     data[i].group
//                   } 組</span>
//                 </div>
//                 <div class="d-flex align-items-center ">
//                   <span class=" fw-medium text-primary-400 me-1">TWD</span>
//                   <span class="fw-medium fs-2 text-primary-400">$${data[
//                     i
//                   ].price.toLocaleString()}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </li>`;
//     }
//     searchNum.textContent = `本次搜尋共 ${data.length} 筆資料`;
//   });
const locationSelect = document.querySelector(".location-select");
const defaultValue = document.querySelector(".default-value");
const locationSelectLists = document.querySelector(".location-select-lists");
const ticketForm = document.querySelector(".ticket-form");
locationSelectLists.style.display = "none";

//下拉清單點擊後出現 (表單)
locationSelect.addEventListener("click", function (e) {
  locationSelectLists.style.display = "block";
});

//下拉清單點擊後 select更改預設值 下拉清單消失 （表單）
locationSelectLists.addEventListener("click", function (e) {
  const value = e.target
    .closest(".location-select-lists-item")
    .getAttribute("value");
  defaultValue.textContent = value;
  defaultValue.value=value;
  locationSelectLists.style.display = "none";
});
ticketForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(ticketForm);
  const formDataObj = Object.fromEntries(formData.entries());
  formDataObj.id = data.length;
  formDataObj.group = Number(formDataObj.group);
  formDataObj.price = Number(formDataObj.price);
  formDataObj.rate = Number(formDataObj.rate);
  console.log(formDataObj);
  data.push(formDataObj);

  renderData();
});

renderData();
