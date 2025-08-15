import Profile from "../pages/tabForm/Profile";
import Intrests from "../pages/tabForm/Intrests";
import Preferences from "../pages/tabForm/Preferences";

const data = {
  step1: {
    id: 0,
    name: 'Profile',
    data: { firstName: '', lastName: '', age: '', email: '' },
    component: Profile,
    validate: (stepData) => {
      const errors = {};
      if (!stepData.firstName || stepData.firstName.length < 2)
        errors.firstName = 'First name must be at least 2 characters';
      if (!stepData.lastName) errors.lastName = 'Last name is required';
      if (!stepData.age || stepData.age <= 0) errors.age = 'Enter valid age';
      if (!stepData.email || !/\S+@\S+\.\S+/.test(stepData.email))
        errors.email = 'Enter valid email';
      return errors;
    },
  },
  step2: {
    id: 1,
    name: 'Intrests',
    data: [],
    component: Intrests,
    validate: (stepData) => {
      const errors = {};
      if (stepData.length === 0) errors.general = 'Select at least one interest';
      return errors;
    },
  },
  step3: {
    id: 2,
    name: 'Preferences',
    data: { theme: 'Light' },
    component: Preferences,
    validate: (stepData) => {
      const errors = {};
      if (!stepData.theme) errors.theme = 'Select a theme';
      return errors;
    },
  },
};


export default data;