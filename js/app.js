const app = () => {
  const container = document.querySelector('.scroling-bio');
  persons.forEach(person => {
    const item = document.createElement('div');
    item.classList.add('card');
    const name = createElement('h3', 'name', person.name);
    const photo = document.createElement('img');
    photo.classList.add('photo');
    photo.src = person.photo;
    const bio = createElement('p', 'bio', person.bio);
    item.appendChild(photo);
    item.appendChild(name);
    item.append(document.createElement('hr'));
    item.appendChild(bio);
    container.appendChild(item);

    if (person.detail) {
      switch (person.detail.status) {
        case 'VIP':
          item.classList.add('has-detail');
          break;
        case 'LOX':
            item.classList.add('status-lox');
            break;
      }
      item.addEventListener('click', () => {
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
          window.scrollTo({ top: 0 })
        }
      });
      const detail = document.createElement('div');
      detail.classList.add('detail');
      detail.style.display = 'none';
      if (person.detail.revoRating) {
        const revoRaiting = createRatingBlock({
          rating: person.detail.revoRating,
          title: 'Рейтинг рева: ',
          className: 'rating revo-rating',
          image: 'img/revo-rating.webp'
        });

        detail.appendChild(revoRaiting);
      }
      if (person.detail.smokeRating) {
        const smokeRating = createRatingBlock({
          rating: person.detail.smokeRating,
          title: 'Рейтинг сіг: ',
          className: 'rating smoke-rating',
          image: 'img/xs-black-blue.png'
        });
        detail.appendChild(smokeRating);
      }
      const fullBio = createElement('p', 'full-bio', person.detail.fullBio);
      detail.appendChild(fullBio);
      const chart = document.createElement('canvas');
      chart.classList.add('myChart');

      if (person.detail.revoData || person.detail.smokeData) {
        const thisMonth = new Date().getMonth() + 1;

        const data = {
          labels: month.slice(thisMonth - 5, thisMonth),
          datasets: [
            {
              label: 'Випитого рева',
              backgroundColor: '#9b111e',
              borderColor: '#9b111e',
              data: person.detail.revoData,
            }
          ]
        };

        if (person.detail.sigaretData?.length) {
            data.datasets.push({
                label: 'Скурених сіг',
                backgroundColor: '#0a2789',
                borderColor: '#0a2789',
                data: person.detail.sigaretData,
            });
        }

        if (person.detail.vomitedRevoData?.length) {
            data.datasets.push({
                label: 'Виблювано рева',
                backgroundColor: '#29831f',
                borderColor: '#29831f',
                data: person.detail.vomitedRevoData,
            });
        }

        const config = {
          type: 'line',
          data: data,
          options: {}
        };
        const myChart = new Chart(chart.getContext('2d'), config);
        detail.appendChild(chart);
      }

      if (person.detail.social?.length) {
        const social = document.createElement('div');
        social.classList.add('social');
        const socialList = document.createElement('ul');
        socialList.classList.add('social-list');
        person.detail.social.forEach(socialItem => {
          const socialItemEl = document.createElement('li');
          socialItemEl.classList.add('social-item');
          const socialLink = document.createElement('a');
          socialLink.classList.add('social-link');
          socialLink.href = socialItem.link;
          socialLink.target = '_blank';
          socialLink.innerHTML = socialItem.icon;
          socialItemEl.appendChild(socialLink);
          socialList.appendChild(socialItemEl);
        })
        social.appendChild(socialList);
        detail.appendChild(social);
      }

      item.appendChild(detail);
    }
  })
}

const createElement = (tag, className, html) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.innerHTML = html;
    return element;
}

const createRatingBlock = ({
    rating,
    title,
    className,
    image
}) => {
    const ratingBlock = document.createElement('div');
    ratingBlock.classList.add(...className.split(' '));
    const ratingOrder = createRating(rating, image);
    ratingBlock.innerHTML = `
        <p>${title}</p>
        ${ratingOrder}
    `;
    return ratingBlock;
};

