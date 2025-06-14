import "./style.css";
let title = document.querySelector(".screen__content-title");
let descr = document.querySelectorAll(".accessories__container-item-descr");

function changeContent() {
  if (window.innerWidth <= 950 && window.innerWidth > 700) {
    title.textContent = "Съемка видео";
    descr[0].textContent =
      "Обширный ассортимент чехлов для каждой модели.Цветовая гамма, отличное качество, премиальные материалы и дополнительные возможности призваны удовлетворить даже самый притязательный вкус.";
    descr[1].textContent =
      "Обширный ассортимент чехлов для каждой модели.Цветовая гамма, отличное качество, премиальные материалы и дополнительные возможности призваны удовлетворить даже самый притязательный вкус.";
  }
  if (window.innerWidth > 950) {
    title.textContent = "Сканер отпечатка в экране";
    descr[0].textContent =
      "Для любителей роскоши модель S10+ будет выпускаться в керамическом корпусе черного и белого цветов.";
    descr[1].textContent =
      "Для любителей роскоши модель S10+ будет выпускаться в керамическом корпусе черного и белого цветов.";
  }
  if (window.innerWidth <= 700) {
    title.textContent = "Съемка видео";
    descr[0].textContent =
      "Обширный ассортимент чехлов для каждой модели.Цветовая гамма, отличное качество, премиальные материалы и дополнительные возможности призваны удовлетворить даже самый притязательный вкус.";
    descr[1].textContent =
      "Беспроводная зарядная станция Duo Pad быстро заряжает одновременно два устройства, одно из которых охлаждается.";
  }
}
changeContent();

window.addEventListener("resize", function () {
  changeContent();
});
