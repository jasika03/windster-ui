import React from "react";

function List() {
  return (
    <>
      <div className="flex gap-4 pb-4">
        <div className="w-1/2 bg-white  rounded-xl p-3 shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Latest Customers</h3>
            <button className="text-sky-500 text-sm font-medium hover:bg-stone-100 rounded p-2">
              View all
            </button>
          </div>
          <div>
            <ul role="list" class="p-2 divide-y divide-slate-200">
              <li class="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div className="flex items-center">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="windster-ui/windster/src/assets/image1.png"
                    alt="img"
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Neil Sims</p>
                    <p class="text-sm text-slate-500 truncate">
                      [email protected]
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">$320</p>
              </li>
              <li class="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div className="flex items-center">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="windster-ui/windster/src/assets/image1.png"
                    alt="img"
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Neil Sims</p>
                    <p class="text-sm text-slate-500 truncate">
                      [email protected]
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">$320</p>
              </li>
              <li class="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div className="flex items-center">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="windster-ui/windster/src/assets/image1.png"
                    alt="img"
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Neil Sims</p>
                    <p class="text-sm text-slate-500 truncate">
                      [email protected]
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">$320</p>
              </li>
              <li class="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div className="flex items-center">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="windster-ui/windster/src/assets/image1.png"
                    alt="img"
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Neil Sims</p>
                    <p class="text-sm text-slate-500 truncate">
                      [email protected]
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">$320</p>
              </li>
              <li class="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div className="flex items-center">
                  <img
                    class="h-10 w-10 rounded-full"
                    src="windster-ui/windster/src/assets/image1.png"
                    alt="img"
                  />
                  <div class="ml-3 overflow-hidden">
                    <p class="text-sm font-medium text-slate-900">Neil Sims</p>
                    <p class="text-sm text-slate-500 truncate">
                      [email protected]
                    </p>
                  </div>
                </div>
                <p className="text-sm font-bold">$320</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-xl p-3 shadow-md">
          <h3 className="text-xl font-bold">Acquisition Overview</h3>
          <div>
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="">
                  Top Channels
                </th>
                <th className="">
                  Users
                </th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              {/* {#each people as person} */}
              {/* <!-- Use a white background for odd rows, and slate-50 for even rows --> */}
              <tr class="odd:bg-white even:bg-slate-50">
                <td>hi</td>
                <td>ha</td>
                <td>hoi</td>
              </tr>
              {/* {/each} */}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
}

export default List;
