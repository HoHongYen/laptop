var username = document.getElementById("username");
var password = document.getElementById("password");
var form = document.getElementById("login-form");

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
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
    let isEmptyError = checkEmptyError([username, password]);
    let isUsernameLengthError = checkLengthError(username, 4, 10);
    let isPasswordLengthError = checkLengthError(password, 8, 14);

    if (isEmptyError || isUsernameLengthError || isPasswordLengthError) {
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


