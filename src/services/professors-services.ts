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
