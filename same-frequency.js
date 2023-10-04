
function sameFrequency(int1, int2) {
  let str1 = int1.toString();
  let str2 = int2.toString();

  if (str1.length !== str2.length) return false;

  const int1Freq = {};
  const int2Freq = {};

  for (let num of str1) {
    int1Freq[num] = int1Freq[num] + 1 || 1;
  }

  for (let num of str2) {
    int2Freq[num] = int2Freq[num] + 1 || 1;
  }

  for (let num in int1Freq) {
    if (int1Freq[num] !== int2Freq[num]) return false;
  }
  return true;
}

module.exports = sameFrequency;