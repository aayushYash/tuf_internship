function sanitize(sentence) {
  // Replace multiple occrance of blank space with single blank space
  // And then replace blank space with '-'
  let arr = sentence.split(" ");
  arr = arr.filter((e) => e != "");
  arr = arr.join("-");
  return arr;
}

exports.sanitize = sanitize;
