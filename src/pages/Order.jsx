import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import { getOrder } from "../services/ordersService";

const Order = () => {
  const { id } = useParams();
  useEffect(async () => {
    const res = await getOrder(id);
    console.log(res);
  }, []);
  return (
    <div>
      <Navbar title={"Покупка №" + id} />
      <div className="pt-5 mt-3">
        <ul className="list-group px-2 ">
          <li className="list-group-item text-center p-3 fw-bold">
            Детали покупки
          </li>
          <li className="list-group-item d-flex align-items-center justify-content-between">
            <span>Название: </span>
            <span>SDU Canteen</span>
          </li>
          <li className="list-group-item d-flex align-items-center justify-content-between">
            <span>Адрес: </span>
            <span>Abylaikhana 1/1 Kaskelen</span>
          </li>
          <li className="list-group-item d-flex align-items-center justify-content-between">
            <span>Дата покупки: </span>
            <span>11.03.2022 14:46</span>
          </li>
          <li className="list-group-item text-center p-3 fw-bold">
            Купленные продукты
          </li>

          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://www.barista-ltd.ru/components/com_jshopping/files/img_products/snacks-for-vending-smurfiki-snickers.jpg"
              alt="twbs"
              width="48"
              height="48"
              className="rounded-circle flex-shrink-0 img-fit"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Sneakers</h6>
                <p className="mb-0 opacity-75">Срок годности: 20.03.2023</p>
                <h6 className="mb-0">Цена: 300 тг</h6>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action d-flex gap-3 py-3"
            aria-current="true"
          >
            <img
              src="https://rskrf.ru/upload/iblock/eaa/eaa491a1d6375d3d75bd64cca996e56b.jpg"
              alt="twbs"
              width="48"
              height="48"
              className="rounded-circle flex-shrink-0  img-fit"
            />
            <div className="d-flex gap-2 w-100 justify-content-between">
              <div>
                <h6 className="mb-0">Чудо йогурт</h6>
                <p className="mb-0 opacity-75">Срок годности: 18.05.2022</p>
                <h6 className="mb-0">Цена: 275 тг</h6>
              </div>
            </div>
          </a>
        </ul>
      </div>
      <Navigation />
    </div>
  );
};

export default Order;
