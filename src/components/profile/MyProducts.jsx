// import React from "react";
import emptyProduct from "../../assets/images/emptyProduct.svg";
import { useGetUserProductsQuery } from "../../app/api/profile";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidEdit } from "react-icons/bi";

function MyProducts() {
  const dataUser = JSON.parse(localStorage.getItem("userData"));
  console.log("id", dataUser?.data?._id);
  const id = dataUser?.data?._id;
  const token = dataUser.token;
  console.log(token);
  const { data: userProducts, error } = useGetUserProductsQuery(id, token);

  if (error) {
    console.error("Error fetching user products:", error);
  }
  console.log("donate", userProducts);
  const dataFake = [
    {
      id: 1,
      name: "name",
      image:
        "https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      barwar: "10.10.2023",
    },
    {
      id: 2,
      name: "name",
      image:
        "https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      barwar: "10.10.2023",
    },
    {
      id: 3,
      name: "name",
      image:
        "https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      barwar: "10.10.2023",
    },
    {
      id: 4,
      name: "name",
      image:
        "https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      barwar: "10.10.2023",
    },
  ];
  return (
    <div className="lg:mx-36 pl-40 text-gray-800 w-full">
      {userProducts?.data?.length === 0 ? (
        <div className="flex justify-center items-center w-full">
          {" "}
          <img src={emptyProduct} alt="empty product" className="h-[500px]" />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {dataFake.map((data) => {
            return (
              <div
                className="flex flex-col w-full justify-start relative overflow-hidden"
                key={data.id}
              >
                <div className="flex justify-between items-center p-1">
                  <div className="flex flex-col">
                    <div className="font-bold">{data.name}</div>
                    <div>{data.barwar}</div>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <BiSolidEdit className="w-6 h-6 text-green" />
                    </div>
                    <div className="ml-1">
                      <RiDeleteBin6Line className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                </div>
                <img
                  src={data.image}
                  className="mt-5 border overflow-hidden  flex object-cover w-full h-60 hover:scale-110 relative hover:duration-500 duration-500"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MyProducts;
