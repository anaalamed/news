import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk(
	'news/getNews',
	async (payload) => {
		const response = await fetch('https://anaalamed-abc-news.herokuapp.com/api/news', {
		// const response = await fetch('http://localhost:7000/api/news', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
    if (response.ok) {
      const obj = await response.json();
      console.log(obj);
      return {obj};
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
      state.news = action.payload.obj.news;
      state.storage = action.payload.obj.storage.storage;
    }
  }
});

export default news_slice.reducer;

