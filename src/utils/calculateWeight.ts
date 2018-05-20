interface ICalculateWeight {
    weight: number
    percentage: number
    trainingMax: number
}

const calculateWeight = (arg: ICalculateWeight): number => {
    const { weight, percentage, trainingMax } = arg

    const percentageWeight = weight * percentage / 100
    const rmWeight = percentageWeight * trainingMax / 100
    const roundTo2point50 = Math.round(rmWeight * 100 / 250) * 250 / 100
    return roundTo2point50
}

export default calculateWeight
