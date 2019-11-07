import { Specification } from '../specifications/specifications.model';
import { Image } from '../images/image.model';

export enum WorkStatus {
    notStarted = 'not started',
    inProgress = 'in progress',
    inCompleted = 'in completed',
    completed = 'completed',
}

export interface Work {
    id: number;
    title: string;
    fullName: string;
    firstPhone: string;
    secondPhone: string;
    description: string;
    images: Image[];
    specification: Specification;
    status: WorkStatus;
}
