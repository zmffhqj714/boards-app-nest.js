import { Injectable } from '@nestjs/common';

@Injectable()//생성자 종류를 다른 컴포넌트 에서 사용가능하도록 하는 문법
export class BoardsService {
    private boards = []; //임의데이터메모리, 이거 왜ㅜ변수타입 지정안해주냐ㅕ?



    getAllboards() {
        return this.boards;  //폴더보드는 따로 불러올 수 있나?
    }
}
