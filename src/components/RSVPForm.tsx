'use client';
import { answer } from '@/app/actions';
import { Button } from '@/src/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/src/components/ui/form';
import { Input } from '@/src/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/src/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { useToast } from '@/src/hooks/use-toast';
import { FormSchema, FormValues } from '@/src/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="border-2 text-slate-900 bg-white hover:bg-slate-50">
      {pending ? loading : label}
    </Button>
  );
};

// export const RSVPForm2 = () => {
//   const {
//     register,
//     formState: { isValid, errors },
//     setError
//   } = useForm<z.infer<typeof FormSchema>>({
//     mode: 'all',
//     resolver: zodResolver(formSchema)
//   });

//   const [state, formAction] = useFormState<State, FormData>(answer, null);
//   const { pending } = useFormStatus();
//   useEffect(() => {
//     if (!state) {
//       return;
//     }
//     // In case our form action returns `error` we can now `setError`s
//     if (state.status === 'error') {
//       state.errors?.forEach((error) => {
//         setError(error.path as FieldPath<z.infer<typeof FormSchema>>, {
//           message: error.message
//         });
//       });
//     }
//     if (state.status === 'success') {
//       alert(state.message);
//     }
//   }, [state, setError]);
//   return (
//     <form action={formAction}>
//       <div className="space-y-3">
//         <RadioGroup {...register('option')} className="flex space-x-4" name="option">
//           <div className="flex items-center space-x-2">
//             <RadioGroupItem value="coming" id="rg-coming" />
//             <Label htmlFor="rg-coming">Je viens !</Label>
//           </div>
//           <div className="flex items-center space-x-2">
//             <RadioGroupItem value="not-coming" id="rg-not-coming" />
//             <Label htmlFor="rg-not-coming">Je ne viens pas !</Label>
//           </div>
//         </RadioGroup>
//       </div>
//       <input {...register('firstName')} placeholder="First name" />
//       <ErrorMessage name="firstName" errors={errors} />

//       <input {...register('lastName')} placeholder="Last name" />
//       <ErrorMessage name="lastName" errors={errors} />

//       <button type="submit" disabled={pending || !isValid}>
//         Send
//       </button>
//       {pending && <span>Loading...</span>}
//     </form>
//   );
// };

export const RSVPForm = () => {
  const form = useForm<FormValues>({
    mode: 'all',
    resolver: zodResolver(FormSchema),
    defaultValues: {
      option: 'coming',
      adults: '2',
      children: '0',
      restrictions: 'no'
    }
  });
  const { toast } = useToast();

  const onSubmit = async (data: FormValues) => {
    const res = await answer(data);

    toast({
      title: res.status === 'error' ? 'Erreur' : 'Succès',
      description: res.message,
      variant: res.status === 'error' ? 'destructive' : 'default'
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-8">
        <FormField
          control={form.control}
          name="option"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>On compte sur vous ?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap sm:space-x-4"
                  name="option"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="coming" />
                    </FormControl>
                    <FormLabel className="font-normal">Je viendrai !</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="not-coming" />
                    </FormControl>
                    <FormLabel className="font-normal">Je ne pourrai pas</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-1/2">
                <FormLabel>Nom de famille</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="adults"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Adultes</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seul(e) ou accompagné(e) ?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Seul(e)</SelectItem>
                      <SelectItem value="2">2 adultes</SelectItem>
                      <SelectItem value="3">3 adultes</SelectItem>
                      <SelectItem value="4">4 adultes</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="children"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Enfants</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seul(e) ou accompagné(e) ?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="0">Pas d'enfants</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <p className="text-[0.8rem] text-muted-foreground">
            Pour nous aider à prévoir les repas, précisez nous si vous venez accompagnés.
          </p>
        </div>
        <FormField
          control={form.control}
          name="restrictions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Restrictions alimentaires</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seul(e) ou accompagné(e) ?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="no">Pas de restrictions</SelectItem>
                  <SelectItem value="vegetarian">Végétarien</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="carnivore">Carnivore</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton label="Envoyer" loading="Envoi en cours..." />
      </form>
    </Form>
  );
};
