import React from "react";

const Display = ({ count }) => {
  console.log("bileşen render oldu");
  return <h1>{count}</h1>;
};

/*
 * Bu örnekte kapsayıcı component'ın state'leri her değiştiğinde kapsayıcının render olmasından kaynaklı display component'ı değişen state'i prop olarak almasa bile gereksiz yere render olur
 
 * Bir component'ın aldığı proplar değişmediği müddetçe kapsayıcı component kaynaklı render olması gereksiz render olarak adlandırılır

 * Bu durmun önüne react memo ile geçeriz

 ! todo: useCallback
*/

export default React.memo(Display);
