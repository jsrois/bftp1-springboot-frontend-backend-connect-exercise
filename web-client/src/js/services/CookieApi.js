export class CookieApi {

    getCookies() {
        return fetch(`http://localhost:8080/cookies`).then(r => r.json())
    }

    createCookie(cookie) {
        return fetch(`http://localhost:8080/cookies`, {
            method: 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cookie)
        })
    }

    deleteCookieById(id) {
        return fetch(`http://localhost:8080/cookies/${id}`, {
            method: 'DELETE'
        })
    }

}