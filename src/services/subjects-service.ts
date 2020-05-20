

import { Subject } from '../models/Subject';
import * as subjectdao from '../daos/subjects-dao';


export function getAllSubjects(): Promise<Subject[]> {
    return subjectdao.getAllSubjects();
}

export function getSubjectById(id: number): Promise<Subject> {
    return subjectdao.getSubjectById(id); 
}


export function saveSubject(subject: Subject): Promise<Subject> {

    // input new Subject from the user:
    const newSubject= new Subject(
        undefined, // id is auto defined 
        subject.subjects_name
    );

    if(subject.subjects_name) {
        // submit to DAO
        return subjectdao.saveSubject(newSubject); 

    } else {
        // TODO: We should fail here, probably issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}