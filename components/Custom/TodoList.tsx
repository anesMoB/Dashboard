import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from '../ui/checkbox'
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldTitle } from '../ui/field'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { format } from 'date-fns'

import React from "react"
import { Calendar1 } from "lucide-react"
function TodoList() {
    const [date, setDate] = React.useState<Date>(new Date())

    return (
        <div className=' max-h-112.5 w-full md:max-w-120 flex flex-col gap-2'>
            <h1 className="text-lg font-semibold mb-4">Todo List</h1>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline"><Calendar1/> {date ? format(date, 'PPP') : <span>Pick a date</span>}</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <Calendar required mode="single" 
                        selected={date}
                        onSelect={setDate}
                        className="rounded-lg " />  
                     </PopoverContent>
            </Popover>

            <ScrollArea className="w-full h-90 rounded-md  p-4">
                <FieldGroup className='flex flex-col gap-2'>
                    {Array.from({ length: 10 }).map((_, index) => {
                        return <FieldLabel key={index}>
                            <Field orientation="horizontal">
                                <Checkbox id={`toggle-checkbox-${index}`} name={`toggle-checkbox-${index}`} />
                                <FieldContent>
                                    <FieldTitle>Enable notifications</FieldTitle>
                                    <FieldDescription>
                                        You can enable or disable notifications at any time.
                                    </FieldDescription>
                                </FieldContent>
                            </Field>
                        </FieldLabel>

                    })}
                </FieldGroup>
            </ScrollArea>

        </div>
    )
}

export default TodoList