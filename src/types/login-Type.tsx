
interface prop {
    name: string
    email: string
    age: number
    courses: string[]
    // [key: string]: string
}

export default function Person(prop: prop) {

    return (
        <>
            <h1> name : {prop.name}</h1>
            <h2> email : {prop.email}</h2>
            <h3>age : {prop.age}</h3>
            {prop.courses.map((courses) => (
                <h4 key={courses}>{courses}</h4>
            ))}

        </>
    )

}