import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import  {Gallery} from '../../env';
import {addImage, delImage, getImage, updImage } from './galleryAPI';

export interface galleryState {
  gallery: Gallery[];
  refresh:boolean;
  title:string;
  content:string;
  img:any;
  id:number;
}

const initialState: galleryState = {
  gallery: [],
  refresh:false,
  content:"",
  title:"",
  img:null,
  id:0,
};

export const getImageAsync = createAsyncThunk(
  'gallery/getImage',
  async () => {
    const response = await getImage();
    return response;
  }
);
export const addImageAsync = createAsyncThunk(
  'gallery/addImage',
  async (img:Gallery) => {
    const response = await addImage(img);
    return response;
  }
);
export const updImageAsync = createAsyncThunk(
  'gallery/updImage',
  async (img:Gallery) => {
    const response = await updImage(img);
    return response;
  }
);
export const delImageAsync = createAsyncThunk(
  'gallery/delImage',
  async (id:number) => {
    const response = await delImage(id);
    return response;
  }
);

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImg: (state,action) => {
      state.img = action.payload;
    },
    setTitle: (state,action) => {
      state.title = action.payload;
    },
    setContent: (state,action) => {
      state.content = action.payload;
    },
    setId: (state,action) => {
      state.id = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImageAsync.fulfilled, (state,action:PayloadAction<Gallery[]>) => {
        state.gallery = action.payload;
        state.id = +action.payload?.[0].id
      })
      .addCase(addImageAsync.fulfilled, (state) => {
        state.refresh = !state.refresh;
      })
      .addCase(delImageAsync.fulfilled, (state) => {
        state.refresh = !state.refresh;
      })      
      .addCase(updImageAsync.fulfilled, (state) => {
        state.refresh = !state.refresh;
      })
  },
});

export const { setImg, setTitle, setContent } = gallerySlice.actions;

export const selectGallery = (state: RootState) => state.gallery.gallery;
export const selectrefresh = (state: RootState) => state.gallery.refresh;
export const selecttitle = (state: RootState) => state.gallery.title;
export const selectcontent = (state: RootState) => state.gallery.content;
export const selectimg = (state: RootState) => state.gallery.img;
export const selectid = (state: RootState) => state.gallery.id;


export default gallerySlice.reducer;
