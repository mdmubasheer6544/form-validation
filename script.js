let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');
let phone=document.getElementById('phone');
let form = document.getElementById('form');


//show eerr
let showErr = (input, msg) => {
    let formControl = input.parentElement;
    formControl.className = "form-control error";
    let small = formControl.querySelector('small');
    small.innerText = msg;
}
//sucess function
let sucessFunc = (input) => {
    let formControl = input.parentElement;
    formControl.className = "form-control sucess";
}


///is required check
let isRequiredCheck = (inputArray) => {
    inputArray.forEach((input) => {
        if (input.value.trim() === "") {
            showErr(input, `${getControlname(input)} is required`);
        }
        else {
            sucessFunc(input);
        }
    });
}

let getControlname = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}



//is check length

let isChecklength = (input, min, max) => {
    if (input.value !== '') {

        if (input.value.length < min) {
            showErr(input, `${getControlname(input)} is must be at least ${min} characters `)
        }
        else if (input.value.length > max) {
            showErr(input, `${getControlname(input)} is must be less than ${max} characters `)
        }
        else {
            sucessFunc(input);
        }
    }
}
//confirm password

let isCornfrmpass = (input1, input2) => {
    if (input1.value !== '' && input2.value !== '') {
        if (input1.value !== input2.value) {
            showErr(input2, `Password do not match`);
        }
    }
}

//isEmail validate function
let isEmailValidate = (input) => {
    if (input.value !== '') {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
            sucessFunc(input)
        } else {
            showErr(input, `${getControlname(input)} is not valid`);

        }
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isRequiredCheck([username, email, password, password2,phone]);
    isChecklength(username, 3, 15);
    isChecklength(password, 6, 25);
    isEmailValidate(email);
    isCornfrmpass(password, password2);

})