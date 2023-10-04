// O(M + N) 
function constructNote(message, letters) {
  const lettersFreq = {};
  const messageFreq = {};

  //build frequency counter for letters
  for (let char of letters) {
    lettersFreq[char] = ++lettersFreq[char] || 1;
  }

  //build frequency counter for message
  for (let char of message) {
    messageFreq[char] = ++messageFreq[char] || 1;
  }

  // final comparison of message frequency with letters frequency
  for (let char in messageFreq) {
    if (!lettersFreq[char]) {
      return false;
    }
    if (messageFreq[char] > lettersFreq[char]) {
      return false;
    }
  }

  return true;
}
