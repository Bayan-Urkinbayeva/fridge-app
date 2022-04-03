import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrders } from "../services/ordersService";
import Spinner from "../components/Spiner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const res = await getOrders();
    setLoading(false);
    setOrders(res.data);
  }, []);
  return (
    <div>
      <Navbar title={"Покупки"} />
      <div className="p-2 pt-16 mt-3">
        {loading && <Spinner />}
        <div className="flex flex-col">
          {orders.length == 0 && !loading && (
            <p className="text-center">Пока нет покупок!</p>
          )}
          {orders.map((order) => (
            <Link
              to={`/orders/${order.id}`}
              href="#"
              className="border rounded-md px-4 py-3"
              key={order.id}
            >
              <div className="flex w-full justify-between mb-2">
                <h5 className="text-lg capitalize font-medium">
                  {order.fridge_name}
                </h5>
                <small className="text-gray-500">#{order.id}</small>
              </div>
              <p className="text-sm">Время покупки: {order.time}</p>
              <p className="text-sm">Цена: {order.purchased_price} тг</p>
            </Link>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
};
export default Orders;
