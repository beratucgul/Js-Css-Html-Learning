import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function UseEffectLearn2() {

    const [resourceType, setResourceType] = useState("posts")


    useEffect(() => {
        console.log("resource changed")

        return () => {
            console.log("return from resource changed")
        }
    }, [resourceType])




    return (
        <>
            <View>
                <button onClick={() => setResourceType("posts")}>Posts</button>
                <button onClick={() => setResourceType("users")}>Users</button>
                <button onClick={() => setResourceType("comments")}>Comments</button>
            </View>
            <h1>{resourceType}</h1>
        </>
    )
}