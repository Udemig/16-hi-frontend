import { useEffect, useState } from "react";

const RecipePicker = () => {
  const [index, setIndex] = useState(1);
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // index her değiştiğinde fonksiyon çalıştır (componentDidUpdate)
  useEffect(() => {
    setIsLoading(true);

    fetch(`https://dummyjson.com/recipes/${index}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [index]);

  if (isLoading) return <h1>Yükleniyor...</h1>;

  if (error) return <h1>!HATA!</h1>;

  return (
    <div>
      <h1>Tarif Seçici</h1>

      <div>
        <h2>{recipe.name}</h2>

        <img src={recipe.image} width={300} />

        <h3>Mutfak: {recipe.cuisine}</h3>
        <h3>Zorluk: {recipe.difficulty}</h3>
        <h3>Süre: {recipe.prepTimeMinutes}</h3>
        <h3>Puan: {recipe.rating}</h3>
      </div>

      <div>
        <button disabled={index === 1} onClick={() => setIndex(index - 1)}>
          Önceki
        </button>

        <h1>{index}</h1>

        <button disabled={index === 50} onClick={() => setIndex(index + 1)}>
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default RecipePicker;
