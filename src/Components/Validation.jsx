export const chechValidData = (email , password)=> {  
    const isEmailvalid    = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    const inPasswordvalid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)

    if(!isEmailvalid) return "Email Id is Not Valid";
    if(!inPasswordvalid) return "Password  is Not Valid";
    return null;
}