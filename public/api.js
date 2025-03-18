window.seededRandom = function (seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

window.fetchAPI = function (date) {
  let result = [];
  let random = window.seededRandom(date.getDate()); // Jetzt ist `seededRandom` verfügbar

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

window.submitAPI = function (formData) {
  console.log("Form submitted:", formData);
  return true;
};
