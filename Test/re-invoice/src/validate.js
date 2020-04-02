// export const combine = (...validations) => value => {
//     for (const validate of validations) {
//       if (typeof validate === 'function') {
//         const {errorMessage, isInputValid} = validate(value)
//         if (errorMessage) return { isInputValid, errorMessage};
//       }
//     }
//   }

export const none = value => {
    return { isInputValid: true, errorMessage: ''}; 
}

export const required = value => {
    if (!value || value.length === 0) return { isInputValid: false, errorMessage: 'Trường này là bắt buộc'};
    else return { isInputValid: true, errorMessage: ''};
}

export const number = value => {
    if (value && isNaN(Number(value))) return { isInputValid: false, errorMessage: 'Giá trị không hợp lệ'};
    else return { isInputValid: true, errorMessage: ''}; 
}

export const maxLength = max => value => {
    if (value && value.length > max) return { isInputValid: false, errorMessage: `Độ dài tối thiểu là ${max}`};
    else return { isInputValid: true, errorMessage: ''};
}

export const phoneNumber = value => {
    const regexp = /^\d{10,11}$/;
    const checkingResult = regexp.exec(value);
    if (checkingResult !== null) {
        return { isInputValid: true,
                 errorMessage: ''};
    } else {
        return { isInputValid: false,
                 errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'};
    };
}
