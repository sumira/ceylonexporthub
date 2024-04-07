const LatestProduct = () => {
  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Latestdata.map((d) => (
            <div>
              <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img
                  className="h-48 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Product Image"
                />
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                    Product Name
                  </h2>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                      $20.00
                    </p>
                    <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
                      $25.00
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                      20% off
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Latestdata = [
  {
    id: "1",
    img: "",
    name: "kithul Tricle",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "2",
    img: "",
    name: "Organic Rice suwadal",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "3",
    img: "",
    name: "Jackfruit jam",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "4",
    img: "",
    name: "Coconut cup & kithul spoon",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "5",
    img: "",
    name: "kithul Tricle",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "6",
    img: "",
    name: "Organic Rice suwadal",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "7",
    img: "",
    name: "Jackfruit jam",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
  {
    id: "8",
    img: "",
    name: "Coconut cup & kithul spoon",
    price: "25.00",
    newprice: "20.00",
    discount: "20%",
  },
];
export default LatestProduct;
