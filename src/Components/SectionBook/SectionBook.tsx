import Book from "../Book/Book";


function SectionBook() {
  
const elements = [];
  
  for (let i = 0; i < 20; i++) {
    elements.push(<Book key={i}/>);
  }
  return (
    <div
    className="max-w-full overflow-x-auto gap-4 p-4 pb-8 flex flex-nowrap"
    >{elements}</div>
  )
}

export default SectionBook

