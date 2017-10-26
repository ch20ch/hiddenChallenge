/**We have decided that as a header name we want to use x-auth-token name. 
noJwtError is set to true, so that we can use AuthHttp for communication with 
the backend even when the user is not logged in. tokenGetter is the function used 
for finding the token of current user. In our case that is in local storage, 
and the token is stored with key id_token
*/
export function getAuthHttp(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerName: 'x-auth-token',
    noTokenScheme: true,
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => localStorage.getItem('id_token')),
  }), http);
}