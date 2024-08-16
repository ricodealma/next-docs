"use server";

import { getInjection } from "@/server/di/container";
import { DI_TYPES } from "@/server/di/types";
import { LinkSchema } from "src/server/domain/aggregates/link/entities/link";
import { ILinkUseCases } from "@/application/useCases/ILinkUseCases";

export async function createLink(formData: FormData) {
    const linkUseCases = getInjection<ILinkUseCases>(DI_TYPES.LinkUseCases);

    console.log('action called')
    const validatedFields = LinkSchema.safeParse({
        uri: formData.get('uri'),
        // id: formData.get('id'),
        // description: formData.get('description'),
        // domain: formData.get('domain'),
        // redirectType: formData.get('redirectType'),
        // accessType: formData.get('accessType'),
    });

    if (!validatedFields.success) {

        const response = {
            errors: validatedFields.error.flatten().fieldErrors,
        };
        console.log(response)
        return response
    }

    const newLink = await linkUseCases.createLink(validatedFields.data);
    console.log(newLink)
    return { success: true, data: newLink };
}
