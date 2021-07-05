import { Category } from './Category.model';
import { Actor } from './Actor.model';

export interface Screenplay {
    _id: string;
    title: string;
    photoUrl: string;
    description: string;
    releaseDate: Date;
    casting: [{
        actor: Actor,
        role: string;
    }];
    category: Category;
    rate: number;
    votes: number;
}