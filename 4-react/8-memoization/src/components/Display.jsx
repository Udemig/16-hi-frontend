import React from "react";

const Display = ({ count, increase }) => {
  console.log("bileşen render oldu");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Arttır (+1)</button>
    </div>
  );
};

/*
 * Bu örnekte kapsayıcı component'ın state'leri her değiştiğinde kapsayıcının render olmasından kaynaklı display component'ı değişen state'i prop olarak almasa bile gereksiz yere render olur
 
 * Bir component'ın aldığı proplar değişmediği müddetçe kapsayıcı component kaynaklı render olması gereksiz render olarak adlandırılır

 * Bu durmun önüne react memo ile geçeriz

 ! eğer primitive (string,number,boolean) yerine referance (object,array,function) bir değer olarak prop geliyorsa react.memo() görevini yapamaz
*/

export default React.memo(Display);
