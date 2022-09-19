import React from "react";
import icon from "../../assets/notification-icon.svg";
import axios from "axios";
import "./styles.css";
import { BASE_URL } from "../../utils/request";

type Props = {
  saleID: number;
};

const NotificationButton = ({ saleID }: Props) => {
  const handleClick = (id: number) => {
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {})
  };

  return (
    <div
      className="dsmeta-red-btn-container"
      onClick={() => handleClick(saleID)}
    >
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </div>
  );
};

export default NotificationButton;
