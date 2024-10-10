import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: '',
    artist: null,
    artists: [],
};

const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {
        startCreateArtist: (state, action) => {
            state.loading = true;
        },
        createArtistSuccess: (state, action) => {
            state.loading = false;
            state.artist = action.payload;
            state.error = '';
        },
        errorArtist: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        startGetArtists: (state, action) => {
            state.loading = true;
        },
        getArtistsSuccess: (state, action) => {
            state.loading = false;
            state.artists = action.payload;
            state.error = '';
        },
    },
});

export const { errorArtist, getArtistsSuccess, startGetArtists, createArtistSuccess, startCreateArtist } = artistSlice.actions;

export default artistSlice.reducer;