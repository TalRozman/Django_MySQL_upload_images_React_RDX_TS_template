import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { delImageAsync, getImageAsync, selectcontent, selectGallery, selectid, selectimg, selectrefresh, selecttitle, setContent, setImg, setTitle, updImageAsync } from './counterSlice'
import { Gallery } from '../../env'

const MyGallery = () => {
    const dispath = useAppDispatch()
    const gallery = useAppSelector(selectGallery)
    const refresh = useAppSelector(selectrefresh)
    const img = useAppSelector(selectimg)
    const title = useAppSelector(selecttitle)
    const content = useAppSelector(selectcontent)
    const id = useAppSelector(selectid)

    useEffect(() => {
        dispath(getImageAsync())
    }, [dispath, refresh])
    const [isUpdate, setisUpdate] = useState(false)
    return (
            <div>
                {!isUpdate ?
                    gallery?.map((pic, i) =>
                        <div className="card" style={{ width: "18rem", display: 'inline' }} key={i}>
                            <img src={`http://127.0.0.1:8000${pic.image}`} style={{ width: '30%' }} alt="img" />
                            <div className="card-body">
                                <h2 className="card-title">{pic.title}</h2>
                                <h5 className="card-text">{pic.content}</h5>
                                <button className="btn btn-warning" onClick={() => setisUpdate(true)}>Update</button><button className="btn btn-danger" onClick={() => dispath(delImageAsync(pic.id))}>Delete</button>
                            </div>
                        </div>
                    )
                    :
                    gallery?.map((pic, i) =>
                        <div className="card" style={{ width: "18rem", display: 'inline' }} key={i}>
                            <div className="card-body">
                                <p><input
                                    type="file"
                                    accept="image/png,image/jpeg"
                                    onChange={(e) => dispath(setImg(e.currentTarget.files?.[0]))}
                                    required />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => dispath(setTitle(e.currentTarget.value))}
                                        required />
                                </p>
                                <p>
                                    <input
                                        type="text"
                                        placeholder="Content"
                                        value={content}
                                        onChange={(e) => dispath(setContent(e.currentTarget.value))}
                                        required />
                                </p>
                                <button className="btn btn-warning" onClick={() => { const upd = new Gallery(title, content, img, id); dispath(updImageAsync(upd)); setisUpdate(false) }}>Submit</button><button className="btn btn-danger" onClick={() => setisUpdate(false)}>Cancel</button>
                            </div>
                        </div>
                    )}
            </div>
    )
}

export default MyGallery