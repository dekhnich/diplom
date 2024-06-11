import { url } from "../constants";

const productsObj = require('../json/products.json');
export default async function findProduct(object) {
    let data = null

    const products = productsObj.products;
    try {
        console.log(object)
        let result;

        if (object.title) {
            result = object.title === '' ? products : products.filter(product => product.title.toLowerCase().includes(object.title.toLowerCase()));
        } else {
            result = object.category === 'all' || object.category === '' ? products : products.filter(product => product.category === object.category);
            result = object.brend === 'all' || object.brend === '' ? result : result.filter(product => product.brend === object.brend);
        }

        if (result) {
            data = {
                products: result,
                totalPages: 1,
            }
        }
        // const res = await fetch(url + `/findProducts?${object.category ? 'category=' + object.category + '&' : ''}${object.subcategory ? 'subcategory=' + object.subcategory + '&' : ''}${object.type ? 'type=' + object.type + '&' : ''}${object.title ? 'title=' + object.title + '&' : ''}${object.brend ? 'brend=' + object.brend + '&' : ''}${object.description ? 'description=' + object.description + '&' : ''}${object.page ? 'page=' + object.page + '&' : ''}${object.sort ? 'sort=' + object.sort + '&' : ''}`)
        // data = await res.json()
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.log('There was a SyntaxError', error);
        } else {
            console.log('There was an error', error);
        }
    }
    return data
}