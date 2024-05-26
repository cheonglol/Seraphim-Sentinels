import { balancePredictBasedOnOBJ, BalancePredictionResponse } from '../../Constants/PredictBalanceBasedOnData';
import { CustomApiErrorMessage } from "../CustomApiErrorMessage";

export const getAIBalancePrediction = async (): Promise<BalancePredictionResponse | CustomApiErrorMessage> => {

    const response = await fetch("https://jigsawstack.com/api/v1/ai/prediction", {
        headers: [["x-api-key", `${process.env.REACT_APP_JIGSAW_STACK_API_KEY}`]],
        method: "POST",
        body: JSON.stringify(balancePredictBasedOnOBJ)
    } as RequestInit)

    if (response.status === 401) {
        const errorObj = await response.json();
        return { customMessage: "something wrong for jigsaw api, got 401 in response.status", caughtErrorMessage: errorObj } as CustomApiErrorMessage
    }

    return await response.json()
}