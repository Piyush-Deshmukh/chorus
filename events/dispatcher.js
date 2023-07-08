class Dispatcher {
    constructor() {}

    _responsePromise(eventType) {
        return new Promise(resolve => {
            const resultListener = e => {
                resolve(e.detail)
                document.removeEventListener(eventType, resultListener)
            }

            document.addEventListener(eventType, resultListener)
        })
    }

    async sendEvent({ eventType, detail = {} }) {
        document.dispatchEvent(new CustomEvent(eventType, { detail }))

        return await this._responsePromise(`${eventType}.response`)
    }
}