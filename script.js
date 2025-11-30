;(function () {
  const popup = document.getElementById('paymentPopup')
  const popupText = document.getElementById('paymentPopupText')
  const closeBtn = popup && popup.querySelector('.payment-popup__close')

  // Реквізити для кожного будинку
  const paymentData = {
    1: `Вербицького 7а:
ТОВ «Сфера Дому»
IBAN: UA04 305299 00000 26001013305006
ЄДРПОУ: 45508150
Призначення платежу: адреса та особовий рахунок`,

    2: `Шпитальна 22:
ТОВ «Сфера Дому»
IBAN: UA78 305299 00000 26004043306157
ЄДРПОУ: 45508150
Призначення платежу: адреса та особовий рахунок`,

    3: `Петриківська 6:
ТОВ «Сфера Дому»
IBAN: UA46 305299 00000 26006023317487
ЄДРПОУ: 45508150
Призначення платежу: адреса та особовий рахунок`,

    4: `Острозького 36:
ТОВ «Сфера Дому»
IBAN: UA23 305299 00000 26002023311926
ЄДРПОУ: 45508150
Призначення платежу: адреса та особовий рахунок`,

    5: `Білогірська 13:
ТОВ «Сфера Дому»
IBAN: UA07 305299 00000 26001023312636
ЄДРПОУ: 45508150
Призначення платежу: адреса та особовий рахунок`,
  }

  // Відкриття попапу при кліку на посилання
  document.querySelectorAll('.show-payment').forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const id = this.dataset.paymentId
      popupText.textContent =
        paymentData[id] || 'Реквізити тимчасово недоступні'
      popup.setAttribute('aria-hidden', 'false')
      if (closeBtn) closeBtn.focus()
    })
  })

  // Закриття по хрестику
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      popup.setAttribute('aria-hidden', 'true')
    })
  }

  // Закриття по кліку поза вікном
  popup.addEventListener('click', function (e) {
    if (e.target === popup) {
      popup.setAttribute('aria-hidden', 'true')
    }
  })

  // Закриття ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') {
      popup.setAttribute('aria-hidden', 'true')
    }
  })
})()
