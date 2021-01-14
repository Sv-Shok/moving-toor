const isCookie = (cookies, cookieName)=>{
    if(!cookies) return false;
    let cookiesArr = [];
    for (let key of cookies.split(";")){
        cookiesArr.push(key.trim().split("="));
    }
    console.log(cookiesArr);
    return Object.keys(Object.fromEntries(cookiesArr)).includes(cookieName);
};

module.exports = isCookie;