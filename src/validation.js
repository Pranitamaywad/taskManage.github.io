const validation = (values) =>{
    let errors = {}
    if(!values.name) {
        errors.name = 'Enter_Name';
    }
    else if (values.name.length < 5){
    errors.name = "Name must be more than 5 char"
    }

    if(!values.password) {
        errors.password = 'Enter_pass';
    }
    else if (values.password.length < 8){
    errors.password = "password must be more than 7 char";
    }
    return errors;
} 
export default validation;