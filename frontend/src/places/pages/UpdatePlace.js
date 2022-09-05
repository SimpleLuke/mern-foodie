import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElement/Card";
import LoadingSpinner from "../../shared/components/UIElement/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElement/ErrorModal";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceForm.css";
import { useHttpClient } from "../../shared/hooks/http-hook";

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const { isLoading, error, sendRequest, errorHandler } = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const [formState, inputHandler, setDataHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`
        );
        setLoadedPlace(data.place);

        setDataHandler({
          title: {
            value: data.place.title,
            isValid: true,
          },
          description: {
            value: data.place.desceription,
            isValid: true,
          },
        });
      } catch (err) {}
    };
    fetchPlace();
  }, [placeId, sendRequest, setDataHandler]);

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedPlace && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/places/${placeId}`,
        "PATCH",
        {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authCtx.token,
        },
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        })
      );
      history.push(`/${authCtx.userId}/places`);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={errorHandler} />
      {!isLoading && loadedPlace && (
        <form onSubmit={formSubmitHandler} className="place-form">
          <Input
            id="title"
            element="input"
            type="text"
            initialValue={loadedPlace.title}
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter valid title."
            onInput={inputHandler}
            initialValid={true}
          />
          <Input
            id="description"
            element="textarea"
            initialValue={loadedPlace.description}
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter valid description (min. 5 characters)."
            onInput={inputHandler}
            initialValid={true}
          />
          <Button type="submit" disabled={!formState.isValid}>
            Update Place
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default UpdatePlace;
