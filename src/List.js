import Item from "./Item";
const style = {
  color: "red",
};

function List({ list }) {
  return (
    <>
      <ul style={style}>
        {list.map((story) => {
          return <Item item={story} key={story.objectID} />;
        })}
      </ul>
    </>
  );
}
export default List;

