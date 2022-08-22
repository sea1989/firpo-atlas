window.onload = () => {
  main(object_subject);
};

// ключи не трогать, такие как RU-MOW, а также не стоит изменять federal_district
// federal_district - это ключ федеральнокого округа
// object_subject каждый объект имеет ссылку
// всего существет 8 округов
// CFD - Центральный
// UFD - Уральский
// SFD - Сибирский
// VFD - Приморский
// FEFD - Дальневосточный
// NWFD - Северо-Западный
// NCFD - Северо-Кавказский
// SoFD - Южный
var object_subject = {
  "RU-MOW": {
    name: "Москва",
    link: "https://www.google.com/search?q=RU-MOW",
    federal_district: "CFD",
  },
  "RU-CHE": {
    name: "Челябинская область",
    link: "https://www.google.com/search?q=RU-CHE",
    federal_district: "UFD",
  },
  "RU-ORL": {
    name: "Орловская область",
    link: "https://www.google.com/search?q=RU-ORL",
    federal_district: "CFD",
  },
  "RU-OMS": {
    name: "Омская область",
    link: "https://www.google.com/search?q=RU-OMS",
    federal_district: "SFD",
  },
  "RU-LIP": {
    name: "Липецкая область",
    link: "https://www.google.com/search?q=RU-LIP",
    federal_district: "CFD",
  },
  "RU-KRS": {
    name: "Курская область",
    link: "https://www.google.com/search?q=RU-KRS",
    federal_district: "CFD",
  },
  "RU-RYA": {
    name: "Рязанская область",
    link: "https://www.google.com/search?q=RU-RYA",
    federal_district: "CFD",
  },
  "RU-BRY": {
    name: "Брянская область",
    link: "https://www.google.com/search?q=RU-BRY",
    federal_district: "CFD",
  },
  "RU-KIR": {
    name: "Кировская область",
    link: "https://www.google.com/search?q=RU-KIR",
    federal_district: "VFD",
  },
  "RU-ARK": {
    name: "Архангельская область",
    link: "https://www.google.com/search?q=RU-ARK",
    federal_district: "NWFD",
  },
  "RU-MUR": {
    name: "Мурманская область",
    link: "https://www.google.com/search?q=RU-MUR",
    federal_district: "NWFD",
  },
  "RU-SPE": {
    name: "Санкт-Петербург",
    link: "https://www.google.com/search?q=RU-SPE",
    federal_district: "NWFD",
  },
  "RU-YAR": {
    name: "Ярославская область",
    link: "https://www.google.com/search?q=RU-YAR",
    federal_district: "CFD",
  },
  "RU-ULY": {
    name: "Ульяновская область",
    link: "https://www.google.com/search?q=RU-ULY",
    federal_district: "VFD",
  },
  "RU-NVS": {
    name: "Новосибирская область",
    link: "https://www.google.com/search?q=RU-NVS",
    federal_district: "SFD",
  },
  "RU-TYU": {
    name: "Тюменская область",
    link: "https://www.google.com/search?q=RU-TYU",
    federal_district: "UFD",
  },
  "RU-SVE": {
    name: "Свердловская область",
    link: "https://www.google.com/search?q=RU-SVE",
    federal_district: "UFD",
  },
  "RU-NGR": {
    name: "Новгородская область",
    link: "https://www.google.com/search?q=RU-NGR",
    federal_district: "NWFD",
  },
  "RU-KGN": {
    name: "Курганская область",
    link: "https://www.google.com/search?q=RU-KGN",
    federal_district: "UFD",
  },
  "RU-KGD": {
    name: "Калининградская область",
    link: "https://www.google.com/search?q=RU-KGD",
    federal_district: "NWFD",
  },
  "RU-IVA": {
    name: "Ивановская область",
    link: "https://www.google.com/search?q=RU-IVA",
    federal_district: "CFD",
  },
  "RU-AST": {
    name: "Астраханская область",
    link: "https://www.google.com/search?q=RU-AST",
    federal_district: "SoFD",
  },
  "RU-KHA": {
    name: "Хабаровский край",
    link: "https://www.google.com/search?q=RU-KHA",
    federal_district: "FEFD",
  },
  "RU-CE": {
    name: "Чеченская республика",
    link: "https://www.google.com/search?q=RU-CE",
    federal_district: "NCFD",
  },
  "RU-UD": {
    name: "Удмуртская республика",
    link: "https://www.google.com/search?q=RU-UD",
    federal_district: "VFD",
  },
  "RU-SE": {
    name: "Республика Северная Осетия",
    link: "https://www.google.com/search?q=RU-SE",
    federal_district: "NCFD",
  },
  "RU-MO": {
    name: "Республика Мордовия",
    link: "https://www.google.com/search?q=RU-MO",
    federal_district: "VFD",
  },
  "RU-KR": {
    name: "Республика Карелия",
    link: "https://www.google.com/search?q=RU-KR",
    federal_district: "NWFD",
  },
  "RU-KL": {
    name: "Республика Калмыкия",
    link: "https://www.google.com/search?q=RU-KL",
    federal_district: "SoFD",
  },
  "RU-IN": {
    name: "Республика Ингушетия",
    link: "https://www.google.com/search?q=RU-IN",
    federal_district: "NCFD",
  },
  "RU-AL": {
    name: "Республика Алтай",
    link: "https://www.google.com/search?q=RU-AL",
    federal_district: "SFD",
  },
  "RU-BA": {
    name: "Республика Башкортостан",
    link: "https://www.google.com/search?q=RU-BA",
    federal_district: "VFD",
  },
  "RU-AD": {
    name: "Республика Адыгея",
    link: "https://www.google.com/search?q=RU-AD",
    federal_district: "SoFD",
  },
  "RU-CR": {
    name: "Республика Крым",
    link: "https://www.google.com/search?q=RU-CR",
    federal_district: "SoFD",
  },
  "RU-SEV": {
    name: "Севастополь",
    link: "https://www.google.com/search?q=RU-SEV",
    federal_district: "SoFD",
  },
  "RU-KO": {
    name: "Республика Коми",
    link: "https://www.google.com/search?q=RU-KO",
    federal_district: "NWFD",
  },
  "RU-PNZ": {
    name: "Пензенская область",
    link: "https://www.google.com/search?q=RU-PNZ",
    federal_district: "VFD",
  },
  "RU-TAM": {
    name: "Тамбовская область",
    link: "https://www.google.com/search?q=RU-TAM",
    federal_district: "CFD",
  },
  "RU-LEN": {
    name: "Ленинградская область",
    link: "https://www.google.com/search?q=RU-LEN",
    federal_district: "NWFD",
  },
  "RU-VLG": {
    name: "Вологодская область",
    link: "https://www.google.com/search?q=RU-VLG",
    federal_district: "NWFD",
  },
  "RU-KOS": {
    name: "Костромская область",
    link: "https://www.google.com/search?q=RU-KOS",
    federal_district: "CFD",
  },
  "RU-PSK": {
    name: "Псковская область",
    link: "https://www.google.com/search?q=RU-PSK",
    federal_district: "NWFD",
  },
  "RU-YAN": {
    name: "Ямало-Ненецкий АО",
    link: "https://www.google.com/search?q=RU-YAN",
    federal_district: "UFD",
  },
  "RU-CHU": {
    name: "Чукотский АО",
    link: "https://www.google.com/search?q=RU-CHU",
    federal_district: "FEFD",
  },
  "RU-YEV": {
    name: "Еврейская автономская область",
    link: "https://www.google.com/search?q=RU-YEV",
    federal_district: "FEFD",
  },
  "RU-TY": {
    name: "Республика Тыва",
    link: "https://www.google.com/search?q=RU-TY",
    federal_district: "SFD",
  },
  "RU-SAK": {
    name: "Сахалинская область",
    link: "https://www.google.com/search?q=RU-SAK",
    federal_district: "FEFD",
  },
  "RU-AMU": {
    name: "Амурская область",
    link: "https://www.google.com/search?q=RU-AMU",
    federal_district: "FEFD",
  },
  "RU-BU": {
    name: "Республика Бурятия",
    link: "https://www.google.com/search?q=RU-BU",
    federal_district: "FEFD",
  },
  "RU-KK": {
    name: "Республика Хакасия",
    link: "https://www.google.com/search?q=RU-KK",
    federal_district: "SFD",
  },
  "RU-KEM": {
    name: "Кемеровская область",
    link: "https://www.google.com/search?q=RU-KEM",
    federal_district: "SFD",
  },
  "RU-ALT": {
    name: "Алтайский край",
    link: "https://www.google.com/search?q=RU-ALT",
    federal_district: "SFD",
  },
  "RU-DA": {
    name: "Республика Дагестан",
    link: "https://www.google.com/search?q=RU-DA",
    federal_district: "NCFD",
  },
  "RU-KB": {
    name: "Кабардино-Балкарская республика",
    link: "https://www.google.com/search?q=RU-KB",
    federal_district: "NCFD",
  },
  "RU-KC": {
    name: "Карачаевая-Черкесская республика",
    link: "https://www.google.com/search?q=RU-KC",
    federal_district: "NCFD",
  },
  "RU-KDA": {
    name: "Краснодарский край",
    link: "https://www.google.com/search?q=RU-KDA",
    federal_district: "SoFD",
  },
  "RU-ROS": {
    name: "Ростовская область",
    link: "https://www.google.com/search?q=RU-ROS",
    federal_district: "SoFD",
  },
  "RU-SAM": {
    name: "Самарская область",
    link: "https://www.google.com/search?q=RU-SAM",
    federal_district: "VFD",
  },
  "RU-TA": {
    name: "Республика Татарстан",
    link: "https://www.google.com/search?q=RU-TA",
    federal_district: "VFD",
  },
  "RU-ME": {
    name: "Республика Марий Эл",
    link: "https://www.google.com/search?q=RU-ME",
    federal_district: "VFD",
  },
  "RU-CU": {
    name: "Чувашская республика",
    link: "https://www.google.com/search?q=RU-CU",
    federal_district: "VFD",
  },
  "RU-NIZ": {
    name: "Нижегородская область",
    link: "https://www.google.com/search?q=RU-NIZ",
    federal_district: "VFD",
  },
  "RU-VLA": {
    name: "Владимирская область",
    link: "https://www.google.com/search?q=RU-VLA",
    federal_district: "CFD",
  },
  "RU-MOS": {
    name: "Московская область",
    link: "https://www.google.com/search?q=RU-MOS",
    federal_district: "CFD",
  },
  "RU-KLU": {
    name: "Калужская область",
    link: "https://www.google.com/search?q=RU-KLU",
    federal_district: "CFD",
  },
  "RU-BEL": {
    name: "Белгородская область",
    link: "https://www.google.com/search?q=RU-BEL",
    federal_district: "CFD",
  },
  "RU-ZAB": {
    name: "Забайкальский край",
    link: "https://www.google.com/search?q=RU-ZAB",
    federal_district: "FEFD",
  },
  "RU-PRI": {
    name: "Приморский край",
    link: "https://www.google.com/search?q=RU-PRI",
    federal_district: "FEFD",
  },
  "RU-KAM": {
    name: "Камачатский край",
    link: "https://www.google.com/search?q=RU-KAM",
    federal_district: "FEFD",
  },
  "RU-MAG": {
    name: "Магаданская область",
    link: "https://www.google.com/search?q=RU-MAG",
    federal_district: "FEFD",
  },
  "RU-SA": {
    name: "Республика Саха",
    link: "https://www.google.com/search?q=RU-SA",
    federal_district: "FEFD",
  },
  "RU-KYA": {
    name: "Красноярский край",
    link: "https://www.google.com/search?q=RU-KYA",
    federal_district: "SFD",
  },
  "RU-ORE": {
    name: "Оренбургская область",
    link: "https://www.google.com/search?q=RU-ORE",
    federal_district: "VFD",
  },
  "RU-SAR": {
    name: "Саратовская область",
    link: "https://www.google.com/search?q=RU-SAR",
    federal_district: "VFD",
  },
  "RU-VGG": {
    name: "Волгоградская область",
    link: "https://www.google.com/search?q=RU-VGG",
    federal_district: "SoFD",
  },
  "RU-VOR": {
    name: "Воронежская область",
    link: "https://www.google.com/search?q=RU-VOR",
    federal_district: "CFD",
  },
  "RU-SMO": {
    name: "Смоленская область",
    link: "https://www.google.com/search?q=RU-SMO",
    federal_district: "CFD",
  },
  "RU-TVE": {
    name: "Тверская область",
    link: "https://www.google.com/search?q=RU-TVE",
    federal_district: "CFD",
  },
  "RU-PER": {
    name: "Пермский край",
    link: "https://www.google.com/search?q=RU-PER",
    federal_district: "VFD",
  },
  "RU-KHM": {
    name: "Ханты-Мансийский АО",
    link: "https://www.google.com/search?q=RU-KHM",
    federal_district: "UFD",
  },
  "RU-TOM": {
    name: "Томская область",
    link: "https://www.google.com/search?q=RU-TOM",
    federal_district: "SFD",
  },
  "RU-IRK": {
    name: "Иркутская область",
    link: "https://www.google.com/search?q=RU-IRK",
    federal_district: "SFD",
  },
  "RU-NEN": {
    name: "Ненецкий АО",
    link: "https://www.google.com/search?q=RU-NEN",
    federal_district: "NWFD",
  },
  "RU-STA": {
    name: "Ставропольский край",
    link: "https://www.google.com/search?q=RU-STA",
    federal_district: "NCFD",
  },
  "RU-TUL": {
    name: "Тульская область",
    link: "https://www.google.com/search?q=RU-TUL",
    federal_district: "CFD",
  },
};

