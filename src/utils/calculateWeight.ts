const calculateWeight = (weight: number, percentage: number, rm: number): number => {
    return (weight*percentage/100)*rm/100
}

export default calculateWeight
