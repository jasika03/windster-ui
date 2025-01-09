import React from "react";

const customers = [
  {
    name: "Neil Sims",
    email: "[email protected]",
    amount: "$320",
    img: "src/assets/image1.png",
  },
  {
    name: "Bonnie Green",
    email: "[email protected]",
    amount: "$3467",
    img: "src/assets/image2.png",
  },
  {
    name: "Michael Gough",
    email: "[email protected]",
    amount: "$67",
    img: "src/assets/image3.png",
  },
  {
    name: "Thomes Lean",
    email: "[email protected]",
    amount: "$2367",
    img: "src/assets/image4.png",
  },
  {
    name: "Lana Byrd",
    email: "[email protected]",
    amount: "$367",
    img: "src/assets/image5.png",
  },
];

const channels = [
  {
    name: "Organic Search",
    users: "5,649",
    percentage: "30%",
    color: "bg-blue-500",
  },
  {
    name: "Referral",
    users: "4,025",
    percentage: "24%",
    color: "bg-orange-300",
  },
  {
    name: "Direct",
    users: "3,105",
    percentage: "18%",
    color: "bg-teal-400",
  },
  {
    name: "Social",
    users: "1,251",
    percentage: "12%",
    color: "bg-pink-600",
  },
  {
    name: "Other",
    users: "734",
    percentage: "9%",
    color: "bg-indigo-600",
  },
  {
    name: "Email",
    users: "456",
    percentage: "7%",
    color: "bg-purple-500",
  },
];

function List() {
  return (
    <div className="flex gap-4 pb-4 ">
      <div className="w-1/2 bg-white rounded-xl p-3 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">Latest Customers</h3>
          <button className="text-sky-500 text-sm font-medium hover:bg-stone-100 rounded p-2">
            View all
          </button>
        </div>
        <ul className="p-2 divide-y divide-slate-200">
          {customers.map((customer, index) => (
            <li key={index} className="flex items-center justify-between py-4 ">
              <div className="flex items-center">
                <img className="h-10 w-10 rounded-full" src={customer.img} />
                <div className="ml-3">
                  <p className="text-sm font-medium text-slate-900">
                    {customer.name}
                  </p>
                  <p className="text-sm text-slate-500 ">{customer.email}</p>
                </div>
              </div>
              <p className="text-sm font-bold">{customer.amount}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 bg-white rounded-xl p-3 shadow-md">
        <h3 className="text-xl font-bold mb-4">Acquisition Overview</h3>
        <table className="items-center w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left pl-4 py-3 text-xs font-medium text-slate-800">TOP CHANNELS</th>
              <th className="text-center pl-20 text-xs font-medium text-slate-800">USERS</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {channels.map((channel, index) => (
              <tr key={index}>
                <td className="text-left pl-4 py-4 text-slate-500 text-sm">{channel.name}</td>
                <td className="text-center pl-20 text-xs font-medium">{channel.users}</td>
                <td className="text-right">
                  <div className="flex items-center gap-2">
                    <div className=" pl-24 text-slate-500 text-xs font-medium">{channel.percentage}</div>
                    <div className="relative w-24 h-2 bg-gray-200 rounded-sm">
                      <div
                        className={`absolute top-0 left-0 h-2 rounded-sm ${channel.color}`}
                        style={{ width: `${channel.percentage}` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
