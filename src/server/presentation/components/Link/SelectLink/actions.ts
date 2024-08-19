'use server';

import { ILinkService } from "@/domain/aggregates/link/ILinkService";
import { getInjection } from "@/server/di/container";
import { DI_TYPES } from "@/server/di/types";
import { LinkSchema } from "@/domain/aggregates/link/entities/link";

export async function selectLink(prevState: any, formData: FormData) {
    const linkUseCases = getInjection<ILinkService>(DI_TYPES.LinkService);

    const validatedFields = LinkSchema.pick({ id: true }).safeParse({
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
        const selectedLink = await linkUseCases.selectLinkById(validatedFields.data.id);
        return {
            ...prevState,
            success: true,
            data: selectedLink
        };
    } catch (error) {
        return {
            ...prevState,
            error: { id: [error.message] }
        };
    }
}
