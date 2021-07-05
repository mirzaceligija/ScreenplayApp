import { object, string, array, number, date } from "yup";

const payload = {
    body: object({
      title: string().required("Title is required"),
      description: string().required("Description is required"),
      releaseDate: date().required("Release date is required"),
      category: string().required("Category is required"),
      photoUrl: string().required("Photo URL is required"),
      casting: array().of( 
        object().shape({
          actor: string().required("Actors are required"),
          role: string().notRequired()
        })
      ),
      rate: number().notRequired(),
      votes: number().notRequired()
    }),
};

const params = {
    params: object({
      id: string().required("ID is required"),
    }),
};

export const createScreenplaySchema = object({
    ...payload,
});



const updatePayload = {
  body: object({
    rate: number().required("Rate is required")
  })
}

export const updateScreenplaySchema = object({
    ...params,
    ...updatePayload,
});
