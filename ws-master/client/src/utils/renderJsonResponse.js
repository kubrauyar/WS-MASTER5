const renderJsonResponse = (response) => {
    let rawJson = {};
    for(let key in response){
      rawJson[key] = response[key];
    }
    return rawJson;
  }
export default renderJsonResponse;