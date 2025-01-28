import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const SellerDashboard = () => {
  const orderSummaryData = {
    labels: ['Total Orders', 'Delivered Orders', 'Pending Orders'],
    datasets: [
      {
        label: '# of Orders',
        data: [25, 18, 7],
        backgroundColor: ['#4CAF50', '#2196F3', '#FF9800'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gray-800 p-4">
          <nav className="space-y-4">
            <a href="#" className="flex items-center space-x-2 hover:text-gray-400">
              <span>📊</span>
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-400">
              <span>📦</span>
              <span>Orders</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-gray-400">
              <span>🛍️</span>
              <span>Products</span>
            </a>
          </nav>
        </aside>

        {/* Dashboard Content */}
        <main className="w-3/4 p-6">
          {/* Order Summary */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded text-center">
              <h2 className="text-lg font-semibold">Total Orders</h2>
              <p className="text-2xl font-bold">25</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <h2 className="text-lg font-semibold">Delivered Orders</h2>
              <p className="text-2xl font-bold">18</p>
            </div>
            <div className="bg-gray-800 p-4 rounded text-center">
              <h2 className="text-lg font-semibold">Pending Orders</h2>
              <p className="text-2xl font-bold">7</p>
            </div>
          </section>

          {/* Recent Orders */}
          <section className="bg-gray-800 p-6 rounded">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-gray-700 py-2">Order ID</th>
                  <th className="border-b border-gray-700 py-2">Product</th>
                  <th className="border-b border-gray-700 py-2">Price</th>
                  <th className="border-b border-gray-700 py-2">Status</th>
                  <th className="border-b border-gray-700 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">#12345</td>
                  <td className="py-2">Handmade Lamp</td>
                  <td className="py-2">₹2500</td>
                  <td className="py-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded">Delivered</span>
                  </td>
                  <td className="py-2">
                    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">#12346</td>
                  <td className="py-2">Jewellery Set</td>
                  <td className="py-2">₹1500</td>
                  <td className="py-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded">Not Delivered</span>
                  </td>
                  <td className="py-2">
                    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2">#12347</td>
                  <td className="py-2">Photo Frame</td>
                  <td className="py-2">₹1200</td>
                  <td className="py-2">
                    <span className="bg-green-500 text-white px-2 py-1 rounded">Delivered</span>
                  </td>
                  <td className="py-2">
                    <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default SellerDashboard;
