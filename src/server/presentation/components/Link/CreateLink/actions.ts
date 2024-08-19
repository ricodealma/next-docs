'use server';

import { ILinkService } from "@/domain/aggregates/link/ILinkService";
import { getInjection } from "@/server/di/container";
import { DI_TYPES } from "@/server/di/types";
import { LinkSchema } from "@/server/domain/aggregates/link/entities/link";

export async function createLink(prevState: any, formData: FormData) {
    const linkUseCases = getInjection<ILinkService>(DI_TYPES.LinkService);

    const validatedFields = LinkSchema.safeParse({
        uri: formData.get('uri'),
        id: formData.get('id')
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            error: validatedFields.error.flatten().fieldErrors,
            success: validatedFields.success,
            data: validatedFields.data
        };
    }

    try {
        const newLink = await linkUseCases.createLink(validatedFields.data);
        return {
            ...prevState,
            success: true,
            data: newLink
        };
    } catch (error) {
        return {
            ...prevState,
            error: { id: [error.message] }
        };
    }
}
