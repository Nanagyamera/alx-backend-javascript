export interface MajorCredits {
  brand: "MajorCredits";
  credits: number;
}

export interface MinorCredits {
  brand: "MinorCredits";
  credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: "MajorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: "MinorCredits",
    credits: subject1.credits + subject2.credits,
  };
}

// Testing the functions
const majorSubject1: MajorCredits = {
  brand: "MajorCredits",
  credits: 4,
};

const majorSubject2: MajorCredits = {
  brand: "MajorCredits",
  credits: 3,
};

const minorSubject1: MinorCredits = {
  brand: "MinorCredits",
  credits: 2,
};

const minorSubject2: MinorCredits = {
  brand: "MinorCredits",
  credits: 1,
};

console.log(sumMajorCredits(majorSubject1, majorSubject2)); // { brand: "MajorCredits", credits: 7 }
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // { brand: "MinorCredits", credits: 3 }
