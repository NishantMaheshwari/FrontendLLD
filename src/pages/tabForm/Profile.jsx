import React from 'react';

const Profile = ({ step, stepData, setFormData, errors }) => { // ✅ added errors prop
  const { firstName, lastName, age, email } = stepData;

  const handleTextChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [step]: {
        ...prev[step],
        data: {
          ...prev[step].data,
          [field]: field === 'age' ? Number(value) : value, // ✅ convert age to number
        },
      },
    }));
  };

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <label> First Name : </label>
        <input
          type='text'
          value={firstName}
          className='border border-black p-2'
          onChange={(e) => handleTextChange('firstName', e.target.value)}
        />
        {errors?.firstName && (
          <p className='text-red-500 text-sm'>{errors.firstName}</p>
        )}
      </div>
      <div>
        <label> Last Name : </label>
        <input
          type='text'
          value={lastName}
          onChange={(e) => handleTextChange('lastName', e.target.value)}
          className='border border-black p-2'
        />
        {errors?.lastName && <p className='text-red-500 text-sm'>{errors.lastName}</p>}
      </div>
      <div>
        <label> Age : </label>
        <input
          type='number'
          value={age}
          onChange={(e) => handleTextChange('age', e.target.value)}
          className='border border-black p-2'
        />
        {errors?.age && <p className='text-red-500 text-sm'>{errors.age}</p>}
      </div>
      <div>
        <label> Email : </label>
        <input
          type='text'
          value={email}
          onChange={(e) => handleTextChange('email', e.target.value)}
          className='border border-black p-2'
        />
        {errors?.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
      </div>
    </div>
  );
};

export default Profile;