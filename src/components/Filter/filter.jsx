import React from "react";
import { HeaderFilter, FilterInput, FilterLabel } from "./Filter.styled";

const Filter = ({ filter, onChange }) => {
  return (
    <div>
      <HeaderFilter>Find contacts by name</HeaderFilter>

      <FilterLabel>
        <FilterInput
          name="filter"
          type="text"
          value={filter}
          onChange={onChange}
        />
      </FilterLabel>
    </div>
  );
};

export default Filter;
