export class CookieApi {

    baseUrl = "http://localhost:8080"

    getCookies() {
        return fetch(`${(this.baseUrl)}/cookies`).then(r => r.json())
    }

    createCookie(cookie) {
        return fetch(`${(this.baseUrl)}/cookies`, {
            method: 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cookie)
        })
    }

    deleteCookieById(id) {
        return fetch(`${(this.baseUrl)}/cookies/${id}`, {
            method: 'DELETE'
        })
    }

}