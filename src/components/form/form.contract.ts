import { type FieldValues, type Path, type Control } from "react-hook-form"

export interface IInputprops<T extends FieldValues>{
    name: Path<T>,
    placeholder?: string,
    type: React.HTMLInputTypeAttribute,
    control: Control<T>,
    errMsg?: string
}

export interface IGeneralInput {
    name: string, 
    placeholder?: string
    handler: any,
}

export interface IFormInputProps extends IGeneralInput {
    type?: string;
}