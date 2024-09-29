'use server';
import { EmailTemplate } from '@/src/components/Email/template';
import { FormValues } from '@/src/lib/validation';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// 'use server';
// import { formSchema } from '@/src/lib/validation';
// import { ZodError } from 'zod';

export type AnswerResponse = {
  status: 'success' | 'error';
  message: string;
};

//   | null;

// export const answer = async (prevState: State | null, data: FormData): Promise<State> => {
//   try {
//     // Artificial delay; don't forget to remove that!
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     // Validate our data
//     const { option, firstName, lastName } = formSchema.parse(data);
//     console.table(formSchema.parse(data));
//     return {
//       status: 'success',
//       message: `Welcome, ${firstName} ${lastName ? lastName : ''}!`
//     };o;
//   } catch (e) {
//     // In case of a ZodError (caused by our validation) we're adding issues to our response
//     if (e instanceof ZodError) {
//       return {
//         status: 'error',
//         message: 'Invalid form data',
//         errors: e.issues.map((issue) => ({
//           path: issue.path.join('.'),
//           message: `Server validation: ${issue.message}`
//         }))
//       };
//     }
//     return {
//       status: 'error',
//       message: 'Something went wrong. Please try again.'
//     };
//   }
// };

export const answer = async (answers: FormValues): Promise<AnswerResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  console.table(answers);

  try {
    const { error } = await resend.emails.send({
      from: 'Baptiste <hello@bfamchon.dev>',
      to: ['bfamchon@gmail.com'],
      subject: `Mariage - Réponse de ${answers.firstName}`,
      react: EmailTemplate(answers)
    });

    if (error) {
      throw error;
    }

    return {
      status: 'success',
      message: `Votre réponse est envoyée !`
    };
  } catch (error) {
    return {
      status: 'error',
      message: "Quelque-chose s'est mal passé, merci d'envoyer votre réponse à bfamchon@gmail.com"
    };
  }
};
