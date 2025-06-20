"use client";
import { educationItems } from "@/app/utils/background/education";

export default function Education() {
  return (
    <section className="grid grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 px-4 py-8 gap-4 sm:gap-8">
      <div className="sm:sticky sm:top-28 text-name place-self-center order-0 sm:order-1 sm:place-self-start w-full text-emerald-600 dark:text-emerald-400">
        <h3 className="text-center sm:text-right font-[family-name:var(--font-besley)]">Education</h3>
      </div>
      <div className="flex flex-col gap-6 sm:col-span-2">
        {educationItems.map((item) => (
          <div key={item.theme} className="flex flex-col gap-4">
            <div className="hidden text-lg sm:text-xl text-left font-bold w-full border-b-2">
              <h4>{item.theme}</h4>
            </div>
            {item.history.map((edu) => (
              <div key={edu.univ} className="flex flex-col gap-2">
                <h3 className="text-role font-bold text-left">{edu.univ}</h3>
                <div className="flex w-full justify-between">
                  <p className="text-desc text-left font-semibold opacity-95">{edu.prodi}</p>
                  <p className="text-desc text-left font-semibold opacity-95">{edu.date}</p>
                </div>
                <p className="text-desc text-left">{edu.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
