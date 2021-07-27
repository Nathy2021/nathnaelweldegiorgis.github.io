$(() => {
    let password = $("#password").val();
    let regEx = /((?=.*\d)(?=.*[a-z])(?=.*[A Z]).{10,})/i;

    $("#submit").click(() => {
        if (regEx.test(password)) {
            $("#message").text("Your password is written CORRECTLY!");
        } else {
            $("#message").text("Must contain at least 10 characters, at least one number "
                + "and one uppercase and lowercase letter");
        }
    });
});