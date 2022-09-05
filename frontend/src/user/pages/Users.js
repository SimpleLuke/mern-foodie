import UsersList from "../components/UsersList";
import Hero from "../components/Hero";
import LoadingSpinner from "../../shared/components/UIElement/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElement/ErrorModal";
import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
  const [loadedUsers, setloadedUsers] = useState([]);
  const { isLoading, error, sendRequest, errorHandler } = useHttpClient();

  useEffect(() => {
    const loadingUsers = async () => {
      try {
        const data = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/users"
        );

        setloadedUsers(data.users);
      } catch (err) {}
    };
    loadingUsers();
  }, [sendRequest]);

  return (
    <React.Fragment>
      {/* <Hero /> */}
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {<ErrorModal error={error} onClear={errorHandler} />}
      <UsersList items={loadedUsers} />
      {/* {!isLoading && userList && <UsersList items={userList} />} */}
    </React.Fragment>
  );
};

export default Users;
