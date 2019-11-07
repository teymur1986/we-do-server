import { Image } from 'src/images/image.model';

export interface Worker {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    birthDate: Date;
    // youDo: IWork;
    // weDo: IWork;
    profileImage: Image;
    privatePhone: string;
    createAt: Date;
    modifiedAt: Date;
}
