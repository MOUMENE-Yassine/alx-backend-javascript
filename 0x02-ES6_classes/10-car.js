export default class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  cloneCar() {
    if (this.constructor.name === 'EVCar') {
      // eslint-disable-next-line no-underscore-dangle
      return new Car(this._brand, this._motor, this._color);
    }
    // eslint-disable-next-line no-underscore-dangle
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
