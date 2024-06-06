import "./BusketList.css";
import { useRef, useEffect } from 'react'
import BusketItem from "../BusketItem/BusketItem";
import Button from "../Button/Button";
import { useProducts } from "../../store/useProducts";
import { Link } from "react-router-dom";

export default function BusketList({ totalSum }) {
  const scrollToThis = useRef()

  useEffect(() => {
    if (scrollToThis) {
      const distanceFromTop = scrollToThis.current.offsetTop

      window.scrollTo({
        top: distanceFromTop,
        behavior: 'smooth',
      })
    }
  }, [])

  const busket = useProducts((state) => state.busket);

  return (
    <div ref={scrollToThis} className="busket-list">
      <div id="busket-title_mobile">Корзина</div>
      <div className="busket-list_title">
        <p>Название</p>
        <p style={{ marginLeft: "416px" }}>Цена</p>
        <p style={{ marginLeft: "130px" }}>Количество</p>
        <p style={{ marginLeft: "130px" }}>Итог</p>
      </div>
      <div className="busket-list_items">
        {busket.map((el) => {
          // setTotalCost(totalCost + el.cost)
          const image = el.images?.length ? el.images[0] : '';
          return (
            <BusketItem
              key={el.article}
              id={el.article}
              title={el.title}
              amount={el.amount}
              price={Number(el.cost.split('.')[0])}
              img={image}
              item={el}
              count={el.count}
              color={el.color || []}
            />
          );
        })}
        {busket.length ?
          <div className="list_items-total">
            <Link to={'/katalog'}>
              <Button
                value={"Продолжить покупки"}
                backgroundColor={"#AFBCD1"}
              ></Button>
            </Link>
            <p>{Number(totalSum)}p</p>
          </div>
          :
          <></>
        }
      </div>
    </div>
  );
}
