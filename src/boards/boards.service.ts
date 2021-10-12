import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()//생성자 종류를 다른 컴포넌트 에서 사용가능하도록 하는 문법
export class BoardsService {
    private boards: Board[] = []; //임의데이터메모리, 이거 왜ㅜ변수타입 지정안해주냐ㅕ?



    getAllboards():Board[] {
        return this.boards;  //폴더보드는 따로 불러올 수 있나?
    }
    createBoard(title: string, description: string) {
        const board: Board = {
            id: uuid(),
            title: title,
            description: description,
            status: BoardStatus.public
        }
        this.boards.push(board);//데이터 입력시 푸시하라 이말같은데..
        return board;
    }
}
