type Wilder = {
    name: string,
    city: string,
    email: String,
}
const helloWilder = (wilder: Wilder) => 'Hello ${wilder.name from ${wilder.city}'