

import { Subject } from '../models/Subject';
import * as subjectdao from '../daos/sujects-dao';


export function getAllSubjects(): Promise<Subject[]> {
    return subjectdao.getAllSubjects();
}

export function getSubjectById(id: number): Promise<Subject> {
    return subjectdao.getSubjectById(id); 
}

