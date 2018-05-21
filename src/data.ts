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

export const programs = [
    {
        name: '5/5/5',
        sets: [
            { percentage: 65, reps: '5' },
            { percentage: 75, reps: '5' },
            { percentage: 85, reps: '5+' }
        ]
    },
    {
        name: '3/3/3',
        sets: [
            { percentage: 70, reps: '3' },
            { percentage: 80, reps: '3' },
            { percentage: 90, reps: '3+' }
        ]
    },
    {
        name: '5/3/1',
        sets: [
            { percentage: 75, reps: '5' },
            { percentage: 85, reps: '3' },
            { percentage: 95, reps: '1+' }
        ]
    },
    {
        name: 'Deload',
        sets: [
            { percentage: 40, reps: '5' },
            { percentage: 50, reps: '5' },
            { percentage: 60, reps: '5' }
        ]
    }
]
