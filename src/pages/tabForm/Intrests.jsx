import React from 'react';

const Intrests = ({ step, stepData, setFormData, errors }) => { // ✅ added errors prop
  const handleClick = (field) => {
    const isPresent = stepData.includes(field);
    if (isPresent) {
      setFormData((prev) => ({
        ...prev,
        [step]: {
          ...prev[step],
          data: stepData.filter((sd) => sd !== field),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [step]: {
          ...prev[step],
          data: [...stepData, field],
        },
      }));
    }
  };

  return (
    <div className='flex flex-col gap-3'>
      <label className='flex gap-2'>
        <input
          type='checkbox'
          name='Coding'
          checked={stepData.includes('Coding')}
          onChange={() => handleClick('Coding')}
        />
        Coding
      </label>
      <label className='flex gap-2'>
        <input
          type='checkbox'
          name='Reading'
          checked={stepData.includes('Reading')}
          onChange={() => handleClick('Reading')}
        />
        Reading
      </label>
      <label className='flex gap-2'>
        <input
          type='checkbox'
          name='Writing'
          checked={stepData.includes('Writing')}
          onChange={() => handleClick('Writing')}
        />
        Writing
      </label>
      {errors?.general && <p className='text-red-500 text-sm'>{errors.general}</p>}
    </div>
  );
};

export default Intrests;