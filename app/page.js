import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaReceipt } from "react-icons/fa";

const Receipt = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-900 text-white p-4">
      <Card className="w-full max-w-lg bg-purple-700 shadow-xl rounded-2xl p-6">
        <div className="text-center text-2xl font-bold flex items-center justify-center gap-2">
          <FaReceipt /> DreamDelivery Receipt
        </div>
        <CardContent>
          <div className="mt-4 border-b border-purple-400 pb-4">
            <p className="text-lg font-semibold">Hotties Factory</p>
            <p>Anya</p>
            <p>Land of Dreams, Łódź, Poland</p>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Bill To:</p>
            <p>Marco</p>
            <p>Paradise, Bragança, Portugal</p>
          </div>
          <div className="mt-6 border-b border-purple-400 pb-4">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-2">Item</th>
                  <th className="pb-2">Qty</th>
                  <th className="pb-2">Rate</th>
                  <th className="pb-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hot Chick - 1.80m, redhead</td>
                  <td>1</td>
                  <td>€200.00</td>
                  <td>€200.00</td>
                </tr>
                <tr>
                  <td>Black Roses & Chocolate Box</td>
                  <td>1</td>
                  <td>€12.00</td>
                  <td>€12.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right">
            <p>Subtotal: €212.00</p>
            <p>Cuteness Tax (100%): €200.00</p>
            <p className="text-xl font-bold">Total: €412.00</p>
          </div>
          <div className="mt-6 border-t border-purple-400 pt-4 text-sm">
            <p><strong>Warning:</strong></p>
            <ul className="list-disc ml-6">
              <li>Excessive exposure may cause addiction, heart flutters, and blushing.</li>
              <li>Product may steal hoodies and claim them as her own.</li>
            </ul>
            <p className="mt-2 font-semibold">Congratulations! You now officially own the 1.80m, redhead, hot chick (Polish edition).</p>
          </div>
          <div className="mt-6 text-sm border-t border-purple-400 pt-4">
            <p><strong>Terms & Conditions:</strong></p>
            <ul className="list-disc ml-6">
              <li>No refunds, exchanges, or replacements – you're stuck with me now.</li>
              <li>Failure to appreciate this product may result in lifelong sadness.</li>
              <li>Product is highly exclusive and not available for resale.</li>
            </ul>
          </div>
          <div className="mt-6 text-center">
            <Button className="bg-purple-500 hover:bg-purple-600">Download Receipt</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Receipt;
