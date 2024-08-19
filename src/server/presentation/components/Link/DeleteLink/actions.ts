'use server';

import { getInjection } from '@/server/di/container';
import { DI_TYPES } from '@/server/di/types';
import { LinkSchema } from '@/domain/aggregates/link/entities/link';
import { ILinkService } from '@/domain/aggregates/link/ILinkService';

export async function deleteLink(prevState: any, formData: FormData) {
    const linkUseCases = getInjection<ILinkService>(DI_TYPES.LinkService);
    const validatedFields = LinkSchema.safeParse({ id: formData.get('id') });

    if (!validatedFields.success) {
        return {
            ...prevState,
            error: validatedFields.error.flatten().fieldErrors,
            success: validatedFields.success,
            data: validatedFields.data
        };
    }

    try {
        const result = await linkUseCases.deleteLink(validatedFields.data.id);
        return {
            ...prevState,
            success: true,
            data: result
        };
    } catch (error) {
        return {
            ...prevState,
            error: { id: [error.message] }
        };
    }
}
