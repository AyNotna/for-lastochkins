const surprises = [
      {
          title: "🎫 Билет на сеанс массажа",
          description: "Профессиональный массаж для моей ласточки! Расслабление и удовольствие гарантированы. P.S длительность 1 час "
      },
      {
          title: "🌳 Прогулка в Москве",
          description: "Романтическая прогулка в твоём любимом парке с мороженым и хорошей компанией!"
      },
      {
          title: "🎁 Милый подарочек",
          description: "Сюрприз, который точно тебя обрадует! Что-то особенное только для тебя."
      },
      {
          title: "💆‍♀️ СПА-день",
          description: "День заботы и красоты: маски, ванна с пеной и полный релакс!"
      },
      {
          title: "🎬 Киновечер",
          description: "Вечер с нашими любимыми фильмами, пастой пиццой или чего еще ты захочешь, и уютными объятиями."
      },
      {
          title: "🍰 Кулинарный мастер-класс",
          description: "Приготовим вместе что-то вкусненькое! Выбирай любой рецепт."
      },
      {
          title: "⭐ Вечер комплиментов",
          description: "Целый вечер, посвящённый тому, чтобы говорить тебе самые искренние комплименты!"
      },
      {
            title: "🎫 Билет на сеанс массажа",
            description: "Профессиональный массаж для моей ласточки! Расслабление и удовольствие гарантированы. P.S длительность 1.5 час "
        },
        {
            title: "🎫 Билет на сеанс массажа",
            description: "Профессиональный массаж для моей ласточки! Расслабление и удовольствие гарантированы. P.S длительность 30 мин "
        },
  ];
  
  // Инициализация при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
      // Показываем валентинку при первом открытии
      const valentineCard = document.getElementById('valentineCard');
      const cardInner = document.querySelector('.card-inner');
      
      // Добавляем обработчик клика на валентинку
      cardInner.addEventListener('click', function() {
          valentineCard.classList.add('flipped');
      });
  });
  
  function closeValentine() {
      const valentineCard = document.getElementById('valentineCard');
      const mainContent = document.getElementById('mainContent');
      
      valentineCard.style.display = 'none';
      mainContent.classList.remove('hidden');
  }
  
  function showSurprise() {
      // Удаляем предыдущий билет
      const ticketContainer = document.getElementById('ticketContainer');
      ticketContainer.innerHTML = '';
      
      // Создаем конфетти
      createConfetti();
      
      // Создаем летающие сердечки
      createHearts();
      
      // Показываем случайный сюрприз
      setTimeout(() => {
          const randomSurprise = surprises[Math.floor(Math.random() * surprises.length)];
          
          const ticket = document.createElement('div');
          ticket.className = 'ticket';
          ticket.innerHTML = `
              <h3>${randomSurprise.title}</h3>
              <p>${randomSurprise.description}</p>
          `;
          
          ticketContainer.appendChild(ticket);
      }, 500);
  }
  
  function createConfetti() {
      const colors = ['#ff6b6b', '#ffa8a8', '#ffd8d8', '#fff5f5'];
      for (let i = 0; i < 50; i++) {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          confetti.style.left = Math.random() * 100 + 'vw';
          confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-in forwards`;
          document.body.appendChild(confetti);
      }
  }
  
  function createHearts() {
      for (let i = 0; i < 20; i++) {
          const heart = document.createElement('div');
          heart.className = 'hearts';
          heart.innerHTML = '💖';
          heart.style.left = Math.random() * 100 + 'vw';
          heart.style.animation = `floatUp ${Math.random() * 3 + 2}s ease-in forwards`;
          heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
          document.body.appendChild(heart);
      }
  }