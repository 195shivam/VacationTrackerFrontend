import { z } from 'zod';

const formSchema = z.object({
  eventName: z.string().min(3, 'First name is required'),

  eventDate: z.string().min(3, 'Date Of Birth is required'),
});

export function parceFormData(formData) {
  try {
    formSchema.parse(formData);
    return false;
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errorObj = {};
      err.errors.forEach((error) => {
        errorObj[error.path[0]] = error.message;
      });
      return errorObj;
    }
  }
}
