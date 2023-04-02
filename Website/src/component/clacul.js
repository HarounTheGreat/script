const Calcul = (X) => {
  let a = 0;
  let b = 0;
  let c = 0;
  let R = [];
  for (let i = 0; i < X.length; i++) {
    if (X[i].comment_type === "O") {
      a = a + 1;
    } else if (X[i].comment_type === "P") {
      b = b + 1;
    } else {
      c = c + 1;
    }
  }
  R.push(a);
  R.push(b);
  R.push(c);
  return R;
};
export default Calcul;
