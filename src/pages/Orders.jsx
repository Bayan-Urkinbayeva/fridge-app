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
    setOrders(res.data.data);
  }, []);
  return (
    <div>
      <Navbar title={"Покупки"} />
      <div className="p-2 pt-5 mt-3">
        {loading && <Spinner />}
        <div className="list-group">
          {orders.length == 0 && !loading && (
            <p className="text-center">Пока нет покупок!</p>
          )}
          {orders.map((order) => (
            <Link
              to={`/orders/${order.id}`}
              href="#"
              className="list-group-item list-group-item-action p-3"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1 ">{order.fridge.name}</h5>
                <small className="text-muted">#{order.id}</small>
              </div>
              <p className="mb-1">Время покупки: {order.time}</p>
              <p className="mb-1">Цена: {order.purchased_price} тг</p>
            </Link>
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
};
export default Orders;
