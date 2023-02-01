import axios from "axios";
import { Gallery, MY_SERVER } from "../../env";

// A mock function to mimic making an async request for data
export const getImage = async() =>
{
    const res = await axios.get(MY_SERVER)
    return res.data
}

export const addImage = async(img:Gallery) =>
{
    const res = await axios.post(MY_SERVER,img,{
        headers: {
          "content-type": "multipart/form-data",
        },
      })
    return res.data
}

export const updImage = async(img:Gallery) =>
{
    const res = await axios.put(MY_SERVER+img.id,img,{
        headers: {
          "content-type": "multipart/form-data",
        },
      })
    return res.data
}

export const delImage = async(id:number) =>
{
    const res = await axios.delete(MY_SERVER+id)
    return res.data
}

