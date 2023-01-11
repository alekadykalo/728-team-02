const validation = (e) => {
    let messages = [];
    const form = document.forms['send-request__form'];
    const name = form.elements['full-name'];
    const phone = form.elements['phone-number'];
    const email = form.elements['email'];
    
    const phonePattern = /[0-9]/;
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Declaring function area    
    
//Fixing errors in classes on update
    function removeError (input) {
        input.classList.add("valid");
        input.classList.remove("errorField");
    }

    
//Updating class based on validation
    
    function updateError (input) {
        input.classList.remove("valid");
        input.classList.add("errorField");
    }
    
    
// Name check function
    function nameCheck (name, message) {
        if (name.value === "") {
            updateError(name);
            messages.push(message);
        }
    }
    
// Phone check function
    function phoneCheck(phone, pattern, message) {
        if (!pattern.test(phone.value.trim())) {
            updateError(phone);
            messages.push(message);
        }
    }
    
// Email check function
    function emailCheck(email, pattern, message) {
        if (!pattern.test(email.value.trim())) {
            updateError(email);
            messages.push(message);
        }
    }
    
    
//Script execution area
    
    
    removeError(name);
    removeError(phone);
    removeError(email);

    
    nameCheck(name, "Name cannon be blank");
    phoneCheck(phone, phonePattern, "Enter valid phone number");
    emailCheck(email, emailPattern, "Enter valid email address");
    if (messages.length > 0) {
        e.preventDefault();
        alert(messages.join('\n'));
        return false;
    }
    
    else {
        return true;
    }
       
};