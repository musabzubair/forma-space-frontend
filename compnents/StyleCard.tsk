import React from 'react';

interface StyleCardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  selected?: boolean;
  onSelect: () => void;
}

export default function StyleCard({
  title,
  description,
  imageUrl,
  selected = false,
  onSelect,
}: StyleCardProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect();
        }
      }}
      className={`
        cursor-pointer
        rounded-2xl
        border
        p-5
        max-w-xs
        shadow-lg
        transition
        transform
        hover:scale-[1.04]
        hover:shadow-xl
        focus:outline-none
        focus:ring-4
        focus:ring-indigo-400
        focus:ring-opacity-50
        bg-white
        ${selected ? 'border-indigo-600 bg-indigo-50 shadow-indigo-300' : 'border-gray-200'}
      `}
      aria-pressed={selected}
      aria-label={`Select style: ${title}${selected ? ', selected' : ''}`}
    >
      {imageUrl && (
        <div className="relative mb-4 rounded-xl overflow-hidden shadow-sm">
          <img
            src={imageUrl}
            alt={`${title} style preview`}
            className="object-cover w-full h-44"
            loading="lazy"
            draggable={false}
          />
          {selected && (
            <div className="absolute top-2 right-2 bg-indigo-600 rounded-full p-1 shadow-lg">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      )}

      <h3
        className={`text-xl font-semibold mb-1 truncate ${
          selected ? 'text-indigo-700' : 'text-gray-900'
        }`}
        title={title}
      >
        {title}
      </h3>

      {description && (
        <p
          className={`text-sm leading-relaxed ${
            selected ? 'text-indigo-600' : 'text-gray-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

