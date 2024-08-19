import { z } from "zod";

export const redirectTypeOptions = [
  "Publico",
  "Proprio",
  "Compartilhado",
] as const;
export const accessTypeOptions = ["Permanente", "Temporario"] as const;
export const domainOptions = ["multiqr.co"] as const;

export const LinkSchema = z.object({
  uri: z
    .string()
    .url({ message: "a url deve ser preenchida no formato correto" }).optional(),
  id: z.string()
});

export type Link = z.infer<typeof LinkSchema>;
