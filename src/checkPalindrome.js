const checkPalindrome = (date) => {
  let arrDate = date.split("-");
  let arr = [
    arrDate[0] + arrDate[1] + arrDate[2],
    arrDate[0].slice(-2) + arrDate[1] + arrDate[2],
    arrDate[1] + arrDate[2] + arrDate[0].slice(-2),
    arrDate[2] + arrDate[1] + arrDate[0]
  ];
  let palindrome = true;
  let value = [true, true, true, true];

  for (let i = 0; i < 4; i++) {
    let start = 0;
    let end = arr[i].length - 1;

    while (start <= end) {
      if (arr[i][start] !== arr[i][end]) {
        palindrome = false;
        value[i] = palindrome;
        break;
      } else {
        start += 1;
        end -= 1;
      }
    }
  }

  if (value.includes(true)) {
    return [true, value, arr, value.indexOf(true)];
  } else {
    return [false, value, arr];
  }
};

export default checkPalindrome;
