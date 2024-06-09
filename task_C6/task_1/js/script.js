// определение переменных
const btn = document.querySelector('.j-btn')
const btn_text = document.querySelector('.j-btn_text')
const jImgIcon = document.querySelector('.j-img-icon')
const icon_01 = 'images/svg/arrow-down-left-circle.svg'
const icon_02 = 'images/svg/arrow-down-left-circle-fill.svg'

// отслеживание клика по кнопке
btn.addEventListener('click', () => {
	// логическое условие
	if (icon_01 == jImgIcon.getAttribute('src')) {
		btn_text.innerHTML = `icon_02`
		jImgIcon.setAttribute('src', icon_02)
	} else {
		btn_text.innerHTML = `icon_01`
		jImgIcon.setAttribute('src', icon_01)
	}
})
