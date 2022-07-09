import portfolios from '../../../_content/reviews/portfolios.json'
import SideLayout from '../../layouts/side-layout'
import BlueIndexLink from '../../components/link/blue-index-link'
import ReviewExpandDiv from '../../components/reviews/review-expand-div'

// interface Props {
//   portfolio: any
// }

// const PortfolioTagsList = ({ portfolio }: Props) => (
//   <VCenterRow className="mt-4">
//     <div className="mr-4">
//       <FontAwesomeIcon icon="tags" />
//     </div>

//     <ol>
//       {portfolio.tags.map((tag: string, index: number) => {
//         return (
//           <li className={`inline-block ${index > 0 ? 'pl-2' : ''}`} key={index}>
//             <BaseLink
//               href={getPortfolioTagUrl(tag)}
//               className={`inline-block bg-gray-100 rounded-full px-3 py-2 text-xs font-medium uppercase trans-ani`}
//             >
//               {tag}
//             </BaseLink>
//           </li>
//         )
//       })}
//     </ol>
//   </VCenterRow>
// )

interface IProps {
  portfolio: any
  index: number
}

const Portfolio = ({ portfolio, index }: IProps) => {
  const maxRows: number = Math.max(
    ...portfolio.brokerages.map((brokerage: any) => {
      return brokerage.stocks.length
    })
  )

  return (
    <ReviewExpandDiv key={index} title={`${index + 1}. ${portfolio.name}`}>
      <>
        <p className="mt-4">{portfolio.description}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {portfolio.brokerages.map((brokerage: any, porfolioIndex: number) => {
            let bg: string

            switch (brokerage.name) {
              case 'Fidelity':
                bg = 'text-emerald-500'
                break
              case 'Schwab':
                bg = 'text-blue-500'
                break
              default:
                bg = 'text-rose-500'
                break
            }
            return (
              <div key={porfolioIndex}>
                <div key={porfolioIndex}>
                  <h3 className="font-bold tracking-wide text-xs text-gray-500">
                    {brokerage.name}
                  </h3>

                  <table key={porfolioIndex} className="w-full mt-2">
                    <tbody>
                      {brokerage.stocks.map(
                        (stock: any, brokerageIndex: number) => {
                          return (
                            <tr key={brokerageIndex}>
                              <td className="mb-2 truncate m-0 p-0">
                                <p className="font-semibold">{stock.name}</p>
                                <p>{stock.ticker}</p>
                              </td>

                              <td className="mb-2 text-right">
                                {Math.round(stock.pc * 100)}%
                              </td>
                            </tr>
                          )
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>

        {/* <PortfolioTagsList portfolio={portfolio} /> */}

        <div className="mt-8">
          <BlueIndexLink
            href={portfolio.url}
            aria="Backtest portfolio on Portfolio Visualizer"
          >
            Backtest Portfolio
          </BlueIndexLink>
        </div>
      </>
    </ReviewExpandDiv>
  )
}

const Page = () => {
  return (
    <SideLayout
      title="Portfolios"
      description="Simple porfolios to help you save for retirement. Customize for your needs."
    >
      <ul>
        {portfolios.map((portfolio: any, index: number) => {
          return (
            <li key={index}>
              <Portfolio index={index} portfolio={portfolio} />
            </li>
          )
        })}
      </ul>
      <></>
    </SideLayout>
  )
}

export default Page
