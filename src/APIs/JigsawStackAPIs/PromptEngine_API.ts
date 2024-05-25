// TODO: PROPS

export const getAiResponseHistory = async () => {
    const data = await fetch("https://api.jigsawstack.com/v1/ai/prompt_engine/9eedaf69-46ad-46b8-ad45-7868d13d280a", {
        headers: [["x-api-key", `${process.env.REACT_APP_JIGSAW_STACK_API_KEY}`]]
    } as RequestInit)
    return data;
}