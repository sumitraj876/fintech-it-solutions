import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ServiceFAQ } from '../../data/serviceDetails';

type FAQListProps = {
  items: ServiceFAQ[];
};

export function FAQList({ items }: FAQListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-graphite/30">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 md:px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
            >
              <span className="font-medium text-offwhite">{item.question}</span>
              <ChevronDown
                size={18}
                className={[
                  'shrink-0 text-offwhite/60 transition-transform duration-200',
                  isOpen ? 'rotate-180 text-pink' : '',
                ].join(' ')}
              />
            </button>
            {isOpen && (
              <div className="px-5 md:px-6 pb-5 text-sm text-offwhite/65 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}