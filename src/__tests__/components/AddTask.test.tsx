import { fireEvent, render, screen } from '@testing-library/react';
import AddTask from '../../components/AddTask';

describe('AddTask tests', () => {

    it('get By Text', () => {
        render(<AddTask addTaskToList={jest.fn}/>);
        expect(screen.getByText("What's on your mind today?")).toBeInTheDocument();
    });

    it('get By Title', () => {
        render(<AddTask addTaskToList={jest.fn}/>);
        expect(screen.getByTitle("enter task")).toBeInTheDocument();
    });

    it('get By Role', () => {
        render(<AddTask addTaskToList={jest.fn}/>);
        const inputField = screen.getByRole('textbox')
        expect(inputField).toBeInTheDocument();
    });

    it('get By Test Id', () => {
        render(<AddTask addTaskToList={jest.fn}/>);
        expect(screen.getByTestId("add-icon")).toBeInTheDocument();
    });

    it('get By PlaceHolder', () => {
        render(<AddTask addTaskToList={jest.fn}/>);
        expect(screen.getByPlaceholderText("Add Task")).toBeInTheDocument();
    });

    it('get By Display Value', () => {
        render(<AddTask addTaskToList={jest.fn}/>);
        const inputField = screen.getByRole('textbox')
        fireEvent.change(inputField,{target: {value:"test"}})
        expect(screen.getByDisplayValue('test')).toBeInTheDocument();
        expect(inputField).toHaveValue();
        expect(inputField).toHaveValue("test");
        expect(inputField).toBeEnabled();
        expect(inputField).toHaveAttribute("id");
        const div = screen.getByRole("div-task");
        expect(div).toBeInTheDocument();
    });



})