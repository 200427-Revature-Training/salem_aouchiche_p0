import {Professor} from '../models/Professor';
import * as professorsdao from '../daos/Professors-dao';


export function getAllProfessors(): Promise<Professor[]> {
    // Apply internal business logic
    return professorsdao.getAllProfessors();
}

export function getProfessorById(id: number): Promise<Professor> {
    // Apply internal business logic
    return professorsdao.getProfessorById(id);
}


export function saveProfessor(professor: Professor): Promise<Professor> {

    // input new Professor from the user:
    const newProfessor= new Professor(
        undefined, // id is auto defined 
        professor.persontype,     // 1 for student and 2 for professor.
        professor.personId
    );

    if(professor.personId && professor.persontype==2) {
        // submit to DAO
        return professorsdao.saveProfessor(newProfessor); 

    } else {
        // TODO: We should fail here, probably issue some kind of 400
        return new Promise((resolve, reject) => reject(422));
    }
}