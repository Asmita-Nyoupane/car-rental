import { useFormContext } from 'react-hook-form';
import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Select } from 'antd';
import { TFormField } from './global-type';
import { carBrands } from '../../lib/car-brands';

type Props<T> = {
    formField: TFormField<T>;
    disabled?: boolean
}

export default function AntdMultiSelectFormField<T>({ formField, disabled }: Props<T>) {
    const form = useFormContext();

    return (
        <FormField
            control={form.control}
            name={formField.name as string}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {formField.label!}
                        {formField.required && (
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </FormLabel>
                    <Select
                        mode="multiple"
                        disabled={disabled}
                        size='large'
                        allowClear
                        className='w-full'
                        placeholder={formField.placeholder}
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                        options={carBrands.map((brand) => ({
                            label: brand,
                            value: brand
                        }))}
                    />
                    {
                        formField.description && (
                            <FormDescription>{formField.description}</FormDescription>
                        )
                    }
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}