export class Video {
  constructor(
    public id: number,
    public title: string,
    public detail: string,
    public typeid: number,
    public createTime?: number,
    public updateTime?: number,
    public videoAddress?: string,
    public videoImageAddress?: string
  ){};
}
