import Shimmer from "./Shimmer";
import { RES_IMAGE } from "./utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "./useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState([]);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_CARD + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json);
  // };

  if (resInfo.length === 0) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  console.log(itemCards);

  const { name, avgRating, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo.data.cards[0].card.card.info;
  console.log(resInfo.data.cards[0].card.card.info);

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <h2>{avgRating}</h2>
        <h2>{costForTwoMessage}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <img
          style={{ width: "200px" }}
          src={RES_IMAGE + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div>
        <ul>
          {itemCards.map((res) => {
            return (
              <li key={res.card.info.id}>
                {res.card.info.name} - Price:-{" "}
                {Math.round(res.card.info.price / 100)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
