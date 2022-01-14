const mtk = 89;
const bahasaIndonesia = 89;
const bahasaInggris = 89;
const ipa = 89;
let grade = "";
let average = 0;

if (mtk != undefined && mtk != null) {
  if (bahasaIndonesia != undefined && bahasaIndonesia != null) {
    if (bahasaInggris != undefined && bahasaInggris != null) {
      if (ipa != undefined && ipa != null) {
        average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
        if (average >= 0 && average < 60) {
          grade = "E";
        } else if (average < 70) {
          grade = "D";
        } else if (average < 80) {
          grade = "C";
        } else if (average < 90) {
          grade = "B";
        } else if (average <= 100) {
          grade = "A";
        } else {
          grade = "None";
        }
      }
    }
  }
}

const output = `    Rata-rata = ${average}
    Grade = ${grade}`;

console.log(output);
