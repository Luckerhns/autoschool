import { AUTONEWS_ROUTE, AUTOSTUDENT_ROUTE } from "../utils/links";

export const cards = [
  {
    id: 1,
    bg: "success",
    text: "Заполнить анкету в автошколу",
    link: AUTOSTUDENT_ROUTE,
    mainClass: "main__card",
    secondClass: "card__content",
    buttonBg: "dark",
    linkText: "К анкете",
  },
  {
    id: 2,
    bg: "info",
    text: "Узнать свежие новости автошколы",
    link: AUTONEWS_ROUTE,
    mainClass: "main__card",
    secondClass: "card__content",
    buttonBg: "dark",
    linkText: "К анкете",
  },
  {
    id: 3,
    bg: "danger",
    text: "Про нашу автошколу",
    link: "/autoschool/news",
    mainClass: "main__card",
    secondClass: "card__content",
    buttonBg: "dark",
    linkText: "К анкете",
  },
  {
    id: 4,
    bg: "primary",
    text: "Посмотреть отзывы",
    link: "/autoschool/news",
    mainClass: "main__card",
    secondClass: "card__content",
    buttonBg: "dark",
    linkText: "К анкете",
  },
];

const firstAction = [
  { id: 1, text: "Предметы" },
  { id: 2, text: "Бал для поступления" },
  { id: 3, text: "Почему КСТ" },
];
const secondAction = [
  { id: 1, text: "Список студентов" },
  { id: 2, text: "Наши профессии" },
  { id: 3, text: "Наши кружки" },
];
const thirdAction = [
  { id: 1, text: "Зарплата в КСТ" },
  { id: 2, text: "Что нужно для трудоустройства" },
  { id: 3, text: "Почему работа в КСТ" },
];
const fourthAction = [
  { id: 1, text: "Наши адреса" },
  { id: 2, text: "Сервисы" },
  { id: 3, text: "Наши заслуги" },
];
const fifthAction = [
  { id: 1, text: "Список преподавателй" },
  { id: 2, text: "Новости кст" },
  { id: 3, text: "Записи преподавателей" },
];

export const mainContentSlider = [
  { id: 1, text: "Родителям", action: firstAction },
  { id: 2, text: "Учащимся", action: secondAction },
  { id: 3, text: "Педагогам", action: thirdAction },
  { id: 4, text: "О КСТ", action: fourthAction },
  { id: 5, text: "О преподавателях", action: fifthAction },
];
