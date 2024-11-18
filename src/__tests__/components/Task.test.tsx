import { render, screen } from '@testing-library/react';
import Task from '../../components/Task';

const MOCK_TITLE_TASK = 'Task1'

describe('Task tests', () => {

    it('renders task title', () => {
        render(<Task title={MOCK_TITLE_TASK} completed={false}/>);
        expect(screen.getByText(MOCK_TITLE_TASK)).toBeInTheDocument();
    });

})