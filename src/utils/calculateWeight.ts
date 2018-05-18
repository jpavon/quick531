interface ICalculateWeight {
    weight: number
    percentage: number
    rm: number
}

const calculateWeight = (arg: ICalculateWeight): number => {
    const { weight, percentage, rm } = arg

    const percentageWeight = weight * percentage/100
    const rmWeight = percentageWeight * rm/100
    const roundToDecimal50 = (Math.round(rmWeight*100 / 50) * 50) / 100
    return Number(roundToDecimal50)
}

export default calculateWeight
