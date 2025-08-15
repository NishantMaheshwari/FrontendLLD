import React, { useState } from 'react';
import tabFormData from '../../data/tabForm';
import TabNavigation from './TabNavigation';

const TabForm = () => {
  const [formData, setFormData] = useState(tabFormData);
  const [activeTab, setActiveTab] = useState('step1');

  // new state for storing errors
  const [errors, setErrors] = useState({}); // ✅ added

  const tabs = Object.keys(formData).map((step) => ({
    name: formData[step].name,
    step
  }));

  function handleNext() {
    const currentStep = Number(activeTab.slice(4));

    // run validation before moving next
    const stepErrors = formData[activeTab].validate
      ? formData[activeTab].validate(formData[activeTab].data)
      : {};

    setErrors((prev) => ({ ...prev, [activeTab]: stepErrors })); // ✅ added

    if (Object.keys(stepErrors).length === 0) {
      setActiveTab(`step${currentStep + 1}`);
    }
  }

  function handlePrev() {
    const currentStep = Number(activeTab.slice(4));
    setActiveTab(`step${currentStep - 1}`);
  }

  const FormComponent = formData[activeTab].component;

  return (
    <div className='flex flex-col gap-3 m-auto mt-20 w-[50vw] items-center'>
      <TabNavigation tabs={tabs} setActiveTab={setActiveTab} />
      <div className='w-[30vw] p-5'>
        <FormComponent
          step={activeTab}
          stepData={formData[activeTab].data}
          setFormData={setFormData}
          errors={errors[activeTab]} // ✅ added
        />
      </div>
      <div className='flex justify-between w-full'>
        {activeTab.slice(4) > 1 && (
          <div
            className='w-20 h-7 border border-black bg-blue-500 cursor-pointer'
            onClick={handlePrev}
          >
            Prev
          </div>
        )}
        {activeTab.slice(4) < 3 && (
          <div
            className='w-20 h-7 border border-black bg-blue-500 cursor-pointer'
            onClick={handleNext}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default TabForm;