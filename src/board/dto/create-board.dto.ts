import { IsNotEmpty } from "class-validator";

export class createBoardDTO {
    @IsNotEmpty() // class validator for title parameter
    title: string;

    @IsNotEmpty()
    desc: string;
}