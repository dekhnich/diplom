import { url } from "../constants";
export default async function findProduct(object) {
    let data = null
    try {
        const res = await fetch(url + `/findProducts?${object.category ? 'category=' + object.category + '&' : ''}${object.subcategory ? 'subcategory=' + object.subcategory + '&' : ''}${object.type ? 'type=' + object.type + '&' : ''}${object.title ? 'title=' + object.title + '&' : ''}${object.brend ? 'brend=' + object.brend + '&' : ''}${object.description ? 'description=' + object.description + '&' : ''}${object.page ? 'page=' + object.page + '&' : ''}${object.sort ? 'sort=' + object.sort + '&' : ''}`)
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