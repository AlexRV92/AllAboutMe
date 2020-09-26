const args = process.argv;

const currentHour = parseInt(process.argv[2])

console.info(currentHour)

let regard = getRegard(currentHour)

console.info(regard)


function getRegard(currentHour) {

    if (currentHour >= 7 && currentHour <= 15) {
        return 'Good morning!!'
    }

    if (currentHour > 15 && currentHour <= 20) {
        return 'Good afternoon!!'
    }

    return 'Good night'
}