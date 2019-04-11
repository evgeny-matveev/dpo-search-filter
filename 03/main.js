let form = document.querySelector('form')
const WORK_TIME = 2000

form.onsubmit = function handleFormSubmit(event) {
  // Предотвращает поведение события submit по умолчанию
  // То есть отключается перезагрузка страницы по нажатию на Ввод внутри инпута
  event.preventDefault()

  // Находим форму из события
  let form = event.target
  // Находим инпут из формы,
  // чтобы потом получить значение инпута
  let input = form.querySelector('input')

  // После нажатия Ввод блокируем инпут
  input.disabled = true

  // Затем находим прогресс див
  let progress = document.querySelector('.progress')
  // Меняем ему ширину
  progress.style.width = '100vw'
  // Добавляем время анимации
  progress.style.transitionDuration = WORK_TIME + 'ms'

  setTimeout(function () {
    // Убираем анимацию после того, как время закончилось
    progress.style.transitionDuration = ''
    // И убираем ширину, чтобы потом ее снова сделать во весь экран и анимировать
    progress.style.width = ''
    // И разблокируем инпут
    input.disabled = false
    // И добавляем выполненную задачу в список
    addListItem(input.value)
    // И в память
    let id = Date.now()
    localStorage.setItem(id, input.value)
    // Сбрасываем значение из инпута
    input.value = ''
  }, WORK_TIME)
}

function addListItem(liText) {
  // Находим <ul></ul>
  let ul = document.querySelector('ul')
  // Создаем новый элемент <li></li> в памяти компьютера
  let li = document.createElement('li')
  // Добавляем текст внутрь тега
  li.innerText = liText
  // И добавляем к нему свежесозданный <li> с текстом
  ul.appendChild(li)
}

function loadHistory() {
  // Узнаём размер памяти, чтобы понимать, есть ли в ней что-то
  let historySize = localStorage.length

  // Если память не пуста
  if (historySize) {
    // То проходимся при помощи цикла по каждой записи
    for (let i = 0; i < historySize; i += 1) {
      // Находим ключ каждой позиции
      let id = localStorage.key(i)
      // И по ключу находим значение
      let taskName = localStorage.getItem(id)
      addListItem(taskName)
    }
  }
}

loadHistory()
