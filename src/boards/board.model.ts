export interface Board{
    id: string;
    title: string;
    description: string;
    status: BoardStatus; //비공개,공개
}
export enum BoardStatus{
    public = 'public',
    private = 'private'
}