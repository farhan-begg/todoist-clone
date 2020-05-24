
import { getCollatedTasks } from '../constants';

export const getCollatedTasks = selectedProject =>
    getCollatedTasksExist.find(task => task.key === selectedProject);