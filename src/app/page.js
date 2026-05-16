import { getData } from "@/db/data";
import React from "react";

const Home = async () => {
  const cursor = await getData();

  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {cursor.map((item) => (
          <div
            key={item._id}
            className="text-white bg-linear-to-r from-zinc-950 via-20% to-slate-700 p-6 rounded-3xl cursor-pointer hover:scale-105 duration-500"
          >
            <h1> {item._id} </h1>

            {item.title}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
