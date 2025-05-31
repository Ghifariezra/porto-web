import { experienceItems } from "@/app/utils/experience";

export default function Experience() {
  return (
    <section className="grid grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 px-4 py-8 gap-4 sm:gap-8">
      <div className="sm:sticky sm:top-28 text-name place-self-center sm:place-self-start w-1/2 sm:w-full text-sky-600 dark:text-sky-400">
        <h3>Work Experience</h3>
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2">
        {experienceItems.map((item) => (
          <div key={item.role} className="flex flex-col gap-2">
            <h3 className="text-role font-bold text-left">{item.role}</h3>
            <div className="flex w-full justify-between gap-2">
              <p className="text-desc text-left font-semibold opacity-95">{item.company}</p>
              <p className="text-desc text-left font-semibold opacity-95">{item.date}</p>
            </div>
            <p className="text-desc text-left">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
