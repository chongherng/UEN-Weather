const validateFormat = async (UEN) => {
    const typeARegex = /^\d{8}[A-Z]$/;
    const typeBRegex = /^\d{9}[A-Z]$/;
    const typeCRegex = /^[TS]\d{2}[A-Z][A-Z0-9]\d{4}[A-Z]$/;
    if(typeARegex.test(UEN)){
      return "UEN is of type A";
    }
    if(typeBRegex.test(UEN)){
      return "UEN is of type B";
    }
    if(typeCRegex.test(UEN)){
      return "UEN is of type C";
    }
    return "Invalid format of UEN";
}


module.exports = {
    validateFormat
}