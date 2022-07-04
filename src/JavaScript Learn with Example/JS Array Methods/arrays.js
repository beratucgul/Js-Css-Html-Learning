export default function Array() {

    const items = [
        {name: "Bike",  price: 100},
        {name: "TV",  price: 200},
        {name: "Album",  price: 10},
        {name: "Book",  price: 5},
        {name: "Phone",  price: 500},
        {name: "Computer",  price: 1000},
        {name: "Keyboard",  price: 25}
    ]
    console.log(items)


    const filteredItems = items.filter((item) => { // we get a items with price <= 100
        return item.price <= 100
    })
    console.log(filteredItems)


    const itemNames = items.map((item) => {  // We get a new array that is just full of name of the items
        return item.name
    })
    console.log(itemNames)


    const foundItem = items.find((item) => { // Return the first item that it finds in the array that returns true for the statement that we pass inside of the find function
        return item.name === "Book"
    })
    console.log(foundItem)


    items.forEach((item) => {  // Return the items name inside the array
        console.log(item.name)
    })

    
    const hasInexpensiveItems = items.some((item) => { // Checks the array and if array has an item with price <= 100, return true
        return item.price <= 100
    })
    console.log(hasInexpensiveItems)
    
    
    const hasAnInexpensiveItems = items.every((item) => { // Checks the array and if array has a full of item with price <= 1000, return true
        return item.price <= 1000
    })
    console.log(hasAnInexpensiveItems)


    const total = items.reduce((currentTotal, item) => { // The first of that function(currentTotal), is going to be whatever the previous iteration of this array returned
                                                        // and the second item is the actual item in the array.
                                                        // current total is going to start on the very first iteration with whatever we pass in as the second parameter
                                                        // so in our case 0. First time this reduced runs, we get 0 and our bike item, so it just does 100 + 0 and returns
                                                        // that which is a 100. The second time this gets ran that return value of 100 gets put in the currentTotal parameter
                                                        // and our next item TV is the item(parameter) value. So it does 200 + our current total of 100 which is 300 and puts 
                                                        // that back in for the current total and it does that until we get all the way to the very last item in our array.
        return item.price + currentTotal
    }, 0)
    console.log(total)


    const secondItems = [1, 2, 3, 4, 5]

    const includesTow = secondItems.includes(2)
    console.log(includesTow)


}