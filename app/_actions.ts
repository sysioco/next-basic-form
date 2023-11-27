'use server'

import { z } from "zod";

const FormDataSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    message: z
        .string()
        .min(6, { message: "Message must be at least 6 characters." }),
});

type Inputs = z.infer<typeof FormDataSchema>


export async function addEntry(data: Inputs) {
    console.log('calling action')
    const result = FormDataSchema.safeParse(data)

    if (result.success) {
        return { success: true, data: result.data }
    }

    if (result.error) {
        return { success: false, error: result.error.format() }
    }
}