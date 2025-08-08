import React, { useState } from 'react';
import FrontendPagination from './FrontendPagination';
import OffsetPagination from './OffsetPagination';

const Paginations = () => {
  const [type, setType] = useState('frontend'); // default

  return (
    <div className="p-4">
      {/* Selection Dropdown */}
      <div className="mb-4 flex justify-center">
        <label className="mr-2 font-semibold">Select Pagination Type:</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border px-2 py-1 rounded"
        >
          <option value="frontend">Frontend Pagination</option>
          <option value="offset">Offset Pagination</option>
        </select>
      </div>

      {/* Render Based on Selection */}
      {type === 'frontend' ? <FrontendPagination /> : <OffsetPagination />}
    </div>
  );
};

export default Paginations;