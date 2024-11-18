import { render, screen } from '@testing-library/react';
import TaskContainer from '../../components/TaskContainer';
import { INITIAL_TASKS } from '../../utility/data/initialTasks';


describe('TaskContainer tests', () => {

    it('renders all initial tasks', () => {
        render(<TaskContainer/>);
        INITIAL_TASKS.forEach(task => {
            expect(screen.getByText(task.title)).toBeInTheDocument();
        });
    });

});