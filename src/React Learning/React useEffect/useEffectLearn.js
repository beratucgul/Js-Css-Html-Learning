import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'


export default function UseEffectLearn() {

    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] = useState([])


    /*useEffect(() => {       // Everything inside of this arrow function is going to be executed every single time of application renders
        console.log("resource type changed")
    }, [resourceType])      // Whatever you pass into the this array is going to be values that one every they change your hooks is going to run
                            // Every our resourceType changes we gonna re-run this hook
                            // If we leave this array empty, this hook doesn't work because this empty array never actually changes between different renders
                            // so it says basically, when the value of the array is changed, do something like (console.log("resource type changed") in that example.) */


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])




    return (
        <>
            <View>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>Comments</button>
            </View>
            <h1>{resourceType}</h1>
            {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}