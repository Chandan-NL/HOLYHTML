import React from "react";
import { Form, Input, Checkbox, Button, Textarea } from "@nextui-org/react";
import Swal from 'sweetalert2'

export default function App() {
    const [submitted, setSubmitted] = React.useState(null);
    const [errors, setErrors] = React.useState({});

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(new FormData(event.currentTarget));


        formData.append("access_key", "f71a6515-3211-4b83-b1fb-135d7a11db9b");



        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();

        if (result.success) {
            // console.log(result);
            Swal.fire({
                title: "Success!",
                text: "Message sent Successfuly!",
                icon: "success"
            });
        }


        const newErrors = {};

        // Username validation
        if (data.name === "admin") {
            newErrors.name = "Nice try! Choose a different username";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);

            return;
        }

        if (data.terms !== "true") {
            setErrors({ terms: "Please accept the terms" });

            return;
        }

        // Clear errors and submit
        setErrors({});
        // setSubmitted(data);
    }

    // const onSubmit = (e: any) => {
    //     e.preventDefault();
    //     const data = Object.fromEntries(new FormData(e.currentTarget));

    //     // Custom validation checks
    //     const newErrors = {};

    //     // Username validation
    //     if (data.name === "admin") {
    //         newErrors.name = "Nice try! Choose a different username";
    //     }

    //     if (Object.keys(newErrors).length > 0) {
    //         setErrors(newErrors);

    //         return;
    //     }

    //     if (data.terms !== "true") {
    //         setErrors({ terms: "Please accept the terms" });

    //         return;
    //     }

    //     // Clear errors and submit
    //     setErrors({});
    //     setSubmitted(data);
    // };

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

                {/* <Input
                    isRequired
                    errorMessage={getPasswordError(password)}
                    isInvalid={getPasswordError(password) !== null}
                    label="Password"
                    labelPlacement="outside"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onValueChange={setPassword}
                /> */}

                {/* <Select
                    isRequired
                    label="Country"
                    labelPlacement="outside"
                    name="country"
                    placeholder="Select country"
                >
                    <SelectItem key="ar" value="ar">
                        Argentina
                    </SelectItem>
                    <SelectItem key="us" value="us">
                        United States
                    </SelectItem>
                    <SelectItem key="ca" value="ca">
                        Canada
                    </SelectItem>
                    <SelectItem key="uk" value="uk">
                        United Kingdom
                    </SelectItem>
                    <SelectItem key="au" value="au">
                        Australia
                    </SelectItem>
                </Select> */}

                <Textarea className="max-w-xs" label="Descreption" isRequired
                    labelPlacement="outside" name="descreption" placeholder="Enter your description" />


                <Checkbox
                    isRequired
                    classNames={{
                        label: "text-small",
                    }}
                    isInvalid={!!errors.terms}
                    name="terms"
                    validationBehavior="aria"
                    value="true"
                    onValueChange={() => setErrors((prev) => ({ ...prev, terms: undefined }))}
                >
                    I agree to the terms and conditions
                </Checkbox>

                {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

                <div className="flex gap-4">
                    <Button type="reset" color="danger" variant="light">
                        Reset
                    </Button>
                    <Button className="w-full" color="primary" type="submit">
                        Submit
                    </Button>
                </div>
            </div>

            {/* {submitted && (
                <div className="text-small text-default-500 mt-4">
                    Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
                </div>
            )} */}
        </Form>
    );
}

