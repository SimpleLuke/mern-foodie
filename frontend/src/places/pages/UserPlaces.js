import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";

import PlaceList from "../components/PlaceList";
import LoadingSpinner from "../../shared/components/UIElement/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElement/ErrorModal";

const UserPlaces = () => {
  const { isLoading, error, sendRequest, errorHandler } = useHttpClient();
  const [userPlaces, setUserPlaces] = useState();
  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );

        setUserPlaces(data.userPlaces);
      } catch (err) {}
    };
    fetchPlaces();
  }, [sendRequest, userId]);

  const onDelete = (deletePlaceId) => {
    setUserPlaces((prev) => prev.filter((place) => place.id !== deletePlaceId));
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && userPlaces && (
        <PlaceList items={userPlaces} onDelete={onDelete} />
      )}
    </React.Fragment>
  );
};

export default UserPlaces;
