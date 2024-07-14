import Card from "./Card"
import data from "../data/data"

export default function Main() {
  const cards = data.map((currentItem) => {
    return <Card key={data.id} item={currentItem} />
  })
  return <main className="main">{cards}</main>
}
