//aqui vou criar todos os métodos que vão fazer as requisições para a API do spotify

const get = async (url, options) => {
    const customOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    //aqui estou usando o spreed para juntar os dois objetos, o customOptions e o options que vem como parâmetro
    const response = await fetch(url, {...customOptions, ...options});
    return await response.json();
}

const post = async (url, options) => {
    const customOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await fetch(url, {...customOptions, ...options});
    return await response.json();
}

const put = async (url, options) => {
    const customOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await fetch(url, {...customOptions, ...options});
    return await response.json();
}

const remove = async (url, options) => {
    const customOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await fetch(url, {...customOptions, ...options});
    return await response.json();
}

export { get, post, put, remove };