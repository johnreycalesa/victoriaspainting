import React from "react";

const serviceAreas = [
  "Morristown",
  "Denville",
  "Washington",
  "Morris Plains",
  "Lake Hiawatha",
  "Mountain Lakes",
  "Randolph",
  "Parsippany",
  "Cedar Knolls",
  "Mendham",
  "Rockaway",
  "Mount Tabor",
  "Chester",
  "Dover",
  "Long Valley",
  "Hackettstown",
  "Flanders",
  "Succasunna",
  "Budd Lake",
  "Washington Township"
];

export function ServiceAreasList() {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-brand-lg hover:shadow-2xl transition-all duration-500 bg-white p-8 md:p-10">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-2">Coverage Details</h3>
          <p className="text-gray-600">Complete list of service areas</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform duration-200"
            >
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary group-hover/item:scale-125 transition-transform duration-200"></div>
              <span className="text-gray-700 font-medium group-hover/item:text-primary transition-colors duration-200">
                {area}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500 italic">
            * And surrounding areas in Morris County and beyond
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
