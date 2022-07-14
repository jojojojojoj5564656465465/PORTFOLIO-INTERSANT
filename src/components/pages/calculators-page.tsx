import BaseLink from '../../components/link/base-link'
import VCenterRow from '../../components/v-center-row'
import HCenterRow from '../../components/h-center-row'
import ArrowRightIcon from '../icons/arrow-right'
import CalculatorIcon from '../icons/calculator'

const calcLink = (name: string, description: string, to: string) => {
  return (
    <li>
      <BaseLink
        href={to}
        aria={`Click to open ${name} calculator`}
        className="flex flex-col items-center w-full h-full border border-gray-200 rounded-lg w hover:shadow animate-shadow"
      >
        <div className="h-full px-6 py-8">
          <HCenterRow className="w-full">
            <CalculatorIcon className="w-16 fill-blue-300" />
          </HCenterRow>
          <div className="mt-8">
            <h4 className="font-semibold">{name}</h4>

            <p className="font-light">{description}</p>

            {/* <BaseLink
            href={to}
            
          >
            View
          </BaseLink> */}
          </div>
        </div>
        {/* <VCenterRow className="justify-center mb-8 text-sm uppercase font-semibold text-emerald-400 fill-emerald-400 gap-2">
          Run <ArrowRightIcon className="w-4" />
        </VCenterRow> */}
      </BaseLink>
    </li>
  )
}

const CalculatorsPage = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {calcLink(
        'Fees',
        'Understand how even small changes in fees can have a big impact on your return.',
        '/calculators/fees'
      )}
      {calcLink(
        'Retirement',
        'See when you might reach your retirement goal.',
        '/calculators/retirement'
      )}
      {calcLink(
        'Save A Million',
        'See how long it will take you to save a million dollars.',
        '/calculators/save-a-million'
      )}
    </ul>
  )
}

export default CalculatorsPage
