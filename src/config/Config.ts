import path from 'path'
import envSchema from 'env-schema'
import { z } from "zod";

export default function loadConfig(): void {
    const result = require('dotenv').config({
        path: path.join(__dirname, '..', '..', '.env'),
    })

    if (result.error) {
        throw new Error(result.error)
    }

    const envSchemaDefinition = z.object({
        NODE_ENV: z.enum(['development', 'testing', 'production']),
        API_HOST: z.string(),
        API_PORT: z.string(),
    })

    envSchema({
        data: result.parsed,
        schema: envSchemaDefinition,
    })
}