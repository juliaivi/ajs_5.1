export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
    this.attack = 0;
    this.defence = 0;
    const listTypes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Undead',
      'Zombie',
      'Daemon',
    ];

    if (!listTypes.includes(type)) {
      throw new Error('Такого персонажа нет!');
    }
  }

  set name(value) {
    if (value.length < 2) {
      throw new Error('Имя очень короткое!');
    }
    if (value.length > 10) {
      throw new Error('Имя слишком длинное!');
    }
    if (typeof value !== 'string') {
      throw new Error('Имя должно быть строкой! Неверный тип данных!');
    }

    this._name = value;
  }

  get name() {
    return this._name;
  }

  set type(value) {
    if (typeof value !== 'string') {
      throw new Error('Тип персонажа должен быть строкой! Неверный тип данных!');
    }

    this._type = value;
  }

  get type() {
    return this._type;
  }
}
