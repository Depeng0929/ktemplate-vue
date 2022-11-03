export function createResponseData(data: Object) {
  const response: API.AppHttpResponse = {
    data,
    code: 200,
    msg: 'success',
  }
  return JSON.stringify(response)
}
