export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-N790JJJH7W', {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}