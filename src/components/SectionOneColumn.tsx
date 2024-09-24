import { dancing } from '@/app/fonts';

export const SectionOneColumn = (props: { id: string; title: string; children: React.ReactNode }) => {
  return (
    <section className="m-auto space-y-6" id={props.id}>
      <h2 className={`text-5xl text-center text-slate-800 ${dancing.className}`}>{props.title}</h2>
      <hr className="max-w-[40px] w-full m-auto border-0 rounded-md bg-[#ffe9e9] h-[2px]" />
      {props.children}
    </section>
  );
};
