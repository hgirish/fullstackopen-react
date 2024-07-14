const mongoose = require('mongoose')

if (process.argv.length < 3){
    console.error('give password as argument')
    process.exit(1)
}
let mode = 'list'
const password = process.argv[2]
if (process.argv.length  > 4){
    mode = 'insert'

}

const url = `mongodb+srv://fullstack:${password}@clusterfullstack.pw0daih.mongodb.net/phonebookApp?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (mode === 'insert') {
    const name = process.argv[3]
    const number = process.argv[4]

    const person = new Person({
        name: name,
        number: number
    })
    
    person.save().then(result => {
        console.log(`added ${name} ${number} to phonebook`)
        mongoose.connection.close()
    })
}
else {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
    })
}

