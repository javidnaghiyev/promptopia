import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

//GET
export const GET = async (request, {params}) => {
    try {
        await connectToDB()
        const prompt = await Prompt.findById(params.id).populate('creator')

        if(!prompt) return new Response(JSON.stringify("Prompt not found"), {status:404})

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

//PATCH
export const PATCH = async (request, {params}) => {
    const {prompt, tag} = await request.json()

    try {
        await connectToDB();
        const existingPrompt = await Prompt.findById(params.id)

        if(!prompt) return new Response(JSON.stringify("Failed to find the prompt"), {status: 404})

        existingPrompt.prompt = prompt
        existingPrompt.tag = tag

        await existingPrompt.save();

        return new Response(JSON.stringify("Successfully edited the prompt"), {status:200})

    } catch (error) {
        console.log(error);
    }

}

//DELETE
export const DELETE = async (request, {params}) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findByIdAndRemove(params.id)
        return new Response(JSON.stringify("Successfully deleted the prompt"), {status:200})
    } catch (error) {
        console.log(error);
    }
}