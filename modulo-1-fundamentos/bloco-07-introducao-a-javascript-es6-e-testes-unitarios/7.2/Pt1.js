const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const orderAddress = order['address']
const orderPizza = order['order']['pizza']
const orderDrinks = order['order']['drinks']
const orderDelivery = order['order']['delivery']
const orderPayment = order['payment']

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  let cInfoLog = `Olá Ana Silveira, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, R. ${orderAddress['street']}, Nº: ${orderAddress['number']}, AP: ${orderAddress['apartment']}`
  console.log(cInfoLog)
}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
//  - Modifique o nome da pessoa compradora.
//  - Modifique o valor total da compra para R$ 50, 00.

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);
