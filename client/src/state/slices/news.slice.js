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

const news_slice = createSlice({
  name: "news",
  initialState: {
    news: [],
    is_loading: false,
    error_msg: ""
  },
  reducers: {},
  extraReducers: {
    // --------------- other Async -----------------------
    [getNews.fulfilled]: (state, action) => {
      state.news = action.payload.news;
    }
  }
});

export default news_slice.reducer;

