// --------------Contact----------------------//

var email = document.getElementById("email");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var form = document.getElementById("login-form");

function showError(input, msg) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = msg;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            isEmptyError = true;
            showError(input, "Không được để trống!")
        }
        else {
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input) {
    const regexEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if (isEmailError) {
        showError(input, "Nhập chưa đúng định dạng email!");
    }
    else {
        showSuccess(input);
    }
    return isEmailError;
}

function checkPhoneError(input) {
    const regexPhone =  /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    input.value = input.value.trim();
    let isPhoneError = !regexPhone.test(input.value);
    if (isPhoneError) {
        showError(input, "Vui lòng nhập đúng số điện thoại!");
        // return true;
    }
    else {
        showSuccess(input);
        // return false;
    }
    return isPhoneError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length<min) {
        showError(input, `Nhập tối thiểu ${min} kí tự!`);
        return true;
    }
    if (input.value.length>max) {
        showError(input, `Nhập tối đa ${max} kí tự!`);
        return true;
    }
    return false;
}


// modal popup

var modal = document.querySelector(".my-modal");
var iconClose = document.querySelector(".modal-header i");
var btnClose = document.querySelector(".modal-footer button");
function toggleModal() {
    modal.classList.toggle('my-modal-hide');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isEmptyError = checkEmptyError([email, phone, message]);
    let isEmailError = checkEmailError(email);
    let isPhoneError = checkPhoneError(phone);
    let isPhoneLengthError = checkLengthError(phone, 10, 10);
    let isMessageLengthError = checkLengthError(message, 10, 100);

    if (isEmptyError || isEmailError || isPhoneError || isPhoneLengthError || isMessageLengthError) {
        // do nothing
    } else {
        // alert("Đăng nhập thành công!");
        toggleModal();
    }
})

iconClose.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e) {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
});


