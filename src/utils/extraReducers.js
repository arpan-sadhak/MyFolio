

export const extraReducers = (fetch) => (builder)=> {
    builder
      .addCase(fetch.pending, (state) => {
        ((state.loading = true), (state.error = null));
      })
      .addCase(fetch.fulfilled, (state, action) => {
        
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }

