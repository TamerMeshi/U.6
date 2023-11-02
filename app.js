const priceCalc = {
  withDiscount() {
    var result = 0
    this.productItems.forEach(element =>{
      result += element.price * element.quantity * ((100 - element.discount) / 100)
    });
    return result
  },
  withoutDiscount() {
    var result = 0
    this.productItems.forEach(element =>{
      result += element.price * element.quantity
    });
    return result
  },
};

const store = {
    id: 1,
    dateAdd: '14.09.2023',
    nameRecipient: 'Ivan',
    address: {
      city: 'Moscow',
      street: 'Lenin street',
    },
    dateOfReceipt: '20.09.2023',
    productItems: [
      {
        details: {
          name: 'apple',
          weight: 3,
          cub: 0.5,
          uuid: '4ac88875-d310-4bb6-8a10-098333db9300',
        },
        price: 10,
        quantity: 5,
        discount: 15,
      },
      {
        details: {
          name: 'banana',
          weight: 2,
          cub: 0.5,
          uuid: '4ac88875-d310-4bb6-8a10-098333db9355',
        },
        price: 12,
        quantity: 3,
        discount: 10,
       
      },
    ],
    __proto__:priceCalc
  };
    console.log(store)

        
   
     
 
    
       console.log(store.withDiscount())
       console.log(store.withoutDiscount())





let {productItems:items} = store

console.log(items)





const storeClone = structuredClone(store)
storeClone.address.street = 'lomonosov'
console.log(store)
console.log(storeClone)


function myClone(obj){
  const clonedObj={}
  for( let key in obj){
    clonedObj[key] = {}
    if (
      typeof obj[key] === 'object'
      // && !Array.isArray(obj[key])
      // && obj[key] !== null
    ){
      clonedObj[key] = myClone(obj[key])
    }
    else
    {
      clonedObj[key] = obj[key]
    }
  }
 return clonedObj
}

const storeClone2 = myClone(store)
storeClone2.address.street = 'lomonosov'
console.log(store)
console.log(storeClone2)



