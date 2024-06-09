// определение кнопки
const btn = document.querySelector('.j-btn')

// функция определения размеров экрана
function screenDimensions() {
	const widthIncludingScrollbar = window.innerWidth
	const heightConsideringScrollbar = window.innerHeight
	const widthScreenWithoutTakingScrollBar = document.documentElement.clientWidth
	const heightScreenWithoutTakingScrollBar =
		document.documentElement.clientHeight
	return `Ширина экрана с учетом полосы прокрутки: ${widthIncludingScrollbar}px
Высота экрана с учетом полосы прокрутки: ${heightConsideringScrollbar}px
Ширина экрана без учетом полосы прокрутки: ${widthScreenWithoutTakingScrollBar}px
Высота экрана без учетом полосы прокрутки: ${heightScreenWithoutTakingScrollBar}px`
}

// отслеживание клика по кнопке
btn.addEventListener('click', () => {
	// запуск и отображение функции определения размеров экрана
	alert(screenDimensions())
})
