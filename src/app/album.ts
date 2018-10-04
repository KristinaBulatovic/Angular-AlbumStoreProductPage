import { Track } from './track';

export interface Album {
    name: string;
    relasedate: string;
    coverImage: string;
    track: Track[];
}

