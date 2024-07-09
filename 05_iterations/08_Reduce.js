const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (accumulator,curval) {
//     console.log(`accumulator:${accumulator} and curval:${curval}`);
//     return accumulator + curval
// }, 0)

const myTotal = myNums.reduce( ( accumulator,curval) => accumulator+curval, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"data science course",
        price:12999
    }
]

const priceToPay = shoppingCart.reduce( (accumulator,item) => accumulator+item.price,0)

console.log(priceToPay);