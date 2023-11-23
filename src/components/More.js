import Card from "./Card.js";
function More() {
  const More = [
    {
      id: 1,
      // H:"html",
      // P:"Content1",
      I: "a"
    },
    { id: 2, 
        I: "b" },
    { id: 3, 
        I: "c" },
    { id: 4, 
        I: "d" },
    { id: 5, 
        I: "e" },
    { id: 6, 
        I: "f" },
    { id: 7, 
        I: "g" },
    { id: 8, 
        I: "h" },
  ];
  return (
    <>
      {More.map((item) => (
        <Card Skills={item} />
      ))}
    </>
  );
}

export default More;
