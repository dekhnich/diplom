import { create } from "zustand";
import { url } from "../constants";
var data = require('../json/products.json');

export const useProducts = create((set) => ({
  products: [],
  totalPages: 1,
  setTotalPage: (num) => {
    set((state) => ({ totalPages: num }))
  },
  getProducts: async () => {
    // let data = null
    try {
      // const res = await fetch(url + "/findProducts");
      // data = await res.json()
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.log('There was a SyntaxError', error);
      } else {
        console.log('There was an error', error);
      }
    }
    set((state) => ({ products: data.products, totalPages: data.totalPages }));
  },
  product: {},
  getProductById: async (id) => {
    // let data = null
    let newProduct;
    try {
      console.log('data.products', data.products)
      newProduct = data.products.filter(product => product.article === id)[0]
      console.log({data})
      // const res = await fetch(url + `/getOneProducts?id=${id}`)
      // data = await res.json()
      // console.log(data)
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.log('There was a SyntaxError', error);
      } else {
        console.log('There was an error', error);
      }
    }
    // const newProduct = data.shift();
    set((state) => ({ product: newProduct }));
  },
  busket: JSON.parse(localStorage.getItem('plumbing-basket')) || [],
  clearBusket: () => {
    set((state) => {
      return { busket: [] }
    })
  },
  getBusketList: async () => {
    // Get Busket List from DB
    // const res = await fetch(url + '')
    // const data = await res.json()
    // set((state) => ({ busket: "" || [] }));
  },
  changeBusketItemCount: (count, item) => {
    set((state) => {
      const newBusket = state.busket
      const newItem = { ...item }
      newItem.count = count
      const outBusket = newBusket.map(o => {
        if (o.article === newItem.article) {
          return newItem;
        }
        return o;
      });
      localStorage.setItem('plumbing-basket', JSON.stringify([...outBusket]))
      return { busket: [...outBusket] }
    })
  },
  addItemBusket: (item) => {
    set((state) => {
      // Request for put new item to busket
      localStorage.setItem('plumbing-basket', JSON.stringify([...state.busket, item]))
      return { busket: [...state.busket, item] };
    });
  },
  deleteItemBusket: (id) => {
    set((state) => {
      // Request for delete item in busket
      const newBusket = [...state.busket].filter((item) => item.article !== id);
      localStorage.setItem('plumbing-basket', JSON.stringify([...newBusket]))
      return { busket: [...newBusket] };
    });
  },
  totalSum: 0,
  setTotalSum: () => {
    set((state) => {
      let summ = 0;
      state?.busket?.forEach((element) => {
        const newCost = Number(element.cost.split(".")[0]);
        summ = summ + (newCost * element.count);
      });
      return { totalSum: summ };
    });
  },
  addTotalSum: (sum) => {
    set((state) => ({ totalSum: sum + state.totalSum }))
  },
  deleteTotalSum: (sum) => {
    set((state) => ({ totalSum: state.totalSum - sum }))
  },
  replaceCategory: '',
  setReplaceCategory: (category) => {
    set((state) => ({ replaceCategory: category }))
  }
}));