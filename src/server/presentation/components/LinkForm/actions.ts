"use server";

import { ApplicationContainer, getInjection } from "@/server/di/container";
import { DI_TYPES } from "@/server/di/types";
import { LinkSchema } from "src/server/domain/aggregates/link/entities/link";
import { ILinkUseCases } from "@/application/useCases/ILinkUseCases";

export async function createLink(formData: FormData) {
    const linkUseCases = getInjection<ILinkUseCases>(DI_TYPES.LinkUseCases);

    const validatedFields = LinkSchema.safeParse({
        uri: formData.get('uri'),
        description: formData.get('description'),
        domain: formData.get('domain'),
        redirectType: formData.get('redirectType'),
        accessType: formData.get('accessType'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const newLink = await linkUseCases.createLink(validatedFields.data);
    console.log(newLink)
    return { success: true, data: newLink };
}
