import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;