const app = Vue.createApp({

    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            city: 'Should be a city name',
            age: 'Should be age',
            thisisTime: new Date().toJSON().slice(0, 19).replace(/-/g, '-').replace(/T/g, ' '),

        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            this.greeting = 'Hello'
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.city = results[0].location.city
            this.age = results[0].dob.age


        },
        async clearUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            //console.log(results)



            this.greeting = 'Click to generate a user'

            this.firstName = null
            this.lastName = null
            this.email = null
            this.gender = 'neutral'
            this.picture = 'error_image.jpg'
            this.city = null
            this.age = null




        },
    },
})

app.mount('#app')