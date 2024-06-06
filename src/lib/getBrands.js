import { url } from '../constants'

export default async function getBrands() {
    let data = null
    try {
        const res = await fetch(url + '/getBrands')
        data = await res.json()
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log('There was a SyntaxError', error);
        } else {
            console.log('There was an error', error);
        }
    }
    return data
}