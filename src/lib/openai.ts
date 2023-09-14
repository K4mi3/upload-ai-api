import 'dotenv/config'
import { OpenAI } from 'openai'
import { env } from 'process'

export const openai = new OpenAI({
    apiKey:   env.OPENAI_KEY //"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",
})