import User, { printName as printUserName, printAge} from "./user"  
                            // We can change the User with U. If we change with U, we have to create user like new U("Bob", 20)
                            // We can import the export default function with just write the name like User.
                            // But we can import the function without export default(just with export) with inside the curly braces{}



export default function NewUser() {
    const user = new User("Bob", 20)
    console.log(user)
    printUserName(user)
    printAge(user)
}