function main(object) {

  let mainMap = document.getElementById("map");

  // russin_map отдельно вынесен в файл map.js
  let app = new russin_map((id = "map"));
  app.create();

  mainMap.querySelectorAll("path").forEach((element) => {
    // Получение ключа
    let elemId = element.getAttribute("id");
    try {
      // Присваиваем название
      element.setAttribute("name", object[elemId]["name"]);

      // Добавляем ссылку
      let link = document.createElement("a");
      link.setAttribute("href", object[elemId]["link"]);

      link.appendChild(document.createTextNode(object[elemId]["name"]));
      link.setAttribute("target", '_blank');
      element.appendChild(link);

      element.addEventListener("click", () => {
        // данный код позволяет делать редирект
        link.click();
      });
    } catch (e) {
      console.log(`Error getting ${e}`);
    }
  });

  mainMap.querySelectorAll("path").forEach((element) => {
    // Получение ключа
    let elemId = element.getAttribute("id");

    // Добавляет класс федералтного округа
    element.classList.add(object[elemId]["federal_district"]);

    // Имитация :hover
    element.addEventListener("mouseover", (e) => {
      // Попап для субъекта
      if (element.getAttribute("name")) {
        var name = element.getAttribute("name");
        let div_ = document.createElement("div");
        div_.appendChild(document.createTextNode(name));
        let indicate = document.querySelector(".indicator");
        indicate.appendChild(div_);
        indicate.style.display = "block";
        indicate.style.top = e.pageY;
        indicate.style.left = e.pageX + 30;
      }

      // Добавление классов при наведение
      element.classList.add("active");
      document.querySelectorAll("path:not(:hover)").forEach((element) => {
        element.classList.add("unactive");
      });
    });

    // После того как :hover сработал
    element.addEventListener("mouseleave", (e) => {
      // Очистка для попап
      let indicate = document.querySelector(".indicator");
      indicate.removeChild(document.querySelector(".indicator > div"));
      indicate.style.display = "none";

      // Удаление классов при отсуствие наведения
      element.classList.remove("active");
      document.querySelectorAll("path").forEach((element) => {
        element.classList.remove("unactive");
      });
    });
  });
}
