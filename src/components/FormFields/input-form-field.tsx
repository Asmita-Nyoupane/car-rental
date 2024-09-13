import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useFormContext } from "react-hook-form";
import { TFormField } from "./global-type";
type Props<T> = {
    formField: TFormField<T>;
    disabled?: boolean
};

export default function InputField<T>({ formField, disabled }: Props<T>) {
    const form = useFormContext();

    return (
        <FormField
            control={form.control}
            name={formField.name as string}
            render={({ field }) => (
                <FormItem className="">
                    <FormLabel>
                        {formField.label}
                        {!!formField.required && (
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </FormLabel>
                    <FormControl>
                        <Input disabled={disabled} placeholder={formField.placeholder} {...field} type={formField.type} className="py-[19px]" />
                    </FormControl>
                    {
                        formField.description && (
                            <FormDescription>{formField.description}</FormDescription>
                        )
                    }
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
