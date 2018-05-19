export enum Lift {
    squat = 'squat',
    benchPress = 'benchPress',
    deadlift = 'deadlift',
    ohp = 'ohp'
}

export const lifts = [
    {
        key: Lift.squat,
        name: 'Squat'
    },
    {
        key: Lift.benchPress,
        name: 'Bench Press'
    },
    {
        key: Lift.deadlift,
        name: 'Deadlift'
    },
    {
        key: Lift.ohp,
        name: 'OHP'
    }
]

export const program = {
    0: {
        name: '5/5/5',
        sets: [[65, 5], [75, 5], [85, 5]]
    },
    1: {
        name: '3/3/3',
        sets: [[70, 3], [80, 3], [90, 3]]
    },
    2: {
        name: '5/3/1',
        sets: [[75, 5], [85, 3], [95, 1]]
    },
    3: {
        name: 'Deload',
        sets: [[40, 5], [50, 5], [60, 5]]
    }
}
