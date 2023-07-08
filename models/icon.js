class Icon {
    constructor() {
        this._init()
    }

    _init() {
        this._placeIcon()
    }

    _placeIcon() {
        const iconListContainer = document.querySelector('[data-testid="now-playing-widget"]')
        const root = this._createRootContainer()
        iconListContainer.insertAdjacentHTML('beforeend', root)
    }

    setupToggler(toggler) {
        const icon = document.getElementById('chorus-icon')
        icon.onclick = () => toggler()
    }

    _createRootContainer() {
        return `
            <div id="chorus">
                ${this._createIcon()}
                <div id="chorus-main" style="display: none"></div>
            </div>
        `
    }

    _createIcon() {
        return `
            <div id="chorus-icon" class="chorus-hover-white"">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    width="2rem"
                    height="2rem"
                    style="padding: 0.375rem;"
                    preserveAspectRatio="xMidYMid meet"
                    id="chorus-highlight"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                </svg>
            </div>
        `
    }
}