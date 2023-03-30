let automobiles = {
    tyre: 4,
    window: 4,
    company: "Tata R&D",
    metal: 'tata',
}


let new_model = Object.create(automobiles)
new_model.color = "pink"

let model2022 = Object.create(new_model);
model2022.milage = "30km/ltr"


console.log(model2022);

function automob(t, m, n) {
    this.tyre = t,
        this.window = 4,
        this.milage = m,
        this.company = "tata"
    this.name = n
}

let nexon = new automob(4, "30km/ltr", "nexon")
automob.prototype.info = function () {
    console.log(`${this.name} is best as of safety measure`)

}
nexon.info();

nexon.suspension = "flexible"

let harrier = new automob(4, "14km/ltr", "harrier");
harrier.airbags = "front & back"

harrier.info()

console.log(harrier)
console.log(nexon)




