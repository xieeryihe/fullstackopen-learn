let orders = [
    { amount: 250 },
    { amount: 175 },
    { amount: 300 },
    { amount: 200 }
]

let totalAmount = orders.reduce((total, order) => total + order.amount, 0)
console.log(totalAmount)