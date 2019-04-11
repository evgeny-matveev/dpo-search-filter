let form = document.querySelector('form')

form.onsubmit = function handleFormSubmit(event) {
  // Предотвращает поведение события submit по умолчанию
  // То есть отключается перезагрузка страницы по нажатию на Ввод внутри инпута
  event.preventDefault()

  // Находим форму из события
  let form = event.target
  // Находим инпут из формы,
  // чтобы потом получить значение инпута
  let input = form.querySelector('input')

  // Создаем новый элемент <li></li> в памяти компьютера
  let li = document.createElement('li')
  // Добавляем текст внутрь тега
  // Получится <li>текст из input.value</li>
  li.innerText = input.value

  // Находим <ul></ul>
  let ul = document.querySelector('ul')
  // И добавляем к нему свежесозданный <li> с текстом
  ul.appendChild(li)

  let id = Date.now()
  localStorage.setItem(id, input.value)

  input.value = ''
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
      // Затем создаем новый элемент списка
      let li = document.createElement('li')
      let ul = document.querySelector('ul')

      // Добавляем в новый элемент списка текст
      li.innerText = taskName
      ul.appendChild(li)
    }
  }
}

loadHistory()
