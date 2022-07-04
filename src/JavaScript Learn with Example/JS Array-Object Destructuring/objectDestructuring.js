export default function ObjectDestructuring () {

    const personOne = {
        name: "Berat",
        age: 23,
        address: {
            city: "Istanbul",
            state: "Somewhere"
        }
    }
    
    const personTwo = {
        name: "Kyle",
        age: 30,
        favoriteFood: "Watermelon",
        address: {
            city: "Ankara",
            state: "Else"
        }
    }

    const personThree = {
        name: "Dylan",
        age: 26,
        favoriteFood: "Watermelon",
        address: {
            city: "İzmir",
            state: "Somewhere else"
        }
    }

    const personFour = {
        age: 22,
        favoriteFood: "Watermelon",
    }
    
    const {name: secondObjectName, age, favoriteFood = "Rice" } = personTwo  // Rice is default value for favoriteFood. If personTwo object doesn't have a favoriteFood section
                                                                        //or its empty, its value will be Rice, otherwise its get the normal value(Watermelon)
    console.log(secondObjectName)
    console.log(age)
    console.log(favoriteFood)



    const {name: firstObjectName, ...rest} = personOne 
    console.log(firstObjectName)
    console.log(rest)




    const {name: thirdObjectName, address: { city }} = personThree 
    console.log(thirdObjectName)
    console.log(city)



    const personFive = {...personOne, ...personFour} // Merge the two object

    console.log(personFive)



    function printUser({ name, age }) {
        console.log(`Name is: ${name}. Age is ${age}`)
    }
    printUser(personOne)

}

