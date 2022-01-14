let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

namaku = "Kelvin Wong"
emailku = "lucky7kelvin@gmail.com"
hobiku = ["baca", "main", "makan"]

// data.name = namaku
// data.email = emailku
// data.hobby = [...hobiku, "jalan"]
// console.log(data)

console.log({
        ...data,
        name: "Kelvin",
        email: "lucky7kelvin@gmail.com",
        hobby: "test",
    }
)


const {street, city} = data.address
console.log(street)
console.log(city)