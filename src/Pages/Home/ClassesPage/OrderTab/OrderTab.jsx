import { useState } from "react";
import ClassCard from "../../../../components/ClassCard/ClassCard";

const OrderTab = ({ items }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, 6);
  

  return (
    <div className="">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {visibleItems.map((item) => (
          <ClassCard key={item.id} item={item} />
        ))}
      </div>
      {items.length > 6 && (
        <button className="btn btn-primary mt-4 mb-4" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See All"}
        </button>
      )}
    </div>
  );
};

export default OrderTab;
