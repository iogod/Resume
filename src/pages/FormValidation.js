
const validation = (word) => {
  let error = false;
  Object.values(word).map((b, key) => {
    let field = "";
    let ke = Object.keys(word)[key];
    if (b === "" && ke !== "Organization") {
      field = ke + " cannot be empty";
      error = true;
    }
    word[ke] = field;
    return;
  });
  error ? (error = true) : (word = error);
  return word;

  //Think / Compare possible other strategies 
};

export default validation;
