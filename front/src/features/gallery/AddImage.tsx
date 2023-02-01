import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Gallery } from '../../env'
import { addImageAsync, selectcontent, selectimg, selecttitle, setContent, setImg, setTitle } from './counterSlice'

const AddImage = () => {
    const dispatch = useAppDispatch()    
    const img = useAppSelector(selectimg);
    const title = useAppSelector(selecttitle);
    const content = useAppSelector(selectcontent);

    const handleSubmit = () => {
        const newImg = new Gallery(title,content,img)
        dispatch(addImageAsync(newImg));
        dispatch(setTitle(""));
        dispatch(setImg(undefined));
        dispatch(setContent(""));
    }
    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit();e.preventDefault()}}>
                <p>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e)=>dispatch(setTitle(e.currentTarget.value))}
                        required
                    />
                </p>
                <p>
                    <input
                        type="text"
                        placeholder="Content"
                        value={content}
                        onChange={(e)=>dispatch(setContent(e.currentTarget.value))}
                        required
                    />
                </p>
                <p>
                    <input
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={(e)=> dispatch(setImg(e.currentTarget.files?.[0]))}
                        required
                    />
                </p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddImage