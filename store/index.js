export const state = () => ({
  user: {
    name: 'Bogdan Sinitsya',
    balance: 50000
  },
  items: [
    {
      id: 1,
      img: '/item1.png',
      name: 'Toyota Corolla',
      price: 6000,
    },
    {
      id: 2,
      img: '/item2.png',
      name: 'Dodge Challenger',
      price: 40000,
    },
    {
      id: 3,
      img: '/item3.png',
      name: 'Nissan Silvia',
      price: 25000,
    },
    {
      id: 4,
      img: '/item4.png',
      name: 'Cadillac Escalade',
      price: 45000,
    },
    {
      id: 5,
      img: '/item5.png',
      name: 'Chevrolet Corvette',
      price: 20000,
    },
    {
      id: 6,
      img: '/item6.png',
      name: 'BMW M3',
      price: 12000,
    },
    {
      id: 7,
      img: '/item7.png',
      name: 'Audi A4',
      price: 15000,
    },
    {
      id: 8,
      img: '/item8.png',
      name: 'Ford GT',
      price: 50000,
    },
    {
      id: 9,
      img: '/item9.png',
      name: 'Ferrari Enzo',
      price: 120000,
    },
    {
      id: 10,
      img: '/item10.png',
      name: 'Lamborghini Murcielago',
      price: 50000,
    },
    {
      id: 11,
      img: '/item11.png',
      name: 'Subaru Impreza',
      price: 17000,
    },
  ],
  inventory: []
})
export const mutations = {
  CLICK(state) {
    state.user.balance = state.user.balance + 1
    localStorage.setItem('ClickLifeBalance', state.user.balance)
  },
  GET_USER(state) {
   state.user.balance = localStorage.getItem('ClickLifeBalance') ?
     Number(localStorage.getItem('ClickLifeBalance')) : state.user.balance
   state.inventory = JSON.parse(localStorage.getItem('ClickLifeInventory')) ?
     JSON.parse(localStorage.getItem('ClickLifeInventory')) : state.inventory
  },
  BUY_ITEM(state, item) {
    let isFind = state.inventory.find(payload => payload.id === item.id)
    console.log(isFind)
    if (!isFind) {
      if (state.user.balance >= item.price) {
        state.user.balance -= item.price
        alert('Вы купили ' + item.name)
        localStorage.setItem('ClickLifeBalance', state.user.balance)
        state.inventory.push(item)
        localStorage.setItem('ClickLifeInventory', JSON.stringify(state.inventory))
      } else {
        alert('У вас недостаточно денег!')
      }
    } else {
      alert('У вас уже есть данный товар')
    }
  },
  SELL_ITEM(state, payload) {
    state.user.balance += payload.price / 100 * 75
    localStorage.setItem('ClickLifeBalance', state.user.balance)
    state.inventory = state.inventory.filter(item => item.id !== payload.id)
    localStorage.setItem('ClickLifeInventory', JSON.stringify(state.inventory))
  }
}
