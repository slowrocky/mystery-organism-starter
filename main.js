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

// Factory object 
const pAequorFactory = (num, arr) => {
  let obj = {
    specimenNum: num,
    dna: arr,

    mutate() {
      while (this.dna[0] === 'A') {
        this.dna[0] = returnRandBase();
      }
      return this;
    },

    compareDNA(pAequor) {
      let commonBase = 0;
      let matchDNA = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonBase++;
        }
      }
      matchDNA = Math.floor((100 * commonBase) / this.dna.length);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${matchDNA}% DNA in common`)
    },

    willLikelySurvive() {
      let cBaseCounter = 0;
      let gBaseCounter = 0;
      let cBasePer = 0;
      let gBasePer = 0;

      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'C':
            cBaseCounter++;
            break;
          case 'G':
            gBaseCounter++;
            break;
          default:
            break;
        }
      }
      cbasePer = Math.floor(100 * cBaseCounter / this.dna.length);
      gBasePer = Math.floor(100 * gBaseCounter / this.dna.length);

      if (cbasePer >= 60 || gBasePer >= 60) {
        return true;
      }
      return false;
    },

    complementStrand() {
      let complementStrandDNA = [];

      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A':
            complementStrandDNA.push('T');
            break;
          case 'T':
            complementStrandDNA.push('A');
            break;
          case 'C':
            complementStrandDNA.push('G');
            break;
          case 'G':
            complementStrandDNA.push('C');
            break;
          default:
            break;
        }
      }
      return complementStrandDNA;
    }
  }

  return obj.mutate();
}


// Generate array of set amount specimens, which can survive
const surviveFactory = (number) => {
  let surviveArray = [];
  let counter = 0;

  if (typeof number !== 'number') {
    console.log('bad parameter!');
    return;
  }

  while (counter < number) {
    let specimen = pAequorFactory(counter, mockUpStrand());
    if (specimen.willLikelySurvive()) {
      surviveArray.push(specimen);
      counter++;
    }
  }
  return surviveArray;
}


// Print 30 survive specimen
//console.log(surviveFactory(30));

// ComplementStrand test
/*
let a = pAequorFactory(1,mockUpStrand());
console.log(a);
console.log(a.complementStrand());
*/







