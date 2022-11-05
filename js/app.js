const app = () => {
  const container = document.querySelector('.scroling-bio');
  persons.forEach(person => {
    const item = document.createElement('div');
    item.classList.add('card');
    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = person.name;
    const photo = document.createElement('img');
    photo.classList.add('photo');
    photo.src = person.photo;
    const bio = document.createElement('p');
    bio.classList.add('bio');
    bio.innerHTML = person.bio;
    item.appendChild(photo);
    item.appendChild(name);
    item.append(document.createElement('hr'));
    item.appendChild(bio);
    container.appendChild(item);
  })
}

const persons = [
  {
    name: 'Міша Канюка',
    photo: './img/я.jpg',
    bio: `Незвичайний житель мийки.<br /> 
          Не п\`є, не курит. <br />
          Розробник цього сайту <br>
          Характер добрий. <br />
          Не женатий.`
  },
  {
    name: 'Вадім Мотринець',
    photo: './img/вадім.jpg',
    bio: `Обладатель рекорду мийки по реву. <br />
          Зробив переворот над пелехатими і створив "Мийку Андер". <br />
          Зваблює всіх хлопців організації "Мийка Андер" <br />
          Один із синів Володимира Бігуна <br />
          Девіз - <i>"Не постриг Саноцького - отримав по єбалу!"</i> <br />`
  },
  {
    name: 'Яна Березун',
    photo: './img/яна.jpg',
    bio: `Відома як донька Вадіма Мотринця, <br />
          одного з засновників мийки. <br />
          Мале шпотало. <br />
          Рево не п'є, ходить у церкву.`
  },
  {
    name: 'Іван Цуберан',
    photo: './img/іван цубера.jpg',
    bio: `Іван (Ivan) - хлопчик тихий і спокійний. <br />
          Один із засновників мийка андер і той хто повинен постригти Василя Саноцького. <br />
          Вільний. Знаходиться в активному пошуку.`
  },
  {
    name: 'Ян Микитинець (quuaers)',
    photo: './img/яник.jpg',
    bio: `
    Відомий як Янке, був один із учасників легендарної групіровки "Табо шоп уа". <br />
          Характер мягкий, не курить, вільний. <br />
          Один із Мийкомемберу, весною допоміг зробити переворот над пелехатими.`
  },
  {
    name: 'Юр Лись',
    photo: './img/Юр Лись.jpg',
    bio: `Юрік - учасник мийки андеграунд. <br />
          Відомий тим, що п\`є рево, хоча хворий на сердце. <br />
          Тяг Бабека по дамбі, любит Цапа. <br />
          Ходив влітку на мийку кожен день, хоча ніде не робив.`
  },
  {
    name: 'Даніелла Давидович',
    photo: './img/Даніелла.jpg',
    bio: `
          Нечаста гостя мийки.  <br />
          Характер товариський. <br />`
  },
  {
    name: 'Іван Цап',
    photo: './img/Іван цап.jpg',
    bio: `Характер спокійний, мало лутавий. <br />
          Любитель Revo і Юра Лися.<br />
          Вважає тьотю Лесю своєю другою мамою.<br />
          Спочатку був пелиханьов але завдяки пеRevoроту вступив в "Мийка Андер"`
  },
  {
    name: 'Наталія Плиска',
    photo: './img/наталія плиска.jpg',
    bio: `Недавній учасник "Мийки Андер". <br />
          П\`є рево, не курить. <br />
          В літку не ходила на мийку бо ходила з березуном на яфони. <br />
          Топит за андеграунд.`
  },
  {
    name: 'Артем Дзябко',
    photo: './img/артем.jpg',
    bio: `Тьома, також відомий як Тьома Гангстер. <br />
          Один з найчастіших відвідувачів Мийки. <br />
          Полюбляє Revo та шаурму з "KILIKIA"`
  },
  {
    name: 'Володимир Бігун',
    photo: './img/бігун.jpg',
    bio: `3ss3nc3sh111, в старих ерах sh4p3d0wdfpm4nzxc3.666q. <br />
          Також відомий під називкою бігун.  <br />
          Лучший дота плеєр тячівського района, медіагігант, плейбой, наркоман, законодатель мод, антихрист, тіктокер. <br /> 
          Зафорсив мийку до прєдєла і учинив собі 300 бігбою у калинах.<br />`
  },
  {
    name: 'Міша Мілин',
    photo: './img/міша мілин.jpg',
    bio: `Бог, або просто Міша гад дєєєм.  <br />
          Зробив революцію табошопа в отдільне государство "Мийка" вмісті з Володимиром Бігуном.  <br />
          На вид 54 роки, сексуальний молодий чоловік в розквіті сил, але все ще дєвственник. `
  },
  {
    name: 'Станіслав Кубинець',
    photo: './img/рукавичка.jpg',
    bio: `Головний ЗОЖник мийки.  <br />
          Основний її член, рево не п\`є, не курить.<br />
          Винахідник нової ери - <i>"ЗОЖ-мийка"</i>`
  },
  {
    name: 'Павло Заєць',
    photo: './img/павло Заєць.jpg',
    bio: `Пашко ZXC: Новий участник мийки, любить нове рево, але вважає що собраніє залупа. <br />
          Любить всіх на мийці, Даніелла Давидович постійно мене лапає за дупцю, можливо вона мене любить?<br />
          Але це таємниця.`
  }
]

app();