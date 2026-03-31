import { toast } from "react-toastify";

const tagStyles = {
  new: "bg-[#DBFCE7] text-[#0A883E]",
  popular: "bg-[#E1E7FF] text-[#4F39F6]",
  "best seller": "bg-[#FEF3C6] text-[#BB4D00]",
};

const Card = ({
  digitalTool,
  activeId,
  setActiveId,
  selectedProducts,
  setSelectedProducts,
}) => {
  const isActive = activeId === digitalTool.id;

  const handleAddToCart = (product) => {
    const exists = selectedProducts.some((item) => item.id === product.id);

    if (exists) {
      toast.warning("⚠️ Already added to cart!");
      return;
    }

    setSelectedProducts((prev) => [...prev, product]);
    toast.success("✅ Added to cart!");
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setActiveId(digitalTool.id);
    handleAddToCart(digitalTool);
  };

  return (
    <div className="w-full h-full flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300">
      {digitalTool.tag && (
        <span
          className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-medium capitalize ${
            tagStyles[digitalTool.tagType?.toLowerCase()] ||
            "bg-gray-100 text-gray-600"
          }`}
        >
          {digitalTool.tag}
        </span>
      )}

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#F9F5FF]">
        {digitalTool.icon && (
          <img
            src={digitalTool.icon}
            alt={digitalTool.name}
            className="h-6 w-6 object-contain"
          />
        )}
      </div>

      <h2 className="text-[22px] font-bold text-gray-900 leading-tight">
        {digitalTool.name}
      </h2>

      <p className="mt-3 text-md text-gray-500 leading-6 min-h-15">
        {digitalTool.description}
      </p>

      <div className="mt-4 flex items-end gap-1">
        <h3 className="text-3xl font-bold text-gray-900">
          ${digitalTool.price}
        </h3>
        <span className="text-sm text-gray-500">/{digitalTool.period}</span>
      </div>

      <ul className="mt-5 space-y-3 flex-1">
        {digitalTool.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-gray-600"
          >
            <span className="mt-0.5 text-green-500">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleClick}
        className={`mt-6 w-full h-11 px-6 rounded-full text-white text-[15px] font-semibold transition-all duration-300 ${
          isActive
            ? "bg-green-500"
            : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90"
        }`}
      >
        {isActive ? "✔ Added to Cart!" : "Buy Now"}
      </button>
    </div>
  );
};

export default Card;
