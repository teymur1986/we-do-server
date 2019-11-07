import { Image } from 'src/images/image.model';
import { Work } from 'src/works/work.model';

export interface Worker {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    age: number;
    birthDate: Date;
    youDo: Work;
    weDo: Work;
    profileImage: Image;
    privatePhone: string;
}
