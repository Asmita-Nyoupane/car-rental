type TInputType = "text" | "date" | "number" | "textarea" | "password" | "tel" | "url";
export type TSelectOptionType = "select" | "checkbox" | "radio" | "multi-select" | "antd-multi-select" | "antd-select" | "longselect";

export type TFormField<T> = (
    | {
        type: TSelectOptionType;
        allowMultiple?: boolean;
        notice?: string;
        options?: {
            value: string;
            label: string;
            id?: string;
        }[];
    }
    | {
        type: TInputType;
    }
    | {
        type: "file";
        accept?: string;
    }
) & {
    label?: string;
    placeholder?: string;
    name: keyof T;
    description?: string;
    required?: boolean;
};