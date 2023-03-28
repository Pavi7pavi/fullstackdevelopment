import React from "react";
import { useForm } from "react-hook-form";

function Refexample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("submit clicked");
    console.log(errors);
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email?.type === "required" && (
            <p role="alert" className="text-danger">
              Email is required
            </p>
          )}
          {errors.email?.type === "pattern" && (
            <p role="alert" className="text-danger">
              Please provide Valid Email
            </p>
          )}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            {...register("password", {
              required: true,
             
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/i,
                
                message: "Provide Strong password",
              },
            })}
          />
          {errors.password?.type === "required" && (
            <p role="alert" className="text-danger">
              Password is required
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p role="alert" className="text-danger">
              Password is week
            </p>
          )}
        
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
            {...register("checkbox", { required: true })}
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        {errors.checkbox?.type === "required" && (
          <p role="alert" className="text-danger">
            check box is required
          </p>
        )}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Refexample;
