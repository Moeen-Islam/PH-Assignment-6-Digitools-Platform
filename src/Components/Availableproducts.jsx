import Card from "./card";

const Availableproducts = ({ digitalTools }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 mx-10">
        {digitalTools.map((digitalTool) => {
          return <Card key={digitalTool.id} digitalTool={digitalTool}></Card>;
        })}
      </div>
    </div>
  );
};

export default Availableproducts;
