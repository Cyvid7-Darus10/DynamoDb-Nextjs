import React, { FunctionComponent, useState, useEffect } from "react";

const Table: FunctionComponent<{
  filteredData: any[];
}> = ({ filteredData }) => {
  return (
    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden bg-white '>
      <table className='min-w-full leading-normal'>
        <thead>
          <tr>
            <th className='px-5 py-3 w-5 border-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600'>
              ID
            </th>
            <th className='px-5 py-3 border-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600'>
              URL
            </th>
            <th className='px-5 py-3 w-10 border-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600'>
              Status
            </th>
            <th className='px-5 py-3 w-10 border-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, key) => (
            <tr key={key}>
              <td className='px-5 py-5 border border-gray-200 text-sm'>
                <div className='flex items-center overflow-hidden'>
                  <div className='ml-3 flex-wrap'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {key + 1}
                    </p>
                  </div>
                </div>
              </td>
              <td className='px-5 py-5 border border-gray-200 text-sm'>
                <div className='flex items-center overflow-hidden'>
                  <div className='ml-3 flex-wrap w-60'>
                    <p className='text-gray-900 whitespace-no-wrap'>
                      {item.link}
                    </p>
                  </div>
                </div>
              </td>
              <td className='px-5 py-5 border border-gray-200 text-sm'>
                <p
                  className={`text-gray-900 font-semibold whitespace-no-wrap ${
                    item.isFilled ? "text-green-900" : "text-red-900"
                  }`}
                >
                  {item.isFilled ? "Filled" : "Not Filled"}
                </p>
              </td>
              <td className='px-5 py-5 border border-gray-200'>
                <div className='flex item-center justify-center w-32'>
                  <button
                    className='relative inline-block px-3 py-1 font-semibold text-white w-20 bg-green-900 mr-1 leading-tight'
                    onClick={() => console.log("edit")}
                  >
                    Edit
                  </button>
                  <button
                    className='relative inline-block px-3 py-1 font-semibold text-white w-20 bg-red-900 ml-1 leading-tight'
                    onClick={() => console.log("delete")}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
