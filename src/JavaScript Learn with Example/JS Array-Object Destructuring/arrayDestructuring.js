export default function Destructuring() {

    const alphabet = ["A", "B", "C", "D", "E", "F"]
    const numbers = ["1", "2", "3", "4", "5", "6"]

    /*const [a, b, c] = alphabet    // We can call the specific element in array with this way
    console.log(a)
    console.log(b)
    console.log(c)*/

    /*const [a,, c] = alphabet    // If we want to skipped b, we just remove B and leave this comma, and this is going to say skip the second element
    console.log(a)
    console.log(c) */

    

    /*const [a,, c, ...rest] = alphabet    // If we want to get the rest of the elements in the alphabet, we should use spread operator.
                                        // we put three dot(...) and give a name whatever we want to call the rest of the alphabet
    console.log(a)
    console.log(c)
    console.log(rest)*/

    const newArray = [...alphabet, ...numbers] //with spread operator, we can combine the two different arrays
                                                //const newArray = [...alphabet, ...numbers] same as const newArray = alphabet.concat(numbers)
    console.log(newArray)



    function sumAndMultiply(a, b) {
        return [a+b, a*b]
    }
    const [sum, multiply, division = "No Division"] = sumAndMultiply(2,3) // this function is same as const array = sumAndMultiply(2,3) but this method is less clear then the 
                                                                        //const[sum, multiply]
    // The default parameter or division is "No Division". But if we added a/b inside the return object of the sumAndMultiply function, we can make the divide process
    
    console.log(sum)
    console.log(multiply)
    console.log(division)

}

