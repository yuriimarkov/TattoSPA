import CardSection from "../../Cards/CardsSection";

export default function Catalog({ data, addToBasket }) {
  const products = data?.products;
  return (
    <CardSection products={products} addToBasket={addToBasket} />
  )
}
