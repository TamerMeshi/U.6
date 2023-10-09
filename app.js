

const store = {
    id: 1,
    dateAdd: '14.09.2023',
    nameRecipient: 'Ivan',
    address: {
      city: 'Moscow',
      street: 'Lenin street',
    },
    dateOfReceipt: '20.09.2023',
    itemsProduct: [
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
        getSumWithDiscount: () => {
          return ((this.price * this.quantity) / 100) * (100 - this.discount);
        },
        getSumWithoutDiscount: () => {
          return this.price * this.quantity;
        },
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
        getSumWithDiscount: () => {
          return ((this.price * this.quantity) / 100) * (100 - this.discount);
        },
        getSumWithoutDiscount: () => {
          return this.price * this.quantity;
        },
      },
    ],
  };


    console.log(store)


    
const person = [
                ['name', 'timur'],
                ['age', 36],
                ['isDev', true]
]

                console.log(Object.fromEntries(person))

const store2 = {
  id: 1,
  dateAdd: '14.09.2023',
  nameRecipient: 'Ivan',
  address: {
    city: 'Moscow',
    street: 'Lenin street',
  },
  dateOfReceipt: '20.09.2023',
  itemsProduct: [
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
        name: 'черри',
        weight: 2,
        cub: 0.5,
        uuid: '4ac88875-d310-4bb6-8a10-098333db9355',
      },
      price: 12,
      quantity: 3,
      discount: 10,
    },
  ],
};

let storeClone = structuredClone(store2);
console.log(storeClone);


