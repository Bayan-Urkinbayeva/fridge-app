import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Spinner from "../components/Spiner";
import { getOrder } from "../services/ordersService";

const Order = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const res = await getOrder(id);
    const order = res.data.data;
    console.log(order);
    setItems(order.items);
    setDetails({
      fridgeName: order.fridge.name,
      time: order.time,
      locationName: order.fridge.location.name,
    });
    setLoading(false);
  }, []);
  return (
    <div>
      <Navbar title={"Покупка №" + id} />
      {loading ? (
        <div className="mt-20">
          <Spinner />
        </div>
      ) : (
        <div className="pt-5 mt-3">
          <ul className="list-group px-2 ">
            <li className="list-group-item text-center p-3 fw-bold">
              Детали покупки
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
              <span>Название: </span>
              <span>{details.fridgeName}</span>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
              <span>Адрес: </span>
              <span>{details.locationName}</span>
            </li>
            <li className="list-group-item d-flex align-items-center justify-content-between">
              <span>Дата покупки: </span>
              <span>{details.time}</span>
            </li>
            <li className="list-group-item text-center p-3 fw-bold">
              Купленные продукты
            </li>
            {items.map((item) => (
              <div
                href="#"
                className="list-group-item list-group-item-action d-flex gap-3 py-3"
                aria-current="true"
              >
                <img
                  src={item.image}
                  alt=""
                  width="48"
                  height="48"
                  className="rounded-circle flex-shrink-0 img-fit"
                />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">{item.name}</h6>
                    <p className="mb-0 opacity-75">
                      Срок годности: {item.expired_at}
                    </p>
                    <h6 className="mb-0">
                      Цена: {item.cost} тг - {item.pivot.purchased_count}шт
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      )}
      <Navigation />
    </div>
  );
};

export default Order;
