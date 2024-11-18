import {TaskStructure} from '../types';
const { v4: uuid } = require('uuid');

export const INITIAL_TASKS: TaskStructure[] =  [
    {
        title: "UX Design",
        completed: false,
        id: uuid()
    }, 
    {
        title: "Decompose UX into components", 
        completed: false,
        id: uuid()
    }
]