const validateFormat = async (UEN) => {
    const typeARegex = /^\d{8}[A-Z]$/;
    const typeBRegex = /^(18|19|20)\d{7}[A-Z]$/;
    const typeCRegex = /^[TS]\d{2}(LP|LL|FC|PF|RF|MQ|MM|NB|CC|CS|MB|FM|GS|DP|CP|NR|CM|CD|MD|HS|VH|CH|MH|CL|XL|CX|HC|RP|TU|TC|FB|FN|PA|PB|SS|MC|SM|GA|GB)\d{4}[A-Z]$/;
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
