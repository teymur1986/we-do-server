// import { Specification } from '../specifications/specifications.model';
// import { Image } from '../images/image.model';

export enum WorkStatus {
    notStarted = 'not started',
    inProgress = 'in progress',
    inCompleted = 'in completed',
    completed = 'completed',
}

export interface IWork {
    id: number;
    title: string;
    fullName: string;
    firstPhone: string;
    secondPhone: string;
    description: string;
    email: string;
    // images: Image[];
    // specification: Specification;
    status: WorkStatus;
    createAt: Date;
    modifiedAt: Date;
}
