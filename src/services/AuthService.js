import BaseUrl from './BaseUrl';

export const signIn = async (data) => {
    const response = await fetch(`${BaseUrl}login`,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => res.json());
    return await response;
}
