import Book from "../Book/Book";


function SectionBook() {
  
const elements = [];
  
  for (let i = 0; i < 20; i++) {
    elements.push(<Book key={i}/>);
  }
  return (
    <div
    className="pl-4 bg-stone-100 rounded-lg shadow-lg container overflow-x-scroll gap-4 py-4 pb-8 flex flex-nowrap"
    >{elements}</div>
  )
}

export default SectionBook

