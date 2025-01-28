import React from "react";

const Categories = ({ onCategoryClick }) => {
  const categories = [
    { title: "Jewellery", key: "jewellery", image: "https://5.imimg.com/data5/SELLER/Default/2024/9/449719125/ND/ZG/ZN/26456370/mixcollage-10-sep-2024-12-54-pm-8406.jpg" },
    { title: "Artificial Plants", key: "artificial-plants", image: "https://www.satyamkraft.in/cdn/shop/files/3051_700x700.jpg?v=1712230260" },
    { title: "Lamps", key: "lamps", image: "https://m.media-amazon.com/images/I/71Q6ynubMQL.jpg" },
    { title: "Photo Frames", key: "photo-frames", image: "https://i.etsystatic.com/12821735/r/il/3a5289/3894439177/il_fullxfull.3894439177_gwa0.jpg" },
  ];

  return (
    <div className="bg-[#1c1b4d] py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.key}
              className="bg-[#2b2a6c] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onCategoryClick(category.key)}
            >
              <img
                src={category.image}
                alt={category.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-center text-white">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
