import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { DatePicker, Space } from "antd";

import { useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import { TFormField } from "./global-type";

type Props<T> = {
    formField: TFormField<T>;
    disabled?: boolean
};

export default function DatePickerFieldForm<T>({ formField, disabled }: Props<T>) {
    const form = useFormContext();

    // Function to disable future dates
    // const disableFutureDates = (currentDate: dayjs.Dayjs) => {
    //   return currentDate && currentDate > dayjs().endOf('day');
    // };

    return (
        <FormField
            control={form.control}
            name={formField.name as string}
            render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                    <FormLabel>
                        {formField.label}
                        {!!formField.required && (
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </FormLabel>
                    <FormControl>
                        <Space direction="vertical" size={12}>
                            <DatePicker
                                disabled={disabled}
                                format="YYYY-MM-DD"
                                onChange={(date) => {
                                    field.onChange(
                                        new Date(date.format("YYYY-MM-DD")).toISOString()
                                    );
                                }}
                                value={
                                    field.value ? dayjs(field.value, "YYYY-MM-DD") : undefined
                                }
                                className="w-full flex h-9  rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </Space>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
