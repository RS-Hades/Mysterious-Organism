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
    },
    willLikelySurvive() {
      let arr = this.dna;
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        let letter = arr[i];
        if (letter === 'C' || letter === 'G'){
          count++;
        }
      }
      if (count >= 9) {
        return true
      }
      return false;
    },
    complementStrand() {
      let takeArr = this.dna;
      console.log(takeArr);
      let complementArr = [];
      for (let i = 0; i < takeArr.length; i++) {
        let knowLetter = takeArr[i];
        if (knowLetter === 'A') {
          complementArr.push('T')
        } else if (knowLetter === 'T') {
          complementArr.push('A')
        } else if (knowLetter === 'C') {
          complementArr.push('G')
        } else if (knowLetter === 'G') {
          complementArr.push('C')
        };
      };
      return complementArr;
    }
  };
  return result
};

function create30Inst () {
  let theArr = []
  let count = 0;
  let numberOfAequor = 0
  while (count <= 30) {
    let getTheStrand = mockUpStrand();
    let runTheFactory = pAequorFactory(numberOfAequor, getTheStrand);
    let isTrue = runTheFactory.willLikelySurvive()
    if (isTrue === true) {
      theArr.push(runTheFactory);
      count++;
      numberOfAequor++;
    };
  };
  return theArr
}

let getArr = mockUpStrand();
let getArr2 = mockUpStrand();
let randomDNA = pAequorFactory(23, getArr);
let randomDNA2 = pAequorFactory(65, getArr2)
console.log(randomDNA.complementStrand())





