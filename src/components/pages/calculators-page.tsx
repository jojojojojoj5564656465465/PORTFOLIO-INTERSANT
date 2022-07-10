import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BaseLink from '../../components/link/base-link'
import { faArrowRight, faCalculator } from '@fortawesome/free-solid-svg-icons'
import VCenterRow from '../../components/v-center-row'
import HCenterRow from '../../components/h-center-row'

const calcLink = (name: string, description: string, to: string) => {
  return (
    <li className="mb-8">
      <BaseLink
        href={to}
        aria={`Click to open ${name} calculator`}
        className="flex flex-col items-center w-full h-full border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
      >
        <div className="h-full px-6 py-8">
          <HCenterRow className="w-full">
            <FontAwesomeIcon
              icon={faCalculator}
              className="w-24 text-gray-300"
            />
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
        <VCenterRow className="justify-center pb-8 text-sm uppercase font-semibold text-emerald-400 w-full">
          Run <FontAwesomeIcon icon={faArrowRight} className="w-5 ml-2" />
        </VCenterRow>
      </BaseLink>
    </li>
  )
}

const CalculatorsPage = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
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
        '/calculators/save-million'
      )}
    </ul>
  )
}

export default CalculatorsPage
