// @ts-check
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(number, arr) {
  let result = {
    specimenNum: number,
    dna: arr,
    get mutate() {
      console.log(this.dna)
      let ranIndex = Math.floor(Math.random() * 15);
      let getLetter = this.dna[ranIndex];
      if (getLetter === 'A') {
        let smallArr = ['T', 'C', 'G'];
        let smallGetLetter = smallArr[Math.floor(Math.random() * 3)];
        this.dna[ranIndex] = smallGetLetter;
      } else if (getLetter === 'T') {
        let smallArr = ['A', 'C', 'G'];
        let smallGetLetter = smallArr[Math.floor(Math.random() * 3)];
        this.dna[ranIndex] = smallGetLetter;
      } else if (getLetter === 'C') {
        let smallArr = ['A', 'T', 'G'];
        let smallGetLetter = smallArr[Math.floor(Math.random() * 3)];
        this.dna[ranIndex] = smallGetLetter;
      } else if (getLetter === 'G') {
        let smallArr = ['A', 'T', 'C'];
        let smallGetLetter = smallArr[Math.floor(Math.random() * 3)];
        this.dna[ranIndex] = smallGetLetter;
      }
      return this.dna;
    },
    compareDNA(anotherObject) {
      let arr1 = this.dna;
      let arr2 = anotherObject.dna;
      let count = 0
      for (let i = 0; i < arr1.length; i++) {
        let firstParam = arr1[i];
        let secondParam = arr2[i];
        if (firstParam === secondParam) {
          count++
        };
      };
      let getPercent = Math.floor((count * 100) / arr1.length);
      let getNum1 = this.specimenNum;
      let getNum2 = anotherObject.specimenNum;

      return 'specimen #' + getNum1 + ' and specimen #' + getNum2 + ' have ' + getPercent + '% DNA in common'
    }
  };
  return result
};

let getArr = mockUpStrand();
let getArr2 = mockUpStrand();
let randomDNA = pAequorFactory(23, getArr);
let randomDNA2 = pAequorFactory(65, getArr2)
console.log(randomDNA2.compareDNA(randomDNA))





