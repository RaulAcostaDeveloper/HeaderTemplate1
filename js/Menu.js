let menu = document.getElementById('menu');
let interiorMenu = document.getElementById('interiorMenu');
let pers1 = document.getElementById('elPersistente1');
let pers2 = document.getElementById('elPersistente2');
let pers3 = document.getElementById('elPersistente3');

const abrirMenu = ()=>{
   menu.style.display='block';
   interiorMenu.style.animationName="openMenu";
   interiorMenu.style.animationDuration="500ms";
   interiorMenu.style.animationFillMode="initial";
   pers1.style.display = "block";
   pers2.style.display = "block";
   pers3.style.display = "block";

 }
 const cerrarMenu = ()=>{
   interiorMenu.style.animationName="closeMenu";
   interiorMenu.style.animationFillMode="initial";
   interiorMenu.style.animationDuration="500ms";
   pers1.style.display = "none";
   pers2.style.display = "none";
   pers3.style.display = "none";
   setTimeout(() => {      
      menu.style.display='none';
   }, 300);
 }
//  Sub Menús

let MyBusinessSubMenuComp = document.getElementById('MyBusinessSubMenuComp');
let MyBusinessSubMenuCompArrow = document.getElementById('MyBusinessSubMenuCompArrow');
let isOpenMyBusinessSubMenuComp = false;

let GrowthmarketingSubMenuComp = document.getElementById('GrowthmarketingSubMenuComp');
let GrowthmarketingSubMenuCompArrow = document.getElementById('GrowthmarketingSubMenuCompArrow');
let isOpenGrowthmarketingSubMenuComp = false;

let AnalyticsSubMenuComp = document.getElementById('AnalyticsSubMenuComp');
let AnalyticsSubMenuCompArrow = document.getElementById('AnalyticsSubMenuCompArrow');
let isOpenAnalyticsSubMenuComp = false;

let HelpresourcesSubMenuComp = document.getElementById('HelpresourcesSubMenuComp');
let HelpresourcesSubMenuCompArrow = document.getElementById('HelpresourcesSubMenuCompArrow');
let isOpenHelpresourcesSubMenuComp = false;

let AccountSubMenuComp = document.getElementById('AccountSubMenuComp');
let AccountSubMenuCompArrow = document.getElementById('AccountSubMenuCompArrow');
let isOpenAccountSubMenuComp = false;

let LanguageSubMenuComp = document.getElementById('LanguageSubMenuComp');
let LanguageSubMenuCompArrow = document.getElementById('LanguageSubMenuCompArrow');
let isOpenLanguageSubMenuComp = false;

const openSubMenuComp = (el) =>{
  switch (el) {
    case "MyBusinessSubMenuComp":
      if (isOpenMyBusinessSubMenuComp) {
          animacionElSubMenuCompClose(MyBusinessSubMenuComp);
          MyBusinessSubMenuCompArrow.src="./img/down.png";
      } else{
          animacionElSubMenuCompOpen(MyBusinessSubMenuComp);
          MyBusinessSubMenuCompArrow.src="./img/up.png";
      }
    isOpenMyBusinessSubMenuComp = !isOpenMyBusinessSubMenuComp;
    break;
    case "GrowthmarketingSubMenuComp":
      if (isOpenGrowthmarketingSubMenuComp) {
          animacionElSubMenuCompClose(GrowthmarketingSubMenuComp);
          GrowthmarketingSubMenuCompArrow.src="./img/down.png";
      } else{
          animacionElSubMenuCompOpen(GrowthmarketingSubMenuComp);
          GrowthmarketingSubMenuCompArrow.src="./img/up.png";
      }
    isOpenGrowthmarketingSubMenuComp = !isOpenGrowthmarketingSubMenuComp;
    break;
    case "AnalyticsSubMenuComp":
      if (isOpenAnalyticsSubMenuComp) {
          animacionElSubMenuCompClose(AnalyticsSubMenuComp);
          AnalyticsSubMenuCompArrow.src="./img/down.png";
      } else{
          animacionElSubMenuCompOpen(AnalyticsSubMenuComp);
          AnalyticsSubMenuCompArrow.src="./img/up.png";
      }
    isOpenAnalyticsSubMenuComp = !isOpenAnalyticsSubMenuComp;
    break;
    case "HelpresourcesSubMenuComp":
      if (isOpenHelpresourcesSubMenuComp) {
          animacionElSubMenuCompClose(HelpresourcesSubMenuComp);
          HelpresourcesSubMenuCompArrow.src="./img/down.png";
      } else{
          animacionElSubMenuCompOpen(HelpresourcesSubMenuComp);
          HelpresourcesSubMenuCompArrow.src="./img/up.png";
      }
    isOpenHelpresourcesSubMenuComp = !isOpenHelpresourcesSubMenuComp;
    break;
    case "AccountSubMenuComp":
      if (isOpenAccountSubMenuComp) {
          animacionElSubMenuCompClose(AccountSubMenuComp);
          AccountSubMenuCompArrow.src="./img/down.png";
      } else{
          animacionElSubMenuCompOpen(AccountSubMenuComp);
          AccountSubMenuCompArrow.src="./img/up.png";
      }
    isOpenAccountSubMenuComp = !isOpenAccountSubMenuComp;
    break;
    case "LanguageSubMenuComp":
      if (isOpenLanguageSubMenuComp) {
          animacionElSubMenuCompClose(LanguageSubMenuComp);
          LanguageSubMenuCompArrow.src="./img/down.png";
      } else{
          animacionElSubMenuCompOpen(LanguageSubMenuComp);
          LanguageSubMenuCompArrow.src="./img/up.png";
      }
    isOpenLanguageSubMenuComp = !isOpenLanguageSubMenuComp;
    break;
    default:
      break;
  }
}
const animacionElSubMenuCompOpen = (el)=>{
  el.style.display='block';
  el.style.animationName="openSubMenuComponent";
  el.style.animationDuration="500ms";
  el.style.animationFillMode="initial";
}
const animacionElSubMenuCompClose = (el)=>{
  el.style.animationName="closeSubMenuComponent";
  el.style.animationDuration="500ms";
  el.style.animationFillMode="initial";
  setTimeout(() => {      
      el.style.display='none';
   }, 300);
}
