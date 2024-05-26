import { CustomApiErrorMessage } from '../APIs/CustomApiErrorMessage';
import { AI_Response, getAiResponseHistory } from '../APIs/JigsawStackAPIs/PromptEngine_API';
import { FinLitSlideProps } from '../Components/FinLiterature/FinLitBoilerplate';
import { randomIndex } from './RandomElementInArrayHelper';

export const getFinLitSlideContents = async (): Promise<CustomApiErrorMessage | FinLitSlideProps[]> => {
    let storeBackgroundImages: string[] = [
        "https://i.pinimg.com/564x/0c/91/ef/0c91ef7c7176883527e8ff62704bedee.jpg",
        "https://i.pinimg.com/564x/94/c2/18/94c218e20d5a22e498bf635eb134f907.jpg",
        "https://i.pinimg.com/564x/43/c2/70/43c2700610e6cf29d4924d5db112c809.jpg"
    ]
    let storeImages: string[] = [
        "https://em-content.zobj.net/source/apple/391/money-mouth-face_1f911.png",
        "https://em-content.zobj.net/source/apple/391/sneezing-face_1f927.png",
        "https://em-content.zobj.net/source/apple/391/nerd-face_1f913.png",
    ]
    let returnValue: FinLitSlideProps[] = []

    const data = await getAiResponseHistory();
    (data as AI_Response).result.forEach(element => {
        let newContent: FinLitSlideProps = {
            backgroundImageURL: storeBackgroundImages[randomIndex(storeBackgroundImages)],
            imageURL: storeImages[randomIndex(storeImages)],
            title: element.summary,
            description: element.excerpt
        }
        returnValue.push(newContent)
    });
    return returnValue
}