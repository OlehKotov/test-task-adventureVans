import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = state => state.campers.data;
export const selectLoading = state => state.campers.loading;
export const selectError = state => state.campers.error;
export const selectFilters = state => state.filters;
