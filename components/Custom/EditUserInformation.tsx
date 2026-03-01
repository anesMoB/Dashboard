import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "../ui/button"
import ZodWithUseFormHook from "./ZodWithUseFormHook"
import { UserData } from "@/utils"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"



const FormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50, { message: "Username must be at most 50 characters." }),
  email: z
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters." })
    .max(15, { message: "Phone number must be at most 15 characters." }),
  location: z
    .string()
    .min(2, { message: "Location must be at least 2 characters." })
    .max(100, { message: "Location must be at most 100 characters." }),
  role: z
    .enum(["admin", "user"], { message: "Role must be either 'admin' or 'user'." }),
})

function EditUserInformation({ userData }: { userData: typeof UserData }) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
      location: userData.location,
      role: userData.role.toLowerCase() as "admin" | "user",
    }


  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  }
  return (
    <SheetContent className="overflow-scroll flex flex-col gap-4">
      <SheetHeader>
        <SheetTitle>Edit User Information</SheetTitle>
        <SheetDescription asChild>
             <div className="w-full px-3 flex flex-col gap-4">
        <form id="form" onSubmit={form.handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="mt-3" htmlFor="form-username">
                  Username
                </FieldLabel>
                <Input
                  {...field}
                  className=""
                  id="form-username"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter username"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="mt-3" htmlFor="form-email">
                  Email Address
                </FieldLabel>
                <Input
                  {...field}
                  className=""
                  id="form-email"
                  placeholder="Enter email address"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="mt-3" htmlFor="form-phone">
                  Phone Number
                </FieldLabel>
                <Input
                  {...field}
                  className=""
                  id="form-phone"
                  placeholder="Enter phone number"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="location"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="mt-3" htmlFor="form-location">
                  Location
                </FieldLabel>
                <Input
                  {...field}
                  className=""
                  id="form-location"
                  placeholder="Enter location"
                  aria-invalid={fieldState.invalid}
                />

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        
             <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="mt-3" htmlFor="form-role">
                    Role
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="form-role"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
      
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          
          

          {/*  <Controller
            name="role"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-role">
                  Role
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    id="form-description"
                    placeholder="I'm having an issue with the login button on mobile."
                    rows={6}
                    className="min-h-24 resize-none"
                    aria-invalid={fieldState.invalid}
                  />

                </InputGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          /> */}
        </form>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form">
            Save
          </Button>
        </Field>
        {/* <ZodWithUseFormHook /> */}
      </div>
        </SheetDescription>
      </SheetHeader>
  



    </SheetContent>
  )
}

export default EditUserInformation