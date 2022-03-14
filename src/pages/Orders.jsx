import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getOrders } from "../services/ordersService";
const Orders = () => {
    useEffect( async ()=>{
        const res = await getOrders();
        console.log(res);
    }, [])
  return (
    <div>
      <Navbar title={"Покупки"} />
      <div className="p-2 pt-5 mt-3">
        <div className="list-group">
          <Link
            to={`/orders/${"1454544"}`}
            href="#"
            className="list-group-item list-group-item-action p-3"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 ">SDU Canteen</h5>
              <small className="text-muted">#456464654</small>
            </div>
            <p className="mb-1">Время покупки: 11.03.2022 13:46</p>
            <p className="mb-1">Цена: 540 тг</p>
          </Link>
          <Link
            to="/orders/456464654"
            href="#"
            className="list-group-item list-group-item-action p-3"
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">SDU Library</h5>
              <small className="text-muted">#456464654</small>
            </div>
            <p className="mb-1">Время покупки: 11.03.2022 13:46</p>
            <p className="mb-1">Цена: 540 тг</p>
          </Link>
        </div>
      </div>
      <Navigation />
    </div>
  );
};
export default Orders;
