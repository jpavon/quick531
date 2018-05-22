import { lifts, programs } from '../src/data'

const testWeight = '95'
const programWeights = [
    ['55', '65', '72.5'],
    ['60', '67.5', '77.5'],
    ['65', '72.5', '80'],
    ['35', '42.5', '52.5']
]

const testTrainingMaxPercentage = '50'
const programWeightsWithNewTrainingMax = ['20', '25', '27.5']

describe('quick531', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000')
    })

    it('should render page', async () => {
        await expect(page).toMatch('quick531')
    })

    lifts.forEach((lift) => {
        it(`should render weight for ${lift.key} lift`, async () => {
            await page.type(`[name=${lift.key}]`, testWeight)

            programWeights[0].forEach(async (weight) => {
                await expect(page).toMatch(weight)
            })
        })
    })

    programs.forEach((program, index) => {
        it(`should render weight for ${program.name} program`, async () => {
            await page.click(`.test-program-tab:nth-child(${index + 1})`)

            programWeights[index].forEach(async (weight) => {
                await expect(page).toMatch(weight)
            })
        })
    })

    it(`should render new weight when modifying training max`, async () => {
        await page.type(`[name=trainingMax]`, testTrainingMaxPercentage)

        programWeightsWithNewTrainingMax.forEach(async (weight) => {
            await expect(page).toMatch(weight)
        })
    })
})
