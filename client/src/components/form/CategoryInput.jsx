import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '../ui/label'
import { categories } from '@/utils/categories'


const CategoryInput = ({ name, register, setValue }) => {
    return (
        <div className="flex flex-col gap-2">
            <input hidden {...register(name)} />
            <Label className="capitalize">
                {name}
            </Label>
            <Select
                onValueChange={(value) => {
                    setValue(name, value) }}
                defaultValue={""}
                required>
                <SelectTrigger className={"w-full"}>
                    <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                    {
                        categories.map((item) => {
                            return <SelectItem key={item.label} value={item.label}>
                                <span className="flex items-center gap-2">
                                    <item.icon />
                                    <p className='capitalize' >{item.label}</p>
                                </span>
                            </SelectItem>
                        })
                    }
                </SelectContent>
            </Select>
        </div>
    )
}

export default CategoryInput