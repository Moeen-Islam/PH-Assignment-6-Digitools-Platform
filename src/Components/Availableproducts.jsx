import Card from "./card";
import { useState } from "react";

const Availableproducts = ({
  digitalTools,
  selectedProducts,
  setSelectedProducts,
}) => {
  const [activeId, setActiveId] = useState(null);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 mx-10">
        {digitalTools.map((digitalTool) => {
          return (
            <Card
              key={digitalTool.id}
              activeId={activeId}
              setActiveId={setActiveId}
              digitalTool={digitalTool}
              selectedProducts={selectedProducts}
             setSelectedProducts={setSelectedProducts}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Availableproducts;
