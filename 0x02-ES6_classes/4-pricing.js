import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else throw TypeError('Amount must be a number');
    if (currency instanceof Currency) {
      this._currency = currency;
    } else throw TypeError('Currency must be a Currency object');
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else throw TypeError('Amount must be a number');
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else throw TypeError('Currency must be a Currency object');
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
