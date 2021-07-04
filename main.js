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
const pAequorFactory = (num,arr) => {
  let obj = {
    specimenNum: num,
    dna: arr,

    mutate(){
      while(this.dna[0] === 'A'){
        this.dna[0] = returnRandBase();
      }
    }
  }
  obj.mutate();
  return obj;
}

console.log(pAequorFactory(1,mockUpStrand()));







