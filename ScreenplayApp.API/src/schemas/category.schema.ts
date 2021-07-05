import { object, string } from "yup";

const payload = {
    body: object({
      name: string().required("Category name is required"),
    })
};

export const createCategorySchema = object({
    ...payload,
});
