let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup');
const form = document.querySelector('form');

form.addEventListener('submit', evt => {
    evt.preventDefault();

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    console.log(phone);
    if (validateEmail(email) === false || email === '') {
        document.form.email.style.border = '1px solid #ff0000';
        document.getElementById('popup-alert').style.background = '#f7d7da';
        document.getElementById('popup-alert').innerHTML = 'Пожалуйста, заполните почту!';
        document.getElementById('popup-alert').style.display = 'flex';
    } else if (validatePhone(phone) === false || phone === '') {
        document.form.phone.style.border = '1px solid #ff0000';
        document.getElementById('popup-alert').style.background = '#f7d7da';
        document.getElementById('popup-alert').innerHTML = 'Пожалуйста, заполните телефон!';
        document.getElementById('popup-alert').style.display = 'flex';
    } else {
        document.form.email.style.border = '1px solid #a0a0a0';
        document.form.phone.style.border = '1px solid #a0a0a0';
        document.getElementById('popup-alert').style.display = 'none';

        fetch('system/amo.php', {
            method: 'POST',
            body: new FormData(form)
        }).then(function (response) {
            document.getElementById('popup-alert').style.background = '#d1e6dd';
            document.getElementById('popup-alert').innerHTML = 'Данные отправлены!';
            document.getElementById('popup-alert').style.display = 'flex';
        }).catch(function (error) {
            document.getElementById('popup-alert').style.background = '#f7d7da';
            document.getElementById('popup-alert').innerHTML = 'Что-то пошло не так!';
            document.getElementById('popup-alert').style.display = 'flex';
        });
    }
})

function openPopup() {
    popupBg.classList.add('active');
    popup.classList.add('active');
}

function closePopup() {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
}

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});

function validateEmail(email) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/;
    if (reg.test(email) == false) {
        return false;
    }
}

function validatePhone(phone) {
    let reg = /^(\+7|7|8)[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (reg.test(phone) == false) {
        return false;
    }
}

window.addEventListener('DOMContentLoaded', function () {
    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select()
        }
    }

    function mask(event) {
        let matrix = '+7 (___) ___-__-__',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
        });
        if (event.type === 'blur') {
            if (this.value.length === 2) this.value = ''
        } else setCursorPosition(this.value.length, this)
    };
    let input = document.querySelector('#phone');
    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
});
