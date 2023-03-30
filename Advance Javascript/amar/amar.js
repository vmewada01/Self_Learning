let amar = {

    job: 'Singer',
    place: 'Goa',
}

let akbar = {

    job: 'chef',
    place: 'Mumbai',

    switch: function (skills) {
        console.log(`Now ${skills} can be a ${this.job}`)
    }
}

let anthony = {

    job: 'Magician',
    place: 'Kashmir',
}
akbar.switch.call(anthony, "akbar")

akbar.switch.call(amar, "akbar")

akbar.switch.call(amar, "anthony")

akbar.switch.call(anthony, "amar")

//   akbar.switch.call(akbar,"chef")