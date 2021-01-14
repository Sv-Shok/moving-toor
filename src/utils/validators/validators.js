export const required = value =>{
    if(value) return undefined;
    return "Заповніть поле";
};

export const maxLengthCreator = (maxLength)=> (value)=>{
    if(value && value.length > maxLength) return `Максимальна кількість ${maxLength} символів`;
    return undefined;
};
