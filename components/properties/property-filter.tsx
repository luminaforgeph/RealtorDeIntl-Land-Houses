"use client";

import { useMemo, useState } from "react";
import { PropertyCard } from "./property-card";
import { categories, properties } from "@/lib/properties";

export function PropertyFilter() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(() => active === "All" ? properties : properties.filter((item) => item.category === active), [active]);

  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter properties by category">
        {categories.map((category) => <button key={category} className={active === category ? "filter-chip filter-chip--active" : "filter-chip"} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>)}
      </div>
      <p className="results-count" aria-live="polite">{filtered.length} curated {filtered.length === 1 ? "listing" : "listings"}</p>
      {filtered.length ? <div className="property-grid">{filtered.map((property, i) => <PropertyCard key={property.id} property={property} index={i} />)}</div> : <div className="empty-state"><h3>No properties in this collection yet.</h3><p>Please check another category or contact our team for a private search.</p></div>}
    </>
  );
}