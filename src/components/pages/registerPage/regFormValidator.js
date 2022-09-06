export class RegistrationFormValidator {
    formIsValid = false;
    usernameValid = false;
    emailValid = false;
    passwordValid = false;
    confirmPasswordValid = false
    termsOfUseValid = false;

    usernameValidationResult = "";
    emailValidationResult = "";
    passwordValidationResult = "";
    confirmPasswordValidationResult = "";
    
    constructor(regForm){
        this.regForm = regForm
    }

    validateUsername(username){
        this.usernameValid = false;
        
        if (username.length < 2){
            this.usernameValidationResult = "Must have at least two characters!"
            return;
        }

        if (username.length > 16){
            this.usernameValidationResult = "Must be maximum 16 characters!"
            return;
        }

        if (!/^[A-Za-z0-9-_]*$/.test(username)){
            this.usernameValidationResult = "Only letters, numbers, - and _ allowed!";
            return;
        }

        this.usernameValid = true;
    }

    validateEmail(email){
        this.emailValid = false;
        if(!email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )){
            this.emailValidationResult = "You must provide valid email!";
            return;
        }

        if(email.length > 100){
            this.emailValidationResult = "Email address is too long!";
            return;
        }

        this.emailValid = true;
    }

    validatePassword(password){
        this.passwordValid = false;

        if (password.length < 8){
            this.passwordValidationResult = "Must have at least 8 characters!"
            return;
        }

        if (!/^[A-Za-z0-9!@#$%^&*]*$/.test(password)){
            this.passwordValidationResult = "Only letters, digits and !@#$%^&* characters allowed!";
            return;
        }

        if (!/[a-z]/.test(password)){
            this.passwordValidationResult = "Must contain at least one small letter!";
            return;
        }

        if (!/[A-Z]/.test(password)){
            this.passwordValidationResult = "Must contain at least one capital letter!";
            return;
        }

        this.passwordValid = true;
    }

    validateConfirmPassword(password, confirmPassword){
        this.confirmPasswordValid = false;
        this.confirmPasswordValidationResult = "Given passwords are not the same!";
        if (password === confirmPassword)
            this.confirmPasswordValid = true;
    }

    validateTermsAccepted(termsAccepted){
        if (termsAccepted) this.termsOfUseValid = true;
    }

    allFieldsAreValid(){
        return (
            this.usernameValid && 
            this.emailValid && 
            this.passwordValid && 
            this.confirmPasswordValid && 
            this.termsOfUseValid) ? 
            true : false;
    }
    
    setInvalidFields(data){
        this.formIsValid = false;

        if (data.usernameTaken){
            this.usernameValid = false;
            this.usernameValidationResult = "This username is already taken!"
        }

        if (data.emailTaken){
            this.emailValid = false;
            this.emailValidationResult = "This email address is already taken!"
        }
    }

    validate(){
        this.validateUsername(this.regForm.username);
        this.validateEmail(this.regForm.email);
        this.validatePassword(this.regForm.password);
        this.validateConfirmPassword(this.regForm.password, this.regForm.confirmPassword);
        this.validateTermsAccepted(this.regForm.termsAccepted);
        if (this.allFieldsAreValid()) this.formIsValid = true;
    }
}