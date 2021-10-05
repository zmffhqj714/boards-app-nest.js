import { Controller, Get } from '@nestjs/common';
import { Board } from './board.model';
import { BoardsService } from './boards.service';


@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}
    
    @Get()
    getAllboards():Board[]{
        return this.boardsService.getAllboards();
    }
} 