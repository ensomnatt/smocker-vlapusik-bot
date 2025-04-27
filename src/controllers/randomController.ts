class RandomController {
  static getCgrCount(): number {
    let min = 1;
    let max = 10;

    let result: number =  Math.floor(Math.random() * (max - min + 1)) + min;

    min = 1;
    max = 1000;
    const secondResult: number = Math.floor(Math.random() * (max - min + 1)) + min;

    if (secondResult === 1000) result = 11;

    return result;
  }
}

export default RandomController;
