const BASE_URL_API = 'http://192.168.0.106:8080';
//var headers = new Headers();

/*export const checkToken = async(token) => {
    const response = await fetch
}*/

export const signIn = async (email, password) => {
    const response = await fetch(`${BASE_URL_API}/api/login/${email}/${password}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    });
    const json = await response.json();
    return json;
}

export const signUp = async(firstname, lastname, email, password) => {
    const response = await fetch(`${BASE_URL_API}/srun/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname, lastname: lastname, 
            email: email, password: password, 
        }),
    });
    const json = await response.json();
    return json;
}