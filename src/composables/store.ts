import { acceptHMRUpdate, defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  const productName = ref('');
  const productPrice = ref('');

  const customerName = ref('');
  const customerMail = ref('');
  const customerNumber = ref('');

  const setStore = (name: string, price: string) => {
    productName.value = name;
    productPrice.value = price;
  }

  const setCustomer = (name: string, mail: string, number: string) => {
    customerMail.value = mail;
    customerName.value = name;
    customerNumber.value = number;
  }

  return {
    productName,
    productPrice,
    setStore,
    customerName,
    customerMail,
    customerNumber,
    setCustomer
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))