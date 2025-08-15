import React from 'react';

const Preferences = ({ step, stepData, setFormData, errors }) => { // ✅ added errors prop
  const handleClick = (field) => {
    if (stepData.theme === field) return;
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        data: {
          theme: field,
        },
      },
    }));
  };

  return (
    <div className='flex flex-col gap-3'>
      <label className='flex gap-2'>
        <input
          type='radio'
          onChange={() => handleClick('Light')}
          checked={stepData.theme === 'Light'}
        />
        Light
      </label>
      <label className='flex gap-2'>
        <input
          type='radio'
          onChange={() => handleClick('Dark')}
          checked={stepData.theme === 'Dark'}
        />
        Dark
      </label>
      {errors?.theme && <p className='text-red-500 text-sm'>{errors.theme}</p>}
    </div>
  );
};

export default Preferences;
