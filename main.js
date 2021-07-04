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
      for(let i=0; i < this.dna.length;i++){
          if(this.dna[i] === pAequor.dna[i]){
            commonBase++;
          }
      }
      matchDNA = Math.floor((100*commonBase)/this.dna.length);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${matchDNA}% DNA in common`)

    }
  }

  return obj.mutate();
}
let a = pAequorFactory(1, mockUpStrand());
let b = pAequorFactory(2, mockUpStrand())

console.log(a);
console.log(b);

a.compareDNA(b);







