import { useParams } from "react-router-dom";

export const ItemsShow = () => {
  const { itemId } = useParams();

  return <div>ItemsShow: {itemId} for Tenant B</div>;
};