const createRating = (rating, image) => {
    const ratingOrder = Array.from({ length: 5 }).map((_, index) => index < ~~rating ? `
        <img class="active" src=${image || "img/revo-rating.webp"}></img>
    ` : `
        <img class="unactive" src=${image || "img/revo-rating.webp"}></img>
    `).join('');
    return ratingOrder;
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
    name: 'Валерій Попович',
    photo: './img/Валера Попович.jpg',
    bio: `Один із розробників цього сайту. <br />
    По професії - програміст.<br />
    Закінчив ЗПФК, був лічно поздоровлений Петром Моставчуком.<br />
    Знаходиться в стосунках.`,
    detail: {
      status: 'VIP',
      revoData: [30, 40, 25, 45, 5],
      revoRating: 4,
      smokeRating: 3,
      sigaretData: [0, 0, 15, 25, 5],
      fullBio: `Так як я один з розробників сайту, всі нові фішки в перву чергу получаю я )))`,
      social: [
      {
        link: 'https://t.me/all_die',
        icon: '<i class="fab fa-telegram"></i>'
      },
      {
          link: 'https://www.instagram.com/popovitchvalera/',
          icon: '<i class="fab fa-instagram"></i>'
      }
      ]
    }
  },
  {
    name: 'Вадім Мотринець',
    photo: './img/вадім.jpg',
    bio: `Обладатель рекорду мийки по реву. <br />
          Зробив переворот над пелехатими і створив "Мийку Андер". <br />
          Зваблює всіх хлопців організації "Мийка Андер" <br />
          Один із синів Володимира Бігуна <br />
          Девіз - <i>"Не постриг Саноцького - отримав по єбалу!"</i> <br />`,
    detail: {
      status: 'LOX',
      revoRating: 5,
      smokeRating: 5,
      revoData: [30, 40, 50, 55, 60],
      vomitedRevoData: [0, 0, 1, 20, 0],
      fullBio: '*на соцсеті лінь робити силку*'
    }
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
          Привів нове покоління на мийку. <br />
          Один із Мийкомемберу, весною допоміг зробити переворот над пелехатими. <br />
          Один з синів Бігуна.`
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
          Любить випити ревка. <br />
          Характер товариський. <br />
          Любить мацати попку Паші Зорадумера. <br />
          Супер музикальний вкус, бо слухає Король і шут. <br />
          Краш всього Нижнього звора.`
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
          Зафорсив мийку до прєдєла і учинив собі 300 бігбою у калинах.<br />\
          Калинський авангард.`
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
  },
  {
    name: 'Денис Кучеря ',
    photo: './img/денис.jpg',
    bio: `Учасник групи МИЙКААНДЕР<br />
          Робив на мийці <br />
          Любит пити закарпатьське<br />
          Жию на снікерсах і твіксах<br />
          Курю лише ЛМ, СОБРАНІЄ, ВІНСТОН СИНІЙ ТОНКИЙ<br />
          На цьому все`
  },
  {
    name: 'Антоніо Припиздучи',
    photo: './img/антон.jpg',
    bio: `Участик мийки <br />
          Любит бодю жостоко в попку<br />
          Курить винстон <br />
          Собраніє нормальні пашови невірьте<br />
          Засновник "бічарня"  <br />
          І вобщому позитивна людина`
  },
  {
    name: 'Ангеліна Березун',
    photo: './img/ангеліна.jpg',
    bio: `Сестра Яни. <br />
          Ходить на мийку, як до себе думу.<br />
          П\`є шейк як угашена.<br />
          У 9:30 уже дома.`
  },
  {
    name: 'Лілія Жидак',
    photo: './img/лілін.jpg',
    bio: `Мала пиздаболка із Заріки. <br />
          На мийку приходить побазікати з подругами і посумувати. <br />
          П\`є в основному Рево, не проти шейка. <br />
          Улюблене заняття - рвати чеки й інші папірці. <br />
          Зріст метр з кепкою. <br />
          Вільна.`
  },
  {
    name: 'Баршай Святослав',
    photo: './img/светік.jpg',
    bio: `Молодий сексуальний чоловік 16 років.<br />
          Cімейний стан "закоханий".<br /> 
          Mріє про секс і пачку марвела.<br /> 
          Xуярит в чехії.`
  },
  {
    name: 'Ніколетка Котлетка або мала бігунка.',
    photo: './img/ніка.jpg',
    bio: `Вадім Мотринець моя мала. <br/>
          На мийці буваю чаще всіх остальних, жию там.
          Маттірь всія мийки,
          вирізала бога у 1750 році. <br />
          Дуже люблю унижати жун,
          переселилася у прагу бо начала войну мижи жонами у калинах.
          Фрік, неформал, любітель водки, пива і вінстона.
          Виєбала большенство  мийочнику у їх мічтах.`
  }
]

const month = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень'
]
app();

