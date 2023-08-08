import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forms: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.forms.push(action.payload);
      localStorage.setItem('forms', JSON.stringify(state.forms));
    },
    // Add other reducer functions as needed
  },
});

export const { addQuestion } = formSlice.actions;
export default formSlice.reducer;
