import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const formSchema = zfd.formData({
  option: zfd.text(z.string()),
  firstName: zfd.text(z.string().min(2, 'Too short').max(20, 'Too long')),
  lastName: zfd.text(z.string().min(2, 'Too short').max(20, 'Too long').optional())
});

export const FormSchema = z.object({
  option: z.enum(['coming', 'not-coming'], {
    required_error: "T'es là ou t'es pas là ?!"
  }),
  firstName: z
    .string({
      required_error: 'Vous devez renseigner votre prénom.'
    })
    .trim()
    .min(2, 'Minimum 2 caractères'),
  lastName: z
    .string({
      required_error: 'Vous devez renseigner votre nom.'
    })
    .trim()
    .min(2, 'Minimum 2 caractères'),
  adults: z.string(),
  children: z.string(),
  restrictions: z.enum(['no', 'vegetarian', 'vegan', 'carnivore'])
});

export type FormValues = z.infer<typeof FormSchema>;
