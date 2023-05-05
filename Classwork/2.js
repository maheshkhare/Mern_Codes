function Vehical(model, company, price) {
  this.model = model;
  this.company = company;
  this.price = price;
}

const p1 = new Vehical(2016, "Honda", 12);
console.log(p1);

const p2 = new Vehical(2018, "Hero", 11);
console.log(p2);
