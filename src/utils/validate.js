const checkValidate = (email, password) => {
    const checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const checkName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    // if (checkName === false) return "Sorry, Enter correct name";

    if (checkEmail === false) return "Email is wrong";
    if (checkPassword === false) return "password is wrong";

    return null;

}

export default checkValidate;