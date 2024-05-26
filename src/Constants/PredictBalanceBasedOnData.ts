export const balancePredictBasedOnOBJ = {
    "steps": 5,
    "dataset": [
        {
            "date": "2030-12-30",
            "value": ""
        },
        {
            "date": "2029-12-30",
            "value": ""
        },
        {
            "date": "2028-12-30",
            "value": ""
        },
        {
            "date": "2027-12-30",
            "value": ""
        },
        {
            "date": "2026-12-30",
            "value": ""
        },
        {
            "date": "2025-12-30",
            "value": ""
        },
        {
            "date": "2024-12-30",
            "value": "150000"
        },
        {
            "date": "2023-12-30",
            "value": "130000"
        },
        {
            "date": "2022-12-30",
            "value": "124000"
        },
        {
            "date": "2021-12-30",
            "value": "120000"
        },
        {
            "date": "2020-12-30",
            "value": "100000"
        }
    ]
}

export interface BalancePredictionResponse {
    success: boolean;
    prediction: Prediction[];
    steps: number;
}

export interface Prediction {
    date: string;
    value: number;
}


export const fallBackPredictResponse: BalancePredictionResponse = {
    "success": true,
    "prediction": [
        {
            "date": "2025-12-30",
            "value": 140000
        },
        {
            "date": "2026-12-30",
            "value": 145000
        },
        {
            "date": "2027-12-30",
            "value": 150000
        },
        {
            "date": "2028-12-30",
            "value": 155000
        },
        {
            "date": "2029-12-30",
            "value": 160000
        }
    ],
    "steps": 5
}