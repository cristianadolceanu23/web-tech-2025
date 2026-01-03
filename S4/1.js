class Stream {
  #value;
  #nextvalue;

  static #count = 0;
  constructor(value, nextValue) {
    this.#value = value;
    this.#nextvalue = nextValue;
    Stream.#count++;
  }

  get value() {
    return this.#value;
  }

  get next() {
    this.#value = this.#nextvalue(this.#value);
    return this.#value;
  }

  static get count() {
    return Stream.#count;
  }
}

class ConstantStream extends Stream {
  constructor(value) {
    super(value, (value) => value);
  }
}

class NextIntegerStream extends Stream {
  constructor() {
    super(0, (value) => value + 1);
  }
}

const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();

for (let i = 0; i < 10; i++) {
  console.log(`constant[${i}] = ${constant.next}`);
  console.log(`nextInteger[${i}] = ${nextInteger.next}`);
}

console.log(Stream.count);

// implementați un tip obiectual care implementează un șir crescător având ca elemente toate numerele pare pornind de la o valoare dată. Constructorul primește valoarea inițială a secvenței. Singura metodă este 'next' care calculează următoarea valoare din șir.

class Streams {
  #value;
  #nextvalue;

  static #count = 0;
  constructor(value, nextValue) {
    this.#value = value;
    this.#nextvalue = nextValue;
    Streams.#count++;
  }

  get value() {
    return this.#value;
  }

  get next() {
    this.#value = this.#nextvalue(this.#value);
    return this.#value;
  }

  static get count() {
    return Streams.#count;
  }
}

// Implementarea ceruta
class EvenNumberStream extends Streams {
  constructor(value) {
    // apelez constructorul clasei parinte
    // functia de update adauga 2 la valoarea curenta pentru a mentine paritatea
    super(value, (val) => val + 2);
  }
}

const evenStream = new EvenNumberStream(0);

for (let i = 0; i < 5; i++) {
  console.log(`evenStream next: ${evenStream.next}`);
}
