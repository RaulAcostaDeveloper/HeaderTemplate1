let MyBusinessSubMenu = document.getElementById('MyBusinessSubMenu');
let isOpenMyBusinessSubMenu = false;
let GrowthSubMenu = document.getElementById('GrowthSubMenu');
let isOpenGrowthSubMenu = false;
let AnalyticsSubMenu = document.getElementById('AnalyticsSubMenu');
let isOpenAnalyticsSubMenu = false;
let subMenuDerecha = document.getElementById('subMenuDerecha');
let isOpensubMenuDerecha = false;
let QuestionsSubMenu = document.getElementById('QuestionsSubMenu');
let isOpenQuestionsSubMenu = false;
let NotificationsEventElementList = document.getElementById('NotificationsEventElementList');
let isOpenNotificationsEventElementList = false;
let InboxEventElementList = document.getElementById('InboxEventElementList');
let isOpenInboxEventElementList = false;

let MyBusinessSubMenuArrow = document.getElementById('MyBusinessSubMenuArrow');
let GrowthSubMenuArrow = document.getElementById('GrowthSubMenuArrow');
let AnalyticsSubMenuArrow = document.getElementById('AnalyticsSubMenuArrow');
const openSubMenu = (el)=>{
    switch (el) {
        case 'NotificationsEventElementList':
            if (isOpenNotificationsEventElementList) {
                animacionElListClose(NotificationsEventElementList);
            } else{
                animacionElListOpen(NotificationsEventElementList);
            }
            isOpenNotificationsEventElementList = !isOpenNotificationsEventElementList;
            break;
        case 'InboxEventElementList':
            if (isOpenInboxEventElementList) {
                animacionElListClose(InboxEventElementList);
            } else{
                animacionElListOpen(InboxEventElementList);
            }
            isOpenInboxEventElementList = !isOpenInboxEventElementList;
            break;
        case 'MyBusinessSubMenu':
            if (isOpenMyBusinessSubMenu) {
                animacionElClose(MyBusinessSubMenu);
                MyBusinessSubMenuArrow.src="./img/down.png";
            } else{
                animacionElOpen(MyBusinessSubMenu);
                MyBusinessSubMenuArrow.src="./img/up.png";
            }
            isOpenMyBusinessSubMenu = !isOpenMyBusinessSubMenu;
            break;
        case 'GrowthSubMenu':
            if (isOpenGrowthSubMenu) {
                animacionElClose(GrowthSubMenu);
                GrowthSubMenuArrow.src="./img/down.png";
            } else{
                animacionElOpen(GrowthSubMenu);
                GrowthSubMenuArrow.src="./img/up.png";
            }
            isOpenGrowthSubMenu = !isOpenGrowthSubMenu;
            break;
        case 'AnalyticsSubMenu':
            if (isOpenAnalyticsSubMenu) {
                animacionElClose(AnalyticsSubMenu);
                AnalyticsSubMenuArrow.src="./img/down.png";
            } else{
                animacionElOpen(AnalyticsSubMenu);
                AnalyticsSubMenuArrow.src="./img/up.png";
            }
            isOpenAnalyticsSubMenu = !isOpenAnalyticsSubMenu;
            break;
        case 'subMenuDerecha':
            if (isOpensubMenuDerecha) {
                animacionElClose(subMenuDerecha);
            } else{
                animacionElOpen(subMenuDerecha);
            }
            isOpensubMenuDerecha = !isOpensubMenuDerecha;
            break;
        case 'QuestionsSubMenu':
            if (isOpenQuestionsSubMenu) {
                animacionElClose(QuestionsSubMenu);
            } else{
                animacionElOpen(QuestionsSubMenu);
            }
            isOpenQuestionsSubMenu = !isOpenQuestionsSubMenu;
            break;
            
        default:
            break;
    }
}

const animacionElOpen = (el)=>{
    el.style.display='block';
    el.style.animationName="openSubMenu";
    el.style.animationDuration="500ms";
    el.style.animationFillMode="initial";
}
const animacionElClose = (el)=>{
    el.style.animationName="closeSubMenu";
    el.style.animationDuration="500ms";
    el.style.animationFillMode="initial";
    setTimeout(() => {      
        el.style.display='none';
     }, 300);
}

const animacionElListOpen = (el)=>{
    el.style.display='block';
    el.style.animationName="openEventElementList";
    el.style.animationDuration="500ms";
    el.style.animationFillMode="initial";
}
const animacionElListClose = (el)=>{
    el.style.animationName="closeEventElementList";
    el.style.animationDuration="500ms";
    el.style.animationFillMode="initial";
    setTimeout(() => {      
        el.style.display='none';
     }, 300);
}