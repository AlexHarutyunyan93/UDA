
export const validationService = {

};

function inputFiled(field){
    if(!field){
       return messages.password.required
    }
    if(field.length < 7){
        return messages.password.minLength
    }
    if(field.length > 255){
        return messages.password.maxLength
    }
}

const messages = {
  password: {
      required: "Password is required.",
      minLength: "Password must be more than 8 symbols",
      maxLength: "Password must not be more than 255 symbols"
  }
};

