//создание нового экземпляр WebSocket
const wsUrl = 'wss://echo.websocket.org/'
// находим элементы на странице
const btnSendMessage = document.querySelector('.j-btn-send-message')
const btnSendGeolocation = document.querySelector('.j-btn-send-geolocation')
const userInputField = document.querySelector('.j-user-input-field')
const messageOutputField = document.querySelector('.j-message-output-field')

let websocket

// Функция, ввода и вывода запросов и ответов
function messageOutput(message, par) {
	let answer = document.createElement('p')
	answer.className = par
	answer.innerHTML = message
	messageOutputField.appendChild(answer)
}

// Функция, определения положения
function position(position) {
	const { coords } = position
	const latitude = coords.latitude
	const longitude = coords.longitude
	messageOutput(
		`<a href ='https://www.openstreetmap.org/#map=18/${latitude}/${longitude}' target = '_blank'>Геолокация</a>`,
		'user-message'
	)
}
// отправка сообщения на сервер
btnSendMessage.addEventListener('click', () => {
	websocket = new WebSocket(wsUrl)
	const inputValue = userInputField.value
	if (inputValue) {
		// Функция, открытия соединения с сервером
		websocket.onopen = function () {
			messageOutput(`<span>${inputValue}</span>`, 'user-message')
		}
		// Функция, закрытия соединения с сервером
		websocket.onclose = function () {
			messageOutput('DISCONNECTED')
		}
		// Функция, ответа сервера
		websocket.onmessage = function () {
			messageOutput(`<span>${inputValue}</span>`, 'server-message')
			userInputField.value = ''
		}
		// Функция, выводящая текст об ошибке
		websocket.onerror = function (evt) {
			messageOutput(evt.data)
		}
	}
})
// отправка гео-ции на сервер
btnSendGeolocation.addEventListener('click', () => {
	websocket = new WebSocket(wsUrl)
	// Функция, открытия соединения с сервером
	websocket.onopen = function () {
		// проверка разрешения на получение гео-ции
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(position)
		}
	}
	// Функция, вывода ответа сервера (пуста согласно ТЗ)
	websocket.onmessage = function () {}

	// Функция, закрытия соединения с сервером
	websocket.onclose = function () {
		messageOutput('DISCONNECTED')
	}

	// Функция, выводящая текст об ошибке
	websocket.onerror = function (evt) {
		messageOutput(evt.data)
	}
})
