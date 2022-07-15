import { range } from 'lodash-es'
import { ReactNode } from 'react'
import cn from '../lib/class-names'
import ChevronLeftIcon from './icons/chevron-left'
import ChevronRightIcon from './icons/chevron-right'
import BaseLink from './link/base-link'
import BlueLink from './link/blue-link'
import ToBlueLink from './link/to-blue-link'
import VCenterRow from './v-center-row'

const makeUrl = (root: string, page: number) => {
  return `${root}/page/${page}`
}

const makePageUrl = (p: number, page: number, pages: number, root: string) => {
  if (p === page) {
    return (
      <BlueLink
        href={makeUrl(root, p)}
        aria={`View page ${p}`}
        underline={false}
      >
        {p}
      </BlueLink>
    )
  } else {
    if (p <= pages) {
      return (
        <ToBlueLink
          href={makeUrl(root, p)}
          aria={`View page ${p}`}
          underline={false}
        >
          {p}
        </ToBlueLink>
      )
    } else {
      return p
    }
  }
}

const BTN_CLS =
  'flex flex-row items-center justify-center min-w-8 h-8 rounded-md overflow-hidden border border-transparent'

interface BaseButtonProps {
  href: string
}

interface ButtonProps extends BaseButtonProps {
  aria?: string
  className?: string
  children?: ReactNode
}

const LinkButton = ({ href, aria, className, children }: ButtonProps) => (
  <BaseLink
    href={href}
    aria={aria}
    className={cn(
      BTN_CLS,
      'text-blue-500 fill-blue-500 hover:border-gray-300 transition duration-300',
      className
    )}
  >
    {children}
  </BaseLink>
)

const NavButton = ({ href, aria, className, children }: ButtonProps) => (
  <LinkButton href={href} aria={aria} className={cn('px-2 gap-x-2', className)}>
    {children}
  </LinkButton>
)

const PrevButton = ({ href }: BaseButtonProps) => (
  <NavButton href={href} aria="Previous page">
    <ChevronLeftIcon className="w-2" /> Prev
  </NavButton>
)

const NextButton = ({ href }: BaseButtonProps) => (
  <NavButton href={href} aria="Next page">
    Next <ChevronRightIcon className="w-2" />
  </NavButton>
)

interface ISelectedPageButtonProps {
  page: number
  root?: string
}

interface IPageButtonProps extends ISelectedPageButtonProps {
  currentPage: number
}

interface IBasePageButtonProps extends ISelectedPageButtonProps {
  className?: string
  children?: ReactNode
}

interface IProps extends ISelectedPageButtonProps {
  pages: number
}

const BasePageButton = ({
  page,
  root = '/',
  className,
}: IBasePageButtonProps) => (
  <BaseLink
    href={makeUrl(root, page)}
    aria={`Goto page ${page}`}
    className={cn(BTN_CLS, className)}
  >
    {page}
  </BaseLink>
)

const SelectedPageButton = ({ page, root = '/' }: ISelectedPageButtonProps) => (
  <BasePageButton page={page} root={root} className="bg-blue-500 text-white">
    {page}
  </BasePageButton>
)

const PageButton = ({ page, currentPage, root = '/' }: IPageButtonProps) =>
  page === currentPage ? (
    <SelectedPageButton page={page} root={root} />
  ) : (
    <BasePageButton
      page={page}
      root={root}
      className="hover:border-gray-300 transition duration-300"
    >
      {page}
    </BasePageButton>
  )

const Ellipsis = () => <li className={BTN_CLS}>...</li>

const Pagination = ({ page, pages, root = '/blog' }: IProps) => {
  const pageStart = Math.max(page - 1, 2)
  const pageEnd = Math.min(page + 1, pages - 1)

  const prevPage = Math.max(1, page - 1)
  const nextPage = Math.min(pages, page + 1)

  return (
    <VCenterRow tag="ul" className="gap-x-1 mx-auto">
      <li>
        <PrevButton href={makeUrl(root, prevPage)} />
      </li>

      <li>
        <PageButton page={1} currentPage={page} root={root} />
      </li>

      {pageStart > 2 && <Ellipsis />}

      {range(pageStart, pageEnd + 1).map((p: number, index: number) => (
        <li key={p}>
          <PageButton page={p} currentPage={page} root={root} />
        </li>
      ))}

      {pageEnd < pages - 1 && <Ellipsis />}

      <li>
        <PageButton page={pages} currentPage={page} root={root} />
      </li>

      <li>
        <NextButton href={makeUrl(root, nextPage)} />
      </li>
    </VCenterRow>
  )
}

export default Pagination
