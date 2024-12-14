import React from "react";
import { Form, Input, Checkbox, Button, Textarea } from "@nextui-org/react";
import Swal from "sweetalert2";

export default function App() {
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);
    object.access_key = "f71a6515-3211-4b83-b1fb-135d7a11db9b";
    const json = JSON.stringify(object);

    const newErrors = {};

    if (!/^\d{10}$/.test(object.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (object.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    if (object.terms !== "on") {
      newErrors.terms = "Please accept the terms";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Your response has been sent successfully!",
          icon: "success",
        });
        setSubmitted(object);
      } else {
        Swal.fire({
          title: "Error",
          text: result.message || "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Unable to submit your form. Please try again later.",
        icon: "error",
      });
    }
  }

  return (
    <Form
      className="w-full justify-center items-center space-y-4"
      validationBehavior="native"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 max-w-md">
        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter your name";
            }
            return errors.name;
          }}
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter your phone number";
            }
            if (!/^\d{10}$/.test(validationDetails.value)) {
              return "Please enter a valid 10-digit phone number";
            }
          }}
          label="Phone Number"
          labelPlacement="outside"
          name="phone"
          placeholder="Enter your phone number"
          type="tel"
        />

        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please enter your email";
            }
            if (validationDetails.typeMismatch) {
              return "Please enter a valid email address";
            }
          }}
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Textarea
          className="max-w-xs"
          label="Description"
          isRequired
          labelPlacement="outside"
          name="description"
          placeholder="Enter your description"
        />

        <Checkbox
          isRequired
          classNames={{
            label: "text-small",
          }}
          isInvalid={!!errors.terms}
          name="terms"
          validationBehavior="aria"
          value="on"
          onValueChange={() =>
            setErrors((prev) => ({ ...prev, terms: undefined }))
          }
        >
          I agree to the terms and conditions
        </Checkbox>

        {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )}

        <div className="flex gap-4">
          <Button type="reset" color="danger" variant="light">
            Reset
          </Button>
          <Button className="w-full" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>

      {submitted && console.log("Submitted successfully", submitted)}
    </Form>
  );
}
