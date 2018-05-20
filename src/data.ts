export enum Lift {
    Squat = 'squat',
    BenchPress = 'benchPress',
    Deadlift = 'deadlift',
    OHP = 'ohp'
}

export const lifts = [
    {
        key: Lift.Squat,
        name: 'Squat'
    },
    {
        key: Lift.BenchPress,
        name: 'Bench Press'
    },
    {
        key: Lift.Deadlift,
        name: 'Deadlift'
    },
    {
        key: Lift.OHP,
        name: 'OHP'
    }
]

export const program = {
    0: {
        name: '5/5/5',
        sets: [[65, 5], [75, 5], [85, '5+']]
    },
    1: {
        name: '3/3/3',
        sets: [[70, 3], [80, 3], [90, '3+']]
    },
    2: {
        name: '5/3/1',
        sets: [[75, 5], [85, 3], [95, '1+']]
    },
    3: {
        name: 'Deload',
        sets: [[40, 5], [50, 5], [60, 5]]
    }
}
