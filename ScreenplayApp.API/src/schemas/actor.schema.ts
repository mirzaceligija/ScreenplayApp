import { object, string } from "yup";

const payload = {
    body: object({
      firstName: string().required("First name is required"),
      lastName: string().required("Last name is required"),
    })
};

export const createActorSchema = object({
    ...payload,
});
