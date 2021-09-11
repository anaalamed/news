import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
	'news/getNews',
	async (payload) => {
		const response = await fetch('http://localhost:7000/api/news', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
    if (response.ok) {
      const news = await response.json();
      console.log(news);
      return {news};
		}
	}
);

export const getStorage = createAsyncThunk(
	'news/getStorage',
	async (payload) => {
		const response = await fetch('http://localhost:7000/api/news/count', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
    if (response.ok) {
      const storage = await response.json();
      console.log(storage);
      return {storage};
		}
	}
);


const news_slice = createSlice({
  name: "news",
  initialState: {
    news: [],
    is_loading: false,
    error_msg: "",
    storage: []
  },
  reducers: {},
  extraReducers: {
    // --------------- other Async -----------------------
    [getNews.fulfilled]: (state, action) => {
      state.news = action.payload.news;
    },
    [getStorage.fulfilled]: (state, action) => {
      state.storage = action.payload.storage;
    }
  }
});

export default news_slice.reducer;

