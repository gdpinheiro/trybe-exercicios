function verifyPalindrome(string) {
  let letters = string.split("");
  let reverse = letters.reverse();
  let reversed = reverse.join("");
  let isPalindrome = false;

  if (string === reversed) {
    isPalindrome = true;
  }

  return isPalindrome;
}

console.log(verifyPalindrome("arara"));
