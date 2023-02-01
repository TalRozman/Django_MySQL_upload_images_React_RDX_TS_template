export class Gallery{
    id:number = 0;
    title:string = "";
    content:string="";
    image:any = null;

    constructor(title:string, content:string,image:any,id:number = 0){
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
    }
}

export const MY_SERVER = "http://127.0.0.1:8000/Gallery/"