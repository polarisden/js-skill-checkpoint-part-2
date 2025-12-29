// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")  
    const data = await response.json()
    return data
}

async function nameMoreThan17() {
    let data = await getUsers()
    try {
        // console.log(data)
        let result = data.filter(value => value.name.length > 17).map(value => value.name)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

nameMoreThan17()