import renderJsonResponse from './renderJsonResponse';
  
const callBackendAPI = async (method) => {
const response = await fetch(`/${method}`);
const body = await response.json();

if (response.status !== 200) {
    throw Error(body.message) 
}
return renderJsonResponse(body);
}

export default callBackendAPI;