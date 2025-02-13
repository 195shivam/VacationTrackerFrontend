import { z } from 'zod';

const formSchema = z.object({
  password: z.string().min(4, 'Invalid Password'),
  email: z.string().email('Please enter a valid email address'),
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
